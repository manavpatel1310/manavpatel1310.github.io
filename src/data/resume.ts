export const profile = {
	name: "Manav Patel",
	role: "Full Stack Developer",
	tagline:
		"I design, build, and ship fast, accessible web applications — React and TypeScript on the front, Java/Node.js and AWS on the back.",
	location: "Ottawa, Ontario, Canada",
	email: "manavpatel731@gmail.com",
	phone: "(343) 987-5270",
	github: "https://github.com/manavpatel1310",
	linkedin: "https://www.linkedin.com/in/manav-patel-448334217/",
	resumeUrl: "/Manav_Patel_Resume.pdf",
};

export const about = [
	"I'm a Full Stack Developer with 2+ years of hands-on experience building public-facing, content-driven websites and customer-facing web applications. I currently build financial-sector applications at TechMero, working across React/TypeScript front-ends, Java Spring Boot and Node.js services, and AWS infrastructure.",
	"I've worked across the full SDLC in both startup and enterprise-style environments — optimizing large-scale SQL databases, debugging production issues, integrating third-party hardware like biometric Face ID devices, and delivering end-to-end client projects independently. I'm comfortable switching between stacks, whether that's .NET backend services, React front-ends, Node.js systems, or Linux-based C programming.",
	"I'm an AWS Certified Solutions Architect – Associate with a test-driven mindset — I reach for Playwright early, keep Git workflows clean, and use AI-assisted development tools like Claude Code and GitHub Copilot to move faster without sacrificing quality.",
];

export const skillGroups = [
	{
		label: "Languages",
		skills: ["TypeScript", "JavaScript", "Java", "Python", "C#", "SQL", "HTML5", "CSS3"],
	},
	{
		label: "Frameworks & Libraries",
		skills: ["React", "Astro", "Node.js", "Spring Boot", ".NET", "Tailwind CSS", "Preline UI", "Bootstrap", "SASS"],
	},
	{
		label: "Cloud & DevOps",
		skills: ["AWS Lambda", "AWS EC2", "AWS S3", "Docker", "Jenkins", "GitHub Actions", "Git"],
	},
	{
		label: "Databases & CMS",
		skills: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "SQL Server", "Sanity CMS"],
	},
	{
		label: "Testing",
		skills: ["Playwright", "JUnit", "TestNG", "Mockito", "Unit Testing"],
	},
];

export type Experience = {
	title: string;
	company: string;
	location: string;
	period: string;
	technologies: string[];
	highlights: string[];
};

export const experience: Experience[] = [
	{
		title: "Full Stack Developer",
		company: "TechMero Pvt. Ltd.",
		location: "Gujarat, India (Remote)",
		period: "Oct 2025 – Present",
		technologies: ["React", "TypeScript", "Java", "Spring Boot", "Node.js", "SQL Server", "MongoDB", "AWS"],
		highlights: [
			"Design and build full-stack financial-sector web applications — responsive React + TypeScript front-ends with Java Spring Boot and Node.js backend services.",
			"Architect and maintain RESTful APIs and relational/NoSQL data layers across SQL Server and MongoDB.",
			"Deploy and scale services on AWS (Lambda, EC2, S3), managing cloud infrastructure.",
			"Build reusable React/TypeScript component libraries with hooks and strict typing, reducing UI duplication across financial-sector apps.",
			"Enforce CI-friendly Git workflows — feature branches and PR reviews — and code quality standards across the team.",
			"Lead code reviews and partner with cross-functional teams to turn business requirements into production-ready features.",
		],
	},
	{
		title: "Front-End Developer Intern",
		company: "Interact Health PRO",
		location: "Toronto, ON (Remote)",
		period: "Feb 2025 – May 2025",
		technologies: ["React", "TypeScript", "REST APIs", "WCAG"],
		highlights: [
			"Built responsive React components in TypeScript — patient dashboard, appointment scheduling calendar, and secure messaging — for a healthcare patient-engagement platform, aligned with WCAG standards.",
			"Integrated RESTful APIs powering appointment booking, lab-result retrieval, and notifications in an Agile/Scrum environment.",
			"Participated in code reviews and maintained clean Git branching workflows across a fully remote, distributed team.",
		],
	},
	{
		title: "Software Developer Trainee",
		company: "Access Computech Pvt. Ltd.",
		location: "Gujarat, India",
		period: "Jun 2023 – Dec 2023",
		technologies: ["C#", ".NET", "ASP.NET", "MySQL", "Oracle"],
		highlights: [
			"Delivered a customer-facing barcode management application end-to-end, cutting data-capture processing time by 40% across 3 live client deployments.",
			"Optimized SQL and Oracle stored procedures against a 5M+ record dataset, improving query performance by 20%.",
			"Owned a client barcode software project independently from scratch through delivery.",
			"Integrated Verdi Face ID biometric devices, enabling real-time authentication and secure access control in enterprise systems.",
			"Performed debugging and root-cause analysis on .NET applications to resolve production and client-reported issues.",
		],
	},
	{
		title: "Front-End Developer Intern",
		company: "Horizontal Digital",
		location: "Gujarat, India",
		period: "Jan 2023 – May 2023",
		technologies: ["React", "TypeScript", "Node.js", "SASS", "Bootstrap", "Docker"],
		highlights: [
			"Built responsive React components driving a 35% lift in user engagement and 20% faster page loads through REST API performance tuning.",
			"Translated Figma design specs into responsive interfaces with SASS and Bootstrap.",
			"Containerized React application modules with Docker and configured Kubernetes deployment manifests.",
			"Documented API request/response schemas and error codes to industry standards, cutting integration time for other developers.",
		],
	},
	{
		title: "Software Developer Intern (Part-time)",
		company: "TechMero Pvt. Ltd.",
		location: "Gujarat, India (Remote)",
		period: "Jan 2022 – Dec 2022",
		technologies: ["Node.js", "AWS Lambda", "SQL", "MongoDB"],
		highlights: [
			"Engineered scalable Node.js microservices on AWS Lambda, integrating SQL and MongoDB data stores for high-performance financial-sector applications.",
			"Authored RESTful API documentation to industry standards, easing integration for partner teams.",
			"Wrote unit tests with TestNG, JUnit, and Mockito to keep releases reliable and stable.",
			"Used Jenkins CI/CD pipelines to cut deployment times, deploying to AWS EC2 with S3 for cloud storage.",
		],
	},
];

export type Project = {
	name: string;
	description: string;
	highlights: string[];
	technologies: string[];
	liveUrl?: string;
	codeUrl?: string;
};

export const projects: Project[] = [
	{
		name: "Personal Blog & CMS",
		description: "Production-ready blog platform, static-first with zero JavaScript by default.",
		highlights: [
			"Astro + React islands in strict TypeScript: hydrates React only where interactivity is needed.",
			"Sanity headless CMS with graceful fallback rendering — content updates without redeploys.",
			"End-to-end Playwright coverage of core user flows; deployed on Vercel.",
		],
		technologies: ["Astro", "React", "TypeScript", "Tailwind CSS v4", "Preline UI", "Sanity", "Playwright"],
		liveUrl: "https://personalblog-omega-seven.vercel.app/",
		codeUrl: "https://github.com/manavpatel1310/Personalblog",
	},
	{
		name: "Ecospace — Eco-Friendly Marketplace",
		description: "Full-stack multi-vendor e-commerce marketplace for eco-friendly products, across mobile and web.",
		highlights: [
			"Flutter mobile app and TypeScript web client backed by a Python backend with MySQL and PostgreSQL.",
			"Core shopping flow: product discovery, search, cart, secure checkout, and order tracking.",
			"Dockerized backend services for consistent deployment across environments.",
		],
		technologies: ["Python", "TypeScript", "Flutter", "Docker", "MySQL", "PostgreSQL", "Figma"],
		codeUrl: "https://github.com/manavpatel1310/Ecospace",
	},
	{
		name: "Simple S3 Storage",
		description: "Self-hostable storage manager that turns any S3-compatible API into a managed storage solution.",
		highlights: [
			"TypeScript client and server, cleanly separated for independent deployment.",
			"Works with AWS S3 or any S3-compatible provider — self-host or deploy to any platform.",
		],
		technologies: ["TypeScript", "AWS S3", "Node.js"],
		codeUrl: "https://github.com/manavpatel1310/s3-storage",
	},
	{
		name: "Home Finder Lite",
		description: "Real-estate platform where agents manage and market property listings and rentals.",
		highlights: [
			"Agent accounts with secure authentication and a dashboard for managing listings and rentals.",
			"Public search across listings, rentals, and agents with detailed property views and photo galleries.",
			"FileStack-powered photo management and a custom responsive UI built without CSS frameworks.",
		],
		technologies: ["JavaScript", "Node.js", "EJS", "SCSS", "FileStack"],
		codeUrl: "https://github.com/manavpatel1310/FindHome",
	},
	{
		name: "Travel Location App",
		description: "Community platform where travelers share destinations, tips, and insights worldwide.",
		highlights: [
			"Node.js + Express backend with MongoDB Atlas storing user-generated content.",
			"Responsive EJS/Bootstrap front-end; deployed on Heroku.",
		],
		technologies: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Heroku"],
		codeUrl: "https://github.com/manavpatel1310/TravelLocationApp",
	},
	{
		name: "MyFitnessApp",
		description: "Cross-platform fitness and nutrition tracking app for personalized health goals.",
		highlights: [
			"Personalized workout plans, meal planning, and macro/micronutrient tracking.",
			"Progress analytics with charts, plus data sync with wearables and smartwatches.",
		],
		technologies: ["Flutter", "Dart"],
		codeUrl: "https://github.com/manavpatel1310/MyFitnessApp",
	},
	{
		name: "LoadBalancerX",
		description: "Multi-server load balancing system written in C, distributing client requests for optimal throughput.",
		highlights: [
			"TCP/IP socket programming with multi-process concurrency to handle simultaneous clients.",
			"Dynamic request distribution across servers to prevent overload, on Debian Linux.",
		],
		technologies: ["C", "TCP/IP", "Linux"],
		codeUrl: "https://github.com/manavpatel1310/LoadBalancerX",
	},
	{
		name: "Drive Watch System",
		description: "Real-time driver-monitoring system that detects driver actions and triggers timely alerts.",
		highlights: [
			"Processes 30 frames per second with a CNN classifier built in Keras.",
			"Tuned action-detection threshold to a 95% accuracy rate for alarm triggering.",
		],
		technologies: ["Python", "OpenCV", "Keras", "CNN", "Pygame"],
		codeUrl: "https://github.com/manavpatel1310/Drive-Watch-System",
	},
];

export const certifications = [
	{
		name: "AWS Certified Solutions Architect – Associate",
		issuer: "Amazon Web Services",
		verifyUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/449e9f410fa04002b6e1f9f6154b484b",
	},
];

export const education = [
	{
		credential: "P.G. Diploma, Full Stack Software Development",
		school: "Lambton College (Ottawa), Ontario",
		period: "Jan 2024 – Aug 2025",
		gpa: "3.62/4.0",
	},
	{
		credential: "B.E., Computer Engineering",
		school: "Gujarat Technological University, India",
		period: "Jul 2019 – Apr 2023",
		gpa: "3.5/4.0",
	},
];
