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
          Full Stack Python Developer with 7+ years of experience building Al-driven applications, real-time analytics
          dashboards, and scalable cloud services. Skilled in designing chatbot systems, implementing ML-powered
          features, and delivering high-performance APIs using FastAPI and Django. Adept at developing rich front-end
          interfaces with React and Recharts, managing ETL pipelines, and deploying distributed systems on AWS with
          Docker and CI/CD automation. Proven ability to work across teams, turn complex data into usable insights, and
          deliver production-ready features that drive engagement and better decisions.
        </ReactMarkdown>
      </article>

      <ul className="location grid grid-cols-1 sm:grid-cols-2 mt-6 gap-y-2">
        {/* <MyInfo field="age" value={`${new Date().getFullYear() - 1993}`} /> */}
        {/* <MyInfo field="residence" value="United States" /> */}
        <MyInfo field="freelance" value="Available" />
        <MyInfo field="Location" value="New York, US" />
      </ul>
    </div>
  );
}
