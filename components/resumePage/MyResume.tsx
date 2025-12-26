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
        badge: "01/2024 - 12/2025",
        desc: "",
        experience: true,
        subTitle: "Jasper Al",
        title: "Full Stack Python Developer",
        // logo: { url: "/images/resume/Jasper.svg" },
      },
      {
        id: "2",
        badge: "04/2021 - 12/2023",
        desc: "",
        experience: true,
        subTitle: "BEON.tech",
        title: "Mid-Level Full Stack Python Developer",
        // logo: { url: "/images/resume/beon_blue.webp" },
      },
      {
        id: "3",
        badge: "09/2018 - 03/2021",
        desc: "",
        experience: true,
        subTitle: "Cityblock Health",
        title: "Junior Full Stack Developer",
        // logo: { url: "/images/resume/CityblockHealth.jpg" },
      },
      {
        id: "4",
        badge: "09/2014 - 05/2018",
        desc: "",
        experience: false,
        subTitle: "Manhattan University",
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
