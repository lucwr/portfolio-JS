import IconTitle from "./IconTitle";
import ResumeItem from "./ResumeItem";
import { FaGraduationCap, FaNetworkWired } from "react-icons/fa";
import ResumeSkeleton from "./ResumeSkeleton";
import resumeOperations from "../../graphqlOperations/resume";
import { ExperienceData } from "../../types";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";

interface ExperienceQuery {
  resumes: ExperienceData[];
}

export default function MyResume() {
  // const { data, error } = useQuery<ExperienceQuery>(
  //   resumeOperations.Queries.getExperience
  // )
  const data: ExperienceQuery = {
    resumes: [
      {
        id: "1",
        badge: "03/2020 - 09/2023",
        desc: "",
        experience: true,
        subTitle: "Centretek",
        title: "Software Engineer",
        logo: { url: "/images/resume/centretek.jpg" },
      },
      {
        id: "2",
        badge: "02/2018 - 01/2020",
        desc: "",
        experience: true,
        subTitle: "Turn2Me",
        title: "Full Stack Engineer",
        logo: { url: "/images/resume/turn2me.jpg" },
      },
      {
        id: "3",
        badge: "11/2015 - 01/2018",
        desc: "",
        experience: true,
        subTitle: "Zetaton",
        title: "Full Stack Developer",
        logo: { url: "/images/resume/zetaton.jpg" },
      },
      {
        id: "4",
        badge: "2011 - 2015",
        desc: "",
        experience: false,
        subTitle: "Towson University",
        title: "B.S. in Computer Science",
        logo: { url: "/images/resume/touson.jpg" },
      },
    ],
  };
  const filteredData = useMemo<
    [ExperienceData[], ExperienceData[]] | undefined
  >(() => {
    const experience: ExperienceData[] = [];
    const education: ExperienceData[] = [];
    data.resumes.forEach((r) => {
      if (r.experience) {
        experience.push(r);
      } else {
        education.push(r);
      }
    });
    return [experience, education];
  }, [data]);

  // if (error) console.log(error)
  return (
    <ul className="grid grid-cols-1">
      <li className="py-8 px-12 borderLeft">
        <IconTitle title="experience" Icon={FaNetworkWired} />
        <div className="grid sm:grid-cols-2 grid-cols-1 borderLeft gap-x-6">
          {filteredData === undefined ? (
            <>
              <ResumeSkeleton border />
              <ResumeSkeleton border />
              <ResumeSkeleton />
            </>
          ) : (
            filteredData[0].map((r, idx) => (
              <ResumeItem key={r.id} resume={r} border={true} />
            ))
          )}
        </div>
      </li>

      <li className="py-8 px-12 relative vCustomLine sm:before:block before:hidden before:left-0">
        <IconTitle title="education" Icon={FaGraduationCap} />
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-6">
          {filteredData === undefined ? (
            <>
              <ResumeSkeleton border />
              <ResumeSkeleton border />
              <ResumeSkeleton />
            </>
          ) : (
            filteredData[1].map((r, idx) => (
              <ResumeItem key={r.id} resume={r} border={true} />
            ))
          )}
        </div>
      </li>
    </ul>
  );
}
