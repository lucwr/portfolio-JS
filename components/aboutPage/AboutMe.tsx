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
          Dynamic Web3 Full-Stack Engineer with 6+ years of experience building secure, scalable dApps and smart contracts across Ethereum, Polygon, and other EVM-compatible networks.
          Skilled in Solidity, ERC standards (ERC‑20, 721, 1155, 4337), Solana and full-stack tools like React, Next.js, Node.js, and AWS.
          Led the development of DeFi platforms, smart wallets, and NFT marketplaces with a focus on gas efficiency, seamless onboarding, and compliance.
          Experienced in integrating AI capabilities using FastAPI, SageMaker, and NLP to enable intelligent automation and adaptive user experiences.
          Seeking opportunities to contribute to visionary teams.
        </ReactMarkdown>
      </article>

      <ul className="location grid grid-cols-1 sm:grid-cols-2 mt-6 gap-y-2">
        {/* <MyInfo field="age" value={`${new Date().getFullYear() - 1993}`} /> */}
        {/* <MyInfo field="residence" value="United States" /> */}
        <MyInfo field="freelance" value="Available" />
        <MyInfo field="Location" value="Singapore" />
      </ul>
    </div>
  );
}
