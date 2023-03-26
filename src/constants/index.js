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
    tcs,
    infosys,
    clecotech,
    carrent,
    jobit,
    tripguide,
    cryptowdfunding,
    shoppy,
    codegpt,
    cryptoverse,
    fashionation,
    mjhata,
    threejs,
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
      title: "React.js Developer",
      company_name: "Tata Consultancy Services",
      icon: tcs,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Performed testing and optimization on 30+ React components for better feasibility across the devices.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Infosys Ltd.",
      icon: infosys,
      iconBg: "#1791FF",
      date: "Feb 2020 - Nov 2020",
      points: [
        "Migrated a Wordpress based website to a Component-based React web application.",
        "Collaborated with the team of 15+ members in updating and enhancing the performance and load time of web application.",
        "Contributed in integrating database with backend application using mongoose and express.js.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
        "roactively sought out opportunities to learn new technologies and techniques, attending workshops and training sessions to expand my knowledge and skillset.",
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
      name: "CrytowdFunding",
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
      name: "MJH Ata",
      description:
        "Discover this modern and comprehensive school website, providing easy access to information, galleries, and seamless communication through contact form.",
      tags: [
        {
          name: "javascriptES6",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: mjhata,
      source_code_link: "https://github.com/saubhagya26/mjh-ata",
      project_link: "https://mjhata.netlify.app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };