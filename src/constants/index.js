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
    carrent,
    jobit,
    tripguide,
    threejs,
    france,
    jupiter,
    laas,
    green,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Odata Interface for Microsoft PowerBI",
      company_name: "A French Sports Data Company",
      icon: france,
      iconBg: "#383E56",
      date: "Feb 2022 - Jun 2023",
      points: [
        "Crafted an API ensuring seamless integration between MongoDB and Power BI.",
        "Guaranteed accurate, real-time data accessibility for clients to aid in their decision-making processes.",
        "Technologies Used: Microsoft Power BI, MongoDB, oData standards."
      ],
    },
    {
      title: "Canvas Application",
      company_name: "Jupiter Systems",
      icon: jupiter,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Jan 2023",
      points: [
        "Engaged in bug fixing, improving the platform's reliability and stability.",
        "Innovatively introduced a feature to limit simultaneous streaming from the same account across multiple devices.",
        "Authored and integrated test cases, and incorporated Nightwatch for binary data verification.",
        "Technologies Used: Node.js, React, Redux, Express, WebRTC, Mediasoup, Nightwatch.",
      ],
    },
    {
      title: "Lock Application for Cycle",
      company_name: "LAAS Copenhagen",
      icon: laas,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Engineered scalable APIs for user management, lock control, and transaction history. Implemented advanced security measures, including encryption and authentication protocols, to ensure user data protection.",
        "Designed a user-friendly GUI with clear navigation and intuitive controls. Integrated real-time notifications to alert users about the lock's status and potential security threats. Ensured compatibility across multiple platforms, considering the diverse user base.",
        "Successful integration of the backend with the front end resulted in an application that's not only functionally rich but also visually appealing.",
      ],
    },
    {
      title: "Plywood Sound Tester",
      company_name: "Greenply",
      icon: green,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed a UI using React and Redux tailored for plywood quality assessment through sound analysis.",
        "Integrated audio analytics tools, WebAudio API, and Tensorflow.js to analyze audio data in real time.",
        "Established a Node.js and Express backend to enable seamless communication and deliver immediate quality feedback to users."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };