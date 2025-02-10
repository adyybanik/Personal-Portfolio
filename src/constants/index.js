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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Journey",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Business Analysis",
      icon: mobile,
    },
    {
      title: "Database Management",
      icon: backend,
    },
    {
      title: "Cybersecurity",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Python",
      icon: nodejs,
    },
    {
      name: "C",
      icon: redux,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
  ];
  
  const experiences = [
    {
      title: "High School",
      company_name: "Knox Grammar School",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "2015 - 2021",
      points: [
        "Engaged in a rigorous academic curriculum blending Math, Science & English with Technology",
        "Participated in extracurricular activities such as coding clubs, business competitions, or entrepreneurship workshops",
        "Developed foundational skills in mathematics, economics, and computer programming",
        "Collaborated with peers on group projects and presentations, honing teamwork and communication skills",
        "Contributed to the school community through involvement in sports teams, clubs, or community service initiatives",
      ],
    },
    {
      title: "Bachelor of Commerce / Computer Science",
      company_name: "University of New South Wales",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Nov 2025",
      points: [
        "Gaining comprehensive knowledge in both business and technology domains",
        "Accessing a diverse range of courses spanning economics, finance, programming, and data analytics",
        "Leveraging state-of-the-art facilities and resources for hands-on learning experiences",
        "Engaging with industry experts and guest speakers through workshops and seminars"
      ],
    },
    {
      title: "Parkify",
      company_name: "Car Park Rental Management System",
      icon: shopify,
      iconBg: "#101010",
      date: "Feb 2024 - April 2024",
      points: [
        "Comprehensive solution: Developed to streamline the process of renting parking spaces",
        "Modern tech stack: Utilizes React for frontend development",
        "Backend powered by Python: Implements robust backend functionalities",
        "MongoDB database: Efficiently stores and manages data related to parking space rentals",
        "Integration of tech stack: Seamlessly integrates frontend, backend, and database components for optimal performance and user experience",
      ],
    },
    {
      title: "Personal Portfolio",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2024",
      points: [
        "Developed a personal portfolio website using ReactJS to showcase skills, projects, and experiences.",
        "Utilized Tailwind CSS for rapid UI development, enabling streamlined styling and consistent design across the website",
        "Integrated Three.js library to incorporate captivating 3D objects and animations, enhancing user engagement and visual appeal",
        "Implemented dynamic content rendering with React components, allowing for easy updates and modifications to the portfolio sections",
        "Ensured cross-browser compatibility and mobile responsiveness for seamless user experience across different devices and screen sizes"
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
