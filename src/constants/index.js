import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    cts,
    tcs,
    infosys,
    clecotech,
    cryptowdfunding,
    shoppy,
    codegpt,
    cryptoverse,
    fashionation,
    threejs,
    fienhance,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "blog",
      title: "Blog",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UX / UI Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "MERN Stack Developer",
      company_name: "Cognizant Technology Services",
      icon: cts,
      iconBg: "#D4E6fC",
      date: "Aug 2023 - Present",
      points: [
        "Led architectural decisions with the client, ensuring alignment with business goals and a scalable application foundation.",
        "Implemented microservices to enhance modularity, reducing deployment time and improving scalability.",
        "Managed complex forms and state using React Query & React Hook Forms, optimizing user workflows.",
        "Optimized architecture and build with Webpack & custom plugins, reducing bundle size and load time.",
      ]
    },
    {
      title: "React.js Developer",
      company_name: "Tata Consultancy Services",
      icon: tcs,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - Aug 2023",
      points: [
        "Developed responsive UI components using a mobile-first approach, enhancing user experience across various devices.",
        "Formulated comprehensive Jest test cases to ensure code reliability and maintainability, achieving 90% test coverage.",
        "Built and integrated RESTful APIs using Node.js, seamlessly linking frontend and backend systems.",
        "Implemented web accessibility standards, expanding the application’s usability to support users with disabilities and improving compliance.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Infosys Ltd.",
      icon: infosys,
      iconBg: "#1791FF",
      date: "Feb 2020 - Nov 2020",
      points: [
        "Gained hands-on experience in AWS deployment, applying best practices for secure and scalable cloud solutions.",
        "Collaborated with a team of 8+ members, enhancing project quality through coordinated efforts and shared insights.",
        "Learned to design MongoDB schemas with Mongoose, optimizing data management and backend integration with Node.js.",
        "Developed 5+ web applications, strengthening expertise in JavaScript, React, and modern web practices."
      ],
    },
    {
      title: "Web Developer - Intern",
      company_name: "Clecotech International",
      icon: clecotech,
      iconBg: "#383E56",
      date: "Jun 2019 - Jul 2019",
      points: [
        "Designed the structure and web pages layout as per the user requirements with 100% client satisfaction.",
        "Responsible for making responsive pages by implementing mobile-first approach on pre-existing desktop versions.",
        "Proactively sought out opportunities to learn new technologies and techniques, attended workshops and training sessions.",
        "Collaborated with senior developers on multiple projects, contributing to the development of new features and functionality.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but his work proved me wrong.",
      name: "Simona Hlsana",
      designation: "Project Manager",
      company: "Quantum Dynamics",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Saubhagya does.",
      name: "Bredy Thomas",
      designation: "CTO & Co-Founder",
      company: "Synergy Solutions",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Saubhagya optimized our website, our traffic increased by 50%. We can't thank enough!",
      name: "Ana Pedro",
      designation: "Chief Engineer",
      company: "Globex Industries",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CryptowdFunding",
      description:
        "Revolutionize crowdfunding with my Ethereum-based Web3.0 platform, enabling secure and transparent funding for projects worldwide.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "thirdweb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: cryptowdfunding,
      source_code_link: "https://github.com/saubhagya26/cryptowdfunding-client",
      project_link: "https://cryptowdfunding.netlify.app",
    },
    {
      name: "Shoppy Dashboard",
      description:
        "Elevate your data management with this feature-rich dashboard app, showcasing data insights in intuitive charts and providing tools for seamless productivity.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "syncFusion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: shoppy,
      source_code_link: "https://github.com/",
      project_link: "https://shoppydashboardapp.netlify.app",
    },
    {
      name: "Code GPT",
      description:
        "Get instant coding help with this OpenAI-powered chatbot, delivering accurate and efficient solutions to your programming questions.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: codegpt,
      source_code_link: "https://github.com/saubhagya26/codeGPT",
      project_link: "https://code-gpt-bot.vercel.app",
    },
    {
      name: "Cryptoverse",
      description:
        "Stay up-to-date with the cryptocurrency market using this web application, featuring live charts and breaking news on digital currencies.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "rapidAPI",
          color: "green-text-gradient",
        },
        {
          name: "antd",
          color: "pink-text-gradient",
        },
      ],
      image: cryptoverse,
      source_code_link: "https://github.com/saubhagya26/cryptoverse",
      project_link: "https://cryptoverse0903.netlify.app",
    },
    {
      name: "FashioNation",
      description:
        "Shop the latest fashion trends and enjoy seamless admin control with our e-commerce app, featuring a user-friendly interface and advanced analytics.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "styledcomponents",
          color: "pink-text-gradient",
        },
      ],
      image: fashionation,
      source_code_link: "https://github.com/saubhagya26/Ecomm-client",
      project_link: "",
    },
    {
      name: "Fi-Enhance",
      description:
        "A web application that simplifies your financial planning and helps you make informed decisions about your investments by providing a range of financial calculators.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "reactNative",
          color: "green-text-gradient",
        },
        {
          name: "mui",
          color: "pink-text-gradient",
        },
      ],
      image: fienhance,
      source_code_link: "https://github.com/DevsVilla/fienhance",
      project_link: "https://www.fienhance.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };