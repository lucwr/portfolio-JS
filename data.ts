import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import {
  FaDev,
  FaDiscord,
  FaEye,
  FaFacebookF,
  FaRegListAlt,
  FaRegNewspaper,
  FaRegUser,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdComputer, MdDashboard } from "react-icons/md";
import {
  SiFigma,
  SiFirebase,
  SiFiverr,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";
import About from "./components/aboutPage/About";
import Blogs from "./components/blogsPage/Blogs";
import DevBlogs from "./components/blogsPage/DevBlogs";
import Contact from "./components/contactPage/Contact";
import GuestBook from "./components/guestbookPage/GuestBook";
import Resume from "./components/resumePage/Resume";
import Stats from "./components/statistics/Stats";
import Works from "./components/worksPage/Works";
import {
  ClientData,
  MenuData,
  ServiceData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
} from "./types";

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
    Component: Works,
  },
  // {
  //   id: 4,
  //   label: "blog",
  //   Icon: FaRegNewspaper,
  //   Component: DevBlogs,
  // },
  // {
  //   id: 5,
  //   label: "stats",
  //   Icon: MdDashboard,
  //   Component: Stats,
  // },
  {
    id: 6,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
  // {
  //   id: 7,
  //   label: "guest book",
  //   Icon: MdComputer,
  //   Component: GuestBook,
  // },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 3,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: "https://github.com/lucwr",
    info: "Star my projects on Github",
  },
  {
    id: 4,
    Icon: AiFillLinkedin,
    label: "Linkedin",
    logoColor: "#0072b1",
    mediaUrl: "https://www.linkedin.com/in/david-chen-a8b198392/",
    info: "Let's connect on Linkedin",
  },
];

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Modern Front-End Frameworks",
    Icon: SiNextdotjs,
    description:
      "Scalable, mobile-friendly interfaces that combine modern design with real-time blockchain and AI features to boost engagement and conversion.",
  },
  {
    id: 2,
    title: "Back-end",
    Icon: SiNodedotjs,
    description:
      "Backend APIs tailored for dApps, DeFi, and AI-driven platforms—leveraging serverless frameworks, smart contract integration, and modern database solutions.",
  },
  {
    id: 3,
    title: "AI Integration & Automation",
    Icon: SiFigma,
    description:
      "Integrated AI microservices using FastAPI and SageMaker for automation, fraud detection, predictive analytics, enhancing Web2/Web3 app efficiency.",
  },
  {
    id: 4,
    title: "DevOps & Deployment",
    Icon: SiFirebase,
    description:
      "Automated CI/CD pipelines with Docker, CircleCI, GitLab CI; deployed secure, scalable apps on AWS S3, CloudFront, and API Gateway.",
  },
];

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: "https://www.linkedin.com/",
    imgLocation: "/images/lin.png",
  },
  {
    id: 2,
    linkLocation: "https://www.freelancer.com/",
    imgLocation: "/images/freelancer.png",
  },
  {
    id: 3,
    linkLocation: "https://www.upwork.com/",
    imgLocation: "/images/upwork.png",
  },
  {
    id: 4,
    linkLocation: "https://www.envato.com/",
    imgLocation: "/images/envato.png",
  },
];

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  userName: "Martin Fowler",
  userProfession: "Software Developer",
  userImage: { url: "/images/martin.jpg" },
};

export const statisticsData: StatisticsData[] = [
  {
    title: "stack",
    info: "MERN or T3",
  },
  {
    title: "projects",
    info: "70+",
  },
  {
    title: "clients",
    info: "40+",
  },
];
