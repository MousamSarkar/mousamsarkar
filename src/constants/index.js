import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  htmlogo,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  iltech,
  tcs,
  javalogo,
  jira,
  mysql,
  oracle,
  python,
  spring,
  mouse_location_prediction,
  sentiment_analysis,
  movie_review,
  bitbucketlogo,
  scikitlogo,
  teamcitylogo,
  tflogo,
  tomcatlogo,
  urbancode,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Researcher",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: htmlogo,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: javalogo,
  },
  {
    name: "Spring Framework",
    icon: spring,
  },
  {
    name: "Tomcat",
    icon: tomcatlogo,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Oracle DB",
    icon: oracle,
  },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "Tensor Flow",
  //   icon: tflogo,
  // },
  // {
  //   name: "Scikit Learn",
  //   icon: scikitlogo,
  // },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Research Assistant",
    company_name: "Illinois Institute of Technology",
    icon: iltech,
    iconBg: "#383E56",
    date: "August 2022 - May 2023",
    points: [
      "Studied and analyzed different fairness issues caused in 10+ machine-learning pipelines.",
      "Analyzed fairness of different types models leveraging 3+ fairness metrics (Statistical parity, Equal opportunity).",
      "Conducted research on provenance of pre-processing data through tagging in 3 methods.",
      "Researched on the effect of pre-processing in machine-learning fairness utilizing the GOPHER system to generate data-based explanations for 3 databases and studied the effect of provenance on computational time.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "August 2019 - August 2021",
    points: [
      "Developed Micro-services for an application of an American bank leveraging Java and Spring Boot and converted monolithic applications to Micro-services to reduce dependency and improve scalability.",
      "Created REST APIs, and test cases and evaluated in Postman and maintained dependency versions with BlackDuck for 2+ applications, and reduced the vulnerability of the application.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Built, deployed, documented 8+ services using Spring, UDeploy, Teamcity and Jira.",
    ],
  },
];

const testimonials = [
  //   {
  //     testimonial:
  //       "",
  //     name: "",
  //     designation: """,
  //     company: "",
  //     image: "",
  //   },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "Simple react portfolio application with tailwindcss and Threejs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: movie_review,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Movie Review",
    description:
      "Utilized Spring boot, React and MongoDB to create a web application where users can write reviews about a movie and also watch the trailer with youtube embeded link",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springframework",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: movie_review,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Mouse Position Prediction",
    description:
      "Utilized DeepLabCut tool to annotate body parts of mouse and bounding box of two mice in an image and generate CSV file with the coordinates of the locaiton.Thereafter, created a recurrent neural network model,trained and predicted the mouse location",
    tags: [
      {
        name: "machinelearning",
        color: "blue-text-gradient",
      },
      {
        name: "keras",
        color: "green-text-gradient",
      },
      {
        name: "deeplabcut",
        color: "pink-text-gradient",
      },
    ],
    image: mouse_location_prediction,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Sentiment Analysis",
    description:
      "Annotated twitter data on two topics employing LightTag tool. Applying a gradient boosting classifier, a baseline model is produced with no feature engineering to the data, and thereafter 11 types of feature engineering were done on the data and trained and tested on the same model ",
    tags: [
      {
        name: "naturallanguageprocessing",
        color: "blue-text-gradient",
      },
      {
        name: "scikitlearn",
        color: "green-text-gradient",
      },
    ],
    image: sentiment_analysis,
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
