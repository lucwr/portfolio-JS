import { useQuery } from "@apollo/client";
import MyInfo from "../MyInfo";
import profileOperations from "../../graphqlOperations/profile";
import AboutMeSkeleton from "./AboutMeSkeleton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface GetUserBio {
  profiles: [{ bio: string }];
}

export default function AboutMe() {
  // const { loading, error, data } = useQuery<GetUserBio>(
  //   profileOperations.Queries.getBio
  // );

  // if (error) {
  //   console.log(error);
  //   return <AboutMeSkeleton />;
  // }

  // if (loading || data === undefined) return <AboutMeSkeleton />;

  return (
    <div className="px-12 py-10">
      <article className="prose max-w-none prose-h2:mb-2.5 prose-h2:text-[1.6rem] prose-p:text-2xl prose-p:leading-[1.65]">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {/* {data.profiles[0].bio} */}
          Dynamic Senior Full Stack Engineer with 7 years of experience building, deploying, and optimizing scalable web and
          mobile applications. Expertise in modern front-end and back-end technologies, including TypeScript, React, Next.js,
          Vue, Angular, Node.js, Python, and Golang. Proficient in deploying cloud-based solutions using AWS, Firebase, and
          Supabase, with experience in Python, FastAPI, and Django. Adept at collaborating with cross-functional teams to
          deliver high-performance, user-centric applications. Proven ability to drive technical innovation and product success,
          seeking opportunities to contribute to visionary teams.
        </ReactMarkdown>
      </article>

      <ul className="location grid grid-cols-1 sm:grid-cols-2 mt-6 gap-y-2">
        {/* <MyInfo field="age" value={`${new Date().getFullYear() - 1993}`} /> */}
        {/* <MyInfo field="residence" value="United States" /> */}
        <MyInfo field="freelance" value="Available" />
        <MyInfo field="address" value="Los Angeles, CA" />
      </ul>
    </div>
  );
}
