import IconTitle from "./IconTitle";
import ResumeItem from "./ResumeItem";
import { FaGraduationCap, FaNetworkWired } from "react-icons/fa";
import ResumeSkeleton from "./ResumeSkeleton";
import { ExperienceData } from "../../types";
import { useMemo } from "react";

interface ExperienceQuery {
  resumes: ExperienceData[];
}

export default function MyResume() {
  // const { data, error } = useQuery<ExperienceQuery>(
  //   resumeOperations.Queries.getExperience
  // )
  const data: ExperienceQuery = useMemo(() =>({
    resumes: [
      {
        id: "1",
        badge: "08/2023 - 07/2025",
        desc: "",
        experience: true,
        subTitle: "SLASH",
        title: "Web3 Full-Stack Engineer",
      },
      {
        id: "2",
        badge: "05/2021 - 07/2023",
        desc: "",
        experience: true,
        subTitle: "PROPINE",
        title: "Full Stack Engineer",
      },
      {
        id: "3",
        badge: "07/2019 - 03/2021",
        desc: "",
        experience: true,
        subTitle: "GUSTO",
        title: "Full Stack Developer",
      },
      {
        id: "4",
        badge: "2016 - 2019",
        desc: "",
        experience: false,
        subTitle: "PSB Academy",
        title: "B.S. in Computer Science",
      },
    ],
  }), []);
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
