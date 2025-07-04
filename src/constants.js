// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import jpr from './assets/company_logo/jpr.png';
import itbha from './assets/company_logo/itbha.png';


// Education Section Logo's
import sunrise from './assets/education_logo/sunrise.png';
import mdu from './assets/education_logo/mdu.png';


// Project Section Logo's
import RanQuote from './assets/work_logo/ReactQuote.png';
import movie from './assets/work_logo/movie.png';
import todo from './assets/work_logo/todo.png';
import landing from './assets/work_logo/landing.png';
import drawing from './assets/work_logo/drawing.png';
import clock from './assets/work_logo/clock.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
      
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: jpr,
      role: "Web Dev Intern",
      company: "Goshipur Municipal Office",
      date: "June 2024 - July 2024",
      desc: "Developed and managed the official website of a municipal office as a Web Development Intern. Utilized the MERN stack (MongoDB, Express.js, React.js, and Node.js) to build a dynamic and responsive platform, ensuring smooth user interaction and efficient data handling. Handled both frontend and backend tasks, integrated RESTful APIs, and maintained the website to meet administrative needs. Collaborated with stakeholders to ensure timely updates and optimal performance in a real-world environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: itbha,
      role: "React Intern",
      company: "ITBHA International",
      date: "July 2023 - August 2023",
      desc: "Contributed to dynamic projects as a React Intern, focusing on building responsive and interactive user interfaces using ReactJS, JavaScript, HTML, and CSS. Collaborated with the development team to implement reusable components, manage application state efficiently, and integrate APIs to enhance functionality. Played an active role in improving the performance and user experience of web applications through clean, maintainable code and modern frontend practices.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    
  ];
  
  export const education = [ 
    { id: 0, img: mdu,
     school: "Maharshi Dayanand University,(BRCM College)", 
     date: "2021 - 2025",
      grade: "8.5 CGPA", 
      desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering from MDU Rohtak. Throughout my academic journey, I built a solid foundation in core areas of computer science such as Data Structures, Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Web Technologies, and Software Engineering. ",
       degree: "Bachelors In Technology  - CSE", 
      },
        { id: 1,
           img: sunrise,
            school: "Sunrise Public School, Mahendranagar Nepal", date: " 2018 - 2020", grade: "82%", 
            desc: "I completed my 12th from Sunrise Public School under the NEB board, In science faculty. ",
             degree: "Intermediate of Science - ISC (Computer Science)",
             },
         { id: 2,
           img: sunrise,
            school: "Sunrise Public School, Mahendranagar Nepal",
             date: " Till 2018",
            grade: "92%",
             desc: "I completed my class 10 education from Sunrise Public School, Mahendranaagr, under the HSEB board.", degree: "SEE 10th", }, 
            ];
  export const projects = [
    {
      id: 0,
      title: "Random Quote Generator",
      description:
        "A sleek and interactive React.js application built to inspire users with random motivational and thought-provoking quotes. With a single click, the app fetches and displays a new quote from a curated API, complete with author details. Its clean interface and smooth transitions offer an engaging user experience, making it a perfect tool for daily inspiration or creative brainstorming.",
      image: RanQuote,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Lil-Jaguar/Random_Quote_React",
      webapp: "https://velvety-souffle-a3ac2c.netlify.app/",
    },
    {
      id: 1,
      title: "Movie Search App",
      description:
        "A responsive and dynamic movie search application built using React and powered by a movie database API. Users can search for their favorite films, view detailed information such as ratings, genres, release dates, and plot summaries. The platform offers real-time suggestions, intuitive navigation, and a clean UI, making it an ideal tool for movie enthusiasts to explore and discover new titles effortlessly.",
      image: movie,
      tags: ["React JS", "API" , "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Lil-Jaguar/movie-search-app",
      webapp: "https://enchanting-froyo-7459dd.netlify.app/",
    },
    {
      id: 2,
      title: "To Do App",
      description:
        "A minimalist and efficient task management application built with React.js to help users stay organized and productive. The app allows users to add, edit, delete, and mark tasks as complete, with real-time updates and smooth UI interactions",
      image: todo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Lil-Jaguar/To_Do",
      webapp: "https://lil-jaguar.github.io/To_Do/",
    },
    {
      id: 3,
      title: "Landing Page",
      description:
        "A clean and visually appealing landing page crafted using HTML, CSS, and JavaScript to showcase a product, service, or brand. Designed with responsiveness in mind, it features smooth scrolling, clear call-to-actions, and modern layout elements to engage visitors effectively. Ideal for startups or personal portfolios looking to make a strong first impression online.",
      image: landing,
      tags: ["HTML","CSS", "JS"],
      github: "https://github.com/Lil-Jaguar/Landing_Page",
      webapp: "https://lil-jaguar.github.io/Landing_Page/",
    },
    {
      id: 4,
      title: "Drawing App",
      description:
        "An interactive and intuitive drawing application developed using HTML5 Canvas, CSS, and JavaScript. Users can sketch freely with adjustable brush sizes and colors, erase, and clear the canvas with a single click. Designed for creativity and ease of use, the app provides a smooth drawing experience, making it ideal for beginners, artists, or anyone looking to explore digital doodling.",
      image: drawing,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/Lil-Jaguar/Drawing-App",
      webapp: "https://lil-jaguar.github.io/Drawing-App/",
    },
    {
      id: 5,
      title: "Clock Design",
      description:
        "A visually engaging and functional analog clock built using HTML, CSS, and JavaScript. The clock dynamically displays real-time hours, minutes, and seconds with smooth hand movements, mimicking a traditional wall clock. Designed with clean aesthetics and responsive layout, it serves as a great demonstration of DOM manipulation and time-based animations in web development.",
      image: clock,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Lil-Jaguar/Analog-Clock",
      webapp: "https://lil-jaguar.github.io/Analog-Clock/",
    },
    
  ];  