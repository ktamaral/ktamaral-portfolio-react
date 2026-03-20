import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  /*CalendarIcon,
  FlagIcon,*/
  MapIcon,
  SparklesIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from "../images/iStock-1325876343-1920x1280.webp";
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
import porfolioImage2 from "../images/portfolio/portfolio-2.jpg";
import porfolioImage3 from "../images/portfolio/portfolio-3.jpg";
import profilepic from "../images/profilepic.webp";
import testimonialImage from "../images/testimonial.webp";
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
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Katie Amaral | Software Engineer",
  description: "Katie Amaral's portfolio website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
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
        I'm a{" "}
        <strong className="text-stone-100">
          Senior Software Engineer and Technical Lead
        </strong>
        , currently working at{" "}
        <strong className="text-stone-100">
          Harvard University Library Technology Services
        </strong>{" "}
        building modern, AI-powered, accessible, secure, and scalable multimedia
        services for Harvard's vast collection of digital assets. I have a
        master's degree in{" "}
        <strong className="text-stone-100">Computer Information Systems</strong>{" "}
        with a concentration in{" "}
        <strong className="text-stone-100">IT Security</strong> from{" "}
        <strong className="text-stone-100">Boston University</strong>, and over
        ten years of experience working as a software engineer.
      </p>
    </>
  ),
  actions: [
    {
      href: "/Katie Amaral Resume March 2026.pdf",
      text: "Resume",
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    /*{
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },*/
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    { label: "Location", text: "Boston, MA", Icon: MapIcon },
    /*{label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},*/
    { label: "Interests", text: "Hiking, Traveling, Yoga", Icon: SparklesIcon },
    {
      label: "Study",
      text: "Masters in Computer Information Systems",
      Icon: AcademicCapIcon,
    },
    {
      label: "Employment",
      text: "Harvard University",
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 10,
      },
      {
        name: "Portuguese",
        level: 2,
      },
      {
        name: "Spanish",
        level: 1,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 9,
      },
      {
        name: "NextJS",
        level: 7,
      },
      {
        name: "Angular",
        level: 8,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Node.js",
        level: 9,
      },
      {
        name: "Python",
        level: 8,
      },
      {
        name: "NestJS",
        level: 3,
      },
    ],
  },
  {
    name: "Artificial Intelligence",
    skills: [
      {
        name: "LangChain",
        level: 5,
      },
      {
        name: "TensorFlow",
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Project title 1",
    description: "Project description 1",
    url: "https://katieamaral.com",
    image: porfolioImage1,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: "In progress",
    location: "Harvard University University",
    title: "Graduate Certificate - Artificial Intelligence",
    content: (
      <p>
        •{" "}
        <a href="https://coursebrowser.dce.harvard.edu/course/introduction-to-artificial-intelligence-with-python-3/">
          {" "}
          Artificial Intelligence with Python
        </a>{" "}
        - Search algorithms, classification, optimization, machine learning,
        large langauge models, optimization Artificial Intelligence with Python
        <br />•{" "}
        <a href="https://coursebrowser.dce.harvard.edu/course/foundations-of-data-science-and-engineering/">
          {" "}
          Foundations of Data Science & Engineering
        </a>{" "}
        - Data engineering: data management, transformation, transportation,
        exploratory data analysis, visualization, statistical thinking, machine
        learning, natural language processing, big data analytics platforms
        <br />•{" "}
        <a href="https://coursebrowser.dce.harvard.edu/course/deep-learning/">
          Deep Learning
        </a>
        - Neural networks, transformers with attention, deep learning APIs with
        Keras, Tensorflow, and Pytorch
        <br />•{" "}
        <a href="https://coursebrowser.dce.harvard.edu/course/foundations-of-large-language-models/">
          Foundations of Large Language Models
        </a>{" "}
        - Transformer architectures (GPT, BERT, and T5), text generation,
        language translation, sentiment analysis, chatbots, conversational
        agents, prompt engineering, retrieval augmented generation (RAG),
        Hugging Face transformers in Python
        <br />
      </p>
    ),
  },
  {
    date: "Graduated 2014 | Cumulative GPA: 4.0",
    location: "Boston University",
    title: "Master of Science - Computer Information Systems IT Security",
    content: (
      <p>
        • Software Development – Software development with front and backend
        langauges and frameworks and relational databases
        <br />
        • Network Security – Advanced network security issues and solutions,
        services, access controls, vulnerabilities, threats, risks, network
        architectures, attacks, network security capabilities and mechanisms
        <br />
        • Enterprise Information Security – Security in computer systems,
        networks, applications, memory protection, access control and
        authentication, file system security, backup and recovery management,
        intrusion and virus protection mechanisms, application level
        protections, cryptography
        <br />
        • IT Security Policies and Procedures – Development and implementation
        of security policies, risk management plans, standards and procedures on
        infrastructure, systems, networks, data, operations and user access
        <br />
        • Information Systems Analysis – Analysis and design, object oriented
        methods, requirements analysis, UML, software system architecture,
        implementation, management, and testing
        <br />
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "April 2024 - October 2024",
    location: "Harvard University",
    title: "Technical Lead",
    content: (
      <p>
        <strong className="text-black-100">Architecture Leadership</strong>{" "}-
        Lead the architectural design and technical implementation of
        <a href="https://collex.lib.harvard.edu">Collections Explorer</a>, a
        public hybrid search application for exploring Harvard Library’s vast
        digital collections through natural language interaction validation
        <br />
        <strong className="text-black-100">Search Infrastructure</strong>{" "}-
        Design and implement high-performance search infrastructure using
        Elasticsearch, supporting multimodal hybrid search retrieval (KNN +
        BM25) across ~10 million records with Cohere Multilingual v3 dense
        vector embeddings, reducing memory utilization by 95% with BBQ
        compression
        <br />- Develop relevancy evaluation scripts using the Elasticsearch
        Rank Evaluation API to calculate precision and recall for tuning search
        performance; evaluate embedding models with Hugging Face transformers
        and PyTorch
        <a href="https://collex.lib.harvard.edu">Collections Explorer</a>, a
        public hybrid search application for exploring Harvard Library’s vast
        digital collections through natural language interaction validation
        <br />
        <strong className="text-black-100">
          Large Language Models and Model Context Protocol
        </strong>{" "}
        - Implement retrieval augmented generation (RAG) with LLMs on AWS
        Bedrock; Build MCP services for agentic search capabilities and query
        augmentation with dynamic faceting
        <br />
        <strong className="text-black-100">Security</strong>{" "}- Conduct
        assessments and implement controls based on OWASP standards, including
        validation with Pydantic, input sanitization, CSPs, network controls,
        auth (OAuth2/OIDC), vulnerability scanning, LLM guardrails, etc.
        <br />
        <strong className="text-black-100">Data Engineering</strong>{" "}
        - Build Apache Airflow ETL pipelines to extract and transform data from a
        variety of diverse data sources, performing validation, normalization,
        chunking, and ingestion into Elasticsearch
        <br />
        <strong className="text-black-100">
          Full-Stack Software Development
        </strong>{" "}
        - Build backend API services using Python FastAPI and internal PyPI
        packages for code reuse; build frontend UI with NextJS, React, and a
        reusable component library in Storybook
        <br />
        <strong className="text-black-100">Open Source</strong>{" "}- Contribute to
        <a href="https://arxiv.org/abs/2507.00961">
          Digital Collections Explorer
        </a>
        , a multimodal vector search application by University of Washington
        <br />
      </p>
    ),
  },
  {
    date: "April 2024 - October 2024",
    location: "OnCorps, Inc",
    title: "Senior Director, Software Engineering",
    content: (
      <p>
        <strong className="text-black-100">ML Operations</strong>{" "}
        - Built ML Operations pipelines on the Databricks platform: data
        ingestion, data transformation, feature engineering, model training and
        fine-tuning, model deployment, inference, monitoring, and data
        validation
        <br />
        <strong className="text-black-100">
          ML Model Training and Evaluation
        </strong>{" "}
        - Trained and fine-tuned Computer Vision and NER models for
        classification tasks using Python libraries such as SciKit-Learn,
        PyTorch, and Hugging Face transformers; Implemented statistical methods
        for model performance evaluation, including F1 score, precision, and
        recall
        <br />
        <strong className="text-black-100">Data Validation</strong>{" "}
        - Wrote data validation classes using Python libraries such as Pandas
        and NumPy to confirm the accuracy of financial statements in preparation
        for clients to report to stakeholders, investors, and regulatory
        agencies
        <br />
      </p>
    ),
  },
  {
    date: "April 2019 - April 2024",
    location: "Harvard University",
    title: "Senior Software Engineer",
    content: (
      <p>
        <strong className="text-black-100">Artificial Intelligence</strong>{" "}
        - Built large-scale, performant distributed systems interconnected with
        asynchronous task queues (Celery + RabbitMQ) and streaming APIs to
        process ~3 million individual assets per day for mission-critical
        applications supporting ~500,000 monthly visitors worldwide for to
        access hundreds of millions of digital multimedia assets
        <br />
        <strong className="text-black-100">
          Full-Stack Software Development
        </strong>
        - Built backend services with Python FastAPI, Javascript NodeJS, and
        TypeScript NestJS; built SPAs in Angular
        <br />
        <strong className="text-black-100">Artificial Intelligence</strong>
        - Developed pilot project to modernize library discovery by enabling
        natural language interaction with catalog services using Python
        LangChain and GenAI models (Anthropic Claude Instant and OpenAI GPT 3.5)
        <br />
        <strong className="text-black-100">CI/CD</strong> - Implemented unit and
        integration tests with CI/CD pipelines, orchestrating containerized
        deployments (Docker), Kubernetes workloads (Rancher), and secure secrets
        management using GitHub Actions and ArgoCD on AWS
        <br />
        <strong className="text-black-100">Database Systems</strong> - Designed
        relational and NoSQL schemas with SQLAlchemy (PostgreSQL) and Mongoose
        (MongoDB)
        <br />
        <strong className="text-black-100">SDLC</strong> - Work within
        Agile/Scrum methodologies across the full software development
        lifecycle, contributing to iterative development, peer code review, and
        continuous delivery; Certified ScrumMaster (CSM)
        <br />
      </p>
    ),
  },
  {
    date: "March 2015 - April 2019",
    location: "Broad Institute of Harvard and MIT",
    title: "Software Engineer",
    content: (
      <p>
        <strong className="text-black-100">Biomedical Research Support</strong>{" "}
        - Built a secure web portal for transferring terabyte-scale genomic
        sequencing data with IBM Aspera APIs, applying encryption and access
        controls to ensure compliance with NIH data policy requirements
        <br />
        <strong className="text-black-100">Full-Stack Development</strong>{" "}
        - Designed and built custom web applications working on all levels of the
        tech stack including frontend, backend, databases, authentication &
        authorization, security, testing, and CI/CD deployment automation
        <br />
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
      name: "",
      text: "",
      image: "",
    },
    {
      name: "",
      text: "",
      image: "",
    },
    {
      name: "",
      text: "",
      image: "",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Contacts",
  description: "Contacts",
  items: [
    {
      type: ContactType.Email,
      text: "amaral.katie@gmail.com",
      href: "mailto:amaral.katie@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Boston, MA, USA",
      href: "https://www.google.com/maps/place/Boston,+MA/@42.3143203,-71.0528557,12z",
    },
    {
      type: ContactType.LinkedIn,
      text: "katieamaral",
      href: "https://www.linkedin.com/in/katieamaral/",
    },
    {
      type: ContactType.Github,
      text: "ktamaral",
      href: "https://github.com/ktamaral",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: "Github", Icon: GithubIcon, href: "https://github.com/ktamaral" },
  {
    label: "Stack Overflow",
    Icon: StackOverflowIcon,
    href: "https://stackoverflow.com/users/2183592/ktamaral",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/katieamaral/",
  },
  { label: "Email", Icon: EnvelopeIcon, href: "mailto:amaral.katie@gmail.com" },
  /*{label: 'Instagram', Icon: InstagramIcon, href: ''},
  {label: 'Twitter', Icon: TwitterIcon, href: ''},*/
];

/**
 * Skill Cards
 */
export const skillCards: SkillCard[] = [
  {
    title: "Projects",
    description: "Check out my projects",
    image: porfolioImage1,
    //href: `#${SectionId.Portfolio}`,
    Icon: ArrowDownTrayIcon,
  },
  {
    title: "Resume",
    description: "Check out my resume",
    image: porfolioImage2,
    //href: '/assets/resume.pdf',
    Icon: ArrowDownTrayIcon,
  },
  {
    title: "Contact",
    description: "Contact me",
    image: porfolioImage3,
    //href: `#${SectionId.Contact}`,
    Icon: ArrowDownTrayIcon,
  },
];
