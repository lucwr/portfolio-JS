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
          Dedicated and results-driven Full Stack Developer with over 7 years of
          experience in designing, developing, and optimizing web applications
          using the MERN stack. Proven ability to deliver high-quality software
          solutions, collaborate with cross-functional teams, and drive projects
          to completion. Seeking a challenging role to leverage my skills and
          contribute to innovative projects.
        </ReactMarkdown>
      </article>

      <ul className="location grid grid-cols-1 sm:grid-cols-2 mt-6 gap-y-2">
        <MyInfo field="age" value={`${new Date().getFullYear() - 1993}`} />
        {/* <MyInfo field="residence" value="United States" /> */}
        <MyInfo field="freelance" value="Available" />
        <MyInfo field="address" value="Maryland, United States" />
      </ul>
    </div>
  );
}
