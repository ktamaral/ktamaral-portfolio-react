import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  /*CalendarIcon,
  FlagIcon,*/
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/iStock-1325876343-1920x1280.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.webp';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
  SkillCard,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Katie Amaral | Software Engineer',
  description: "Katie Amaral's portfolio website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Katie Amaral`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full-Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Harvard University Library Technology Serivces</strong> building modern,
        accessible, and scalable multimedia services for Harvard's vast collection of digital assets.
        I have a master's degree in <strong className="text-stone-100">Computer Information Systems</strong> with a 
        concentration in IT Security from Boston University, and over eight years of experience working as a software engineer.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'Boston, MA', Icon: MapIcon},
    /*{label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},*/
    {label: 'Interests', text: 'Hiking, Traveling, Yoga', Icon: SparklesIcon},
    {label: 'Study', text: 'Boston University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Harvard University', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Portuguese',
        level: 2,
      },
      {
        name: 'Spanish',
        level: 1,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://katieamaral.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://katieamaral.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://katieamaral.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://katieamaral.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://katieamaral.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://katieamaral.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://katieamaral.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://katieamaral.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://katieamaral.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://katieamaral.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://katieamaral.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'Graduated 2014 | Cumulative GPA: 4.0',
    location: 'Boston University',
    title: 'Master of Science - Computer Information Systems IT Security',
    content: (
      <p>
        • Web Application Development – core competencies in web application technologies to create dynamic web applications with relational databases, develop skills in both front- and back-end coding<br />
        • Network Security – advanced network security issues and solutions, services, access controls, vulnerabilities, threats, risks, network architectures, attacks, network security capabilities and mechanisms<br />
        • Enterprise Information Security – security in computer systems, networks, applications, memory protection, access control and authentication, file system security, backup and recovery management, intrusion and virus protection mechanisms, application level protections, cryptography<br />
        • IT Security Policies and Procedures – development and implementation of security policies, risk management plans, standards and procedures on infrastructure, systems, networks, data, operations and user access<br />
        • Information Systems Analysis – analysis and design, object oriented methods, requirements analysis, UML, software system architecture, design, implementation and management, project control, systems-level testing<br />
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2019 - Present',
    location: 'Harvard University',
    title: 'Senior Software Engineer',
    content: (
      <p>
        <strong className="text-black-100">Full-Stack Software Engineering</strong> - Design and build large-scale, performant, secure,
        and accessible applications for Harvard Library, the largest academic library in the world<br />
        <strong className="text-black-100">CI/CD</strong> - Automate CI/CD workflows; write playbooks to manage configurations and
        encrypt secrets (Ansible), orchestrate deployments (Docker Swarm and Kubernetes)<br />
        <strong className="text-black-100">Security</strong> - Write all software with secure coding practices such as data encryption, session
        management, network security, input validation, parameterization, event logging, access
        controls, and more; build and integrate authentication and authorization services; scan
        applications and remediate security vulnerabilities<br />
        <strong className="text-black-100">Automated Testing</strong> - Write unit and integration tests with coverage analysis (Jest, PyTest)<br />
        <strong className="text-black-100">Architecture Design</strong> - Create diagrams and technical documentation to design complex
        systems based on software engineering architecture principles and best practices;<br />
        collaborate with various stakeholders to collect functional requirements, integrations,
        dependencies, and non-functional requirements for performance, security, and availability<br />
      </p>
    ),
  },
  {
    date: 'March 2015 - April 2019',
    location: 'Broad Institute of Harvard and MIT',
    title: 'Software Engineer',
    content: (
      <p>
        <strong className="text-black-100">Full-Stack Software Engineering</strong> - Develop custom web applications including front-end,
        backend, databases, authenticationa, version control, deployment, monitoring, security
        controls, upgrades, and support<br />
        <strong className="text-black-100">Systems Integration</strong> - Integrate systems using Web Service APIs (REST/SOAP)<br />
        <strong className="text-black-100">Systems Administration</strong> - Linux and Windows server administration<br />
        <strong className="text-black-100">QA Testing</strong> - Create QA test matrix, write automated testing scripts<br />
        <strong className="text-black-100">Development Operations</strong> - Automate build and deployment using Docker and Jenkins<br />
        <strong className="text-black-100">Software Development Lifecycle</strong> - Optimize and standardize SDLC for custom software
        applications hosted both on-premises and in the cloud<br />
        <strong className="text-black-100">IT Automation</strong> - Automate and standardize IT administration tasks with scripts and scheduled jobs<br />
        <strong className="text-black-100">IT Security</strong> - Analyze systems and applications for security vulnerabilities, implement
        controls and patches, adhere to security best practices, ensure compliance with regulations<br />
        <strong className="text-black-100">ServiceNow SaaS</strong> - Develop custom applications in the ServiceNow platform<br />
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '',
      text: '',
      image: '',
    },
    {
      name: '',
      text: '',
      image: '',
    },
    {
      name: '',
      text: '',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contacts',
  description: 'Contacts',
  items: [
    {
      type: ContactType.Email,
      text: 'amaral.katie@gmail.com',
      href: 'mailto:amaral.katie@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Boston, MA, USA',
      href: 'https://www.google.com/maps/place/Boston,+MA/@42.3143203,-71.0528557,12z',
    },
    /*{
      type: ContactType.Instagram,
      text: '@',
      href: '',
    },*/
    {
      type: ContactType.Github,
      text: 'ktamaral',
      href: 'https://github.com/ktamaral',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ktamaral'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/2183592/ktamaral'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/katieamaral/'},
  /*{label: 'Instagram', Icon: InstagramIcon, href: ''},
  {label: 'Twitter', Icon: TwitterIcon, href: ''},*/
];

/**
 * Skill Cards
 */
export const skillCards: SkillCard[] = [
  {
    title: 'Projects',
    description: 'Check out my projects',
    image: porfolioImage1,
    //href: `#${SectionId.Portfolio}`,
    Icon: ArrowDownTrayIcon,
  },
  {
    title: 'Resume',
    description: 'Check out my resume',
    image: porfolioImage2,
    //href: '/assets/resume.pdf',
    Icon: ArrowDownTrayIcon,
  },
  {
    title: 'Contact',
    description: 'Contact me',
    image: porfolioImage3,
    //href: `#${SectionId.Contact}`,
    Icon: ArrowDownTrayIcon,
  },
];
