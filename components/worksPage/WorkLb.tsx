import Image from "next/image";
import { MouseEvent } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import MyInfo from "../MyInfo";
import { motion } from "framer-motion";
import { SingleWorkData } from "../../types";
import { ReactiveVar, useQuery } from "@apollo/client";
import workOperations from "../../graphqlOperations/work";
import Loader from "../Loader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BsGithub } from "react-icons/bs";
import { worksData } from "./worksData";

interface Props {
  workId: string;
  reactiveVar: ReactiveVar<string | null>;
}

interface SingleWorkQuery {
  work: SingleWorkData;
}

interface SingleWorkVariables {
  projectId: string;
}

export default function WorkLb({
  workId,
  reactiveVar,
}: {
  workId: number;
  reactiveVar: ReactiveVar<number>;
}) {
  const workData = worksData[workId];
  // const workData: SingleWorkData = {
  //   id: "string",
  //   description: "string",
  //   title: "string",
  //   workUrl: "string",
  //   githubUrl: "string",
  //   clientName: "string",
  //   ownerName: "string",
  //   techStack: [""],
  //   userActions: [""],
  //   images: [{ url: "" }],
  //   date: new Date("2023-04-23"),
  // };
  // const { data: workData } = useQuery<SingleWorkQuery, SingleWorkVariables>(
  //   workOperations.Queries.getSingleWork,
  //   { variables: { projectId: workId } }
  // );

  function closeLb(e: MouseEvent): void {
    if ((e.target as Element).classList.contains("lb")) {
      reactiveVar(-1);
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, type: "spring" }}
      onClick={closeLb}
      className={`lb fixed top-0 left-0 w-screen h-screen bg-gray-900/70 z-50 flex justify-center items-center transition-all duration-200`}
    >
      <main className="w-[70rem] max-w-[90%] bg-gray-800 flex justify-center items-center h-fit">
        {workData === undefined ? (
          <Loader />
        ) : (
          <div className="w-full h-full max-h-full myScroll">
            <div className="w-full relative h-[45rem]">
              <AiFillCloseCircle
                onClick={() => reactiveVar(-1)}
                className="absolute z-10 text-5xl cursor-pointer top-6 right-8 text-main-orange"
              />
              <Image
                src={workData.image}
                alt="project description"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <section className="py-14 px-14">
              <div className="flex flex-wrap items-center justify-between gap-6 mb-4 text-4xl font-semibold tracking-wide text-gray-300 capitalize">
                {workData.title}

                <div className="flex items-center gap-x-4">
                  {workData.workUrl && (
                    <a
                      rel="noreferrer"
                      href={workData.workUrl}
                      target="_blank"
                      className="text-[1.4rem] flex items-center gap-2 rounded-full py-1.5 px-6 tracking-wide font-semibold capitalize hover:bg-sky-600 transition-all duration-300 text-white bg-sky-500"
                    >
                      view
                      <HiOutlineViewGridAdd className="text-3xl" />
                    </a>
                  )}

                  {workData.githubUrl && (
                    <a
                      rel="noreferrer"
                      href={workData.githubUrl}
                      target="_blank"
                      className="text-[1.4rem] flex items-center gap-2 rounded-full py-1.5 px-6 tracking-wide font-semibold capitalize shadow-lg hover:bg-gray-700 transition-all duration-300 text-white bg-gray-900"
                    >
                      github
                      <BsGithub className="text-3xl" />
                    </a>
                  )}
                </div>
              </div>
              {/* <p className="text-xl tracking-wide text-gray-400 capitalize">
                project
              </p> */}

              {/* <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-y-2">
                <MyInfo field="created by" value={workData.ownerName} />
                <MyInfo
                  field="date"
                  value={new Date(workData.date).toLocaleDateString()}
                />
                <MyInfo field="client" value={workData.clientName} />
                <MyInfo field="categories" value="Project" />
              </ul> */}

              <article className="my-10 prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {`${workData.description}`}
                </ReactMarkdown>
              </article>

              {workData?.techStack && (
                <div className="mb-10 text-gray-300 text-[1.4rem] tech-func">
                  <div className="mb-6 sm:mb-0">
                    <h1 className="mb-4 text-2xl font-semibold text-gray-200 capitalize">
                      tech-stack
                    </h1>
                    <div className="">
                      {workData.techStack}
                      {/* {workData.techStack.map((t, idx) => (
                        <li key={idx} className="flex gap-2">
                          {t}
                        </li>
                      ))} */}
                    </div>
                  </div>

                  {/* <div className="col-span-2">
                    <h1 className="mb-4 text-2xl font-semibold text-gray-200 capitalize">
                      user-actions
                    </h1>
                    <ul className="flex flex-col gap-y-2">
                      {workData.userActions.map((u, idx) => (
                        <li key={idx} className="flex gap-2">
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              )}

              {/* {workData.images.slice(1).map((img, idx) => (
                <div
                  // key={idx}
                  className={`w-full relative h-[52rem]`}
                >
                  <Image
                    src={workData.image}
                    alt="project description"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))} */}
            </section>
          </div>
        )}
      </main>
    </motion.section>
  );
}
