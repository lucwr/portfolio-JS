import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import Title from "../Title";
import Work from "./Work";
import workOperations from "../../graphqlOperations/work";
import { SingleWorkData, WorksConnectionData } from "../../types";
import WorksSkeleton from "./WorksSkeleton";
import { currentWorkTab } from "../../apollo-client";
import { useReactiveVar } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import { motion, AnimatePresence } from "framer-motion";
import { worksData } from "./worksData";

interface WorksQuery {
  worksConnection: WorksConnectionData;
}

interface WorksVariables {
  after?: string;
  first: number;
}

export default function Works() {
  const currentTab = useReactiveVar(currentWorkTab);
  const [isOpen, setIsOpen] = useState<string | null>(null);
  // const {
  //   data: worksData,
  //   error: worksError,
  //   fetchMore,
  // } = useQuery<WorksQuery, WorksVariables>(workOperations.Queries.getWorks, {
  //   variables: { first: 6 },
  // })

  const fetchMore = () => {};

  // const filteredWorks = useMemo(() => {
  //   if (worksData === undefined) return;
  //   return worksData.filter((w: any) =>
  //     w?.workTabs.some((t: any) => t?.tab === currentTab)
  //   );
  // }, [worksData, currentTab]);
  // console.log(currentTab);
  // if (worksError) {
  //   console.log(worksError.toString());
  //   return <WorksSkeleton />;
  // }

  if (worksData === undefined) return <WorksSkeleton />;

  return (
    <div
      id="scrollableDiv"
      className="lg:h-full h-[95rem] overflow-y-scroll myScroll"
    >
      {/* <Title name="works" currentMenu={currentTab} /> */}

      {/* <InfiniteScroll
        dataLength={worksData.worksConnection.edges.length}
        next={fetchMore}
        hasMore={worksData.worksConnection.pageInfo.hasNextPage}
        loader={
          <div className="flex justify-center mb-8">
            <Loader />
          </div>
        }
        scrollableTarget="scrollableDiv"
      > */}
      <motion.ul
        layout="position"
        className="grid grid-cols-1 sm:grid-cols-2 relative vCustomLine before:hidden sm:before:block before:left-1/2 before:-translate-x-1/2 pt-12"
      >
        <AnimatePresence>
          {worksData.map((w: SingleWorkData) => (
            <Work
              key={w.id}
              title={w.title}
              imageUrl={w.image}
              projectId={w.id}
            />
          ))}
        </AnimatePresence>
      </motion.ul>
      {/* </InfiniteScroll> */}
    </div>
  );
}
