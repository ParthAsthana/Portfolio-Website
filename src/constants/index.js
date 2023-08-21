import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  indra,
  echofy,
  metacrowd,
  aws,
  solidity,
  iitcell,
  eim,
  GrantThorntonNew,
  ArtifaeNew,
  PLNew,
  IITCNew,
  droneNew,
  DiaBeat,
  stocki,
  dublinbus,
  vedant,
  smart

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Fintech Enthusiast",
    icon: web
  },
  {
    title: "Entrepreneurial",
    icon: mobile
  },
  {
    title: "Leadership",
    icon: backend
  },
  {
    title: "Machine Learning Enthusiast",
    icon: creator
  }
];

const technologies = [
  { name: "Python", icon: '' },
  { name: "SQL", icon: '' },
  { name: "C++", icon: '' },
  { name: "Machine Learning", icon: '' },
  { name: "Web Development", icon: '' },
  { name: "JavaScript", icon: '' },
  { name: "Dart", icon: '' },
  { name: "React Js", icon: '' },
  { name: "Tableau", icon: '' },
  { name: "Power Bi", icon: '' },
  { name: "Excel", icon: '' },
  { name: "Power Point", icon: '' },
  { name: "Android Studio", icon: '' },
  { name: "Adobe Illustrator", icon: '' },
  { name: "MATLAB", icon: '' }
];

const experiences = [
  {
    title: "Summer Analyst Intern",
    company_name: "Grant Thornton India",
    icon: GrantThorntonNew,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Analyzed strategy management techniques of over 50 legacy companies, aligning 90% of them with the European Foundation for Quality Management (EFQM) model.",
      "Produced 20+ detailed reports and visualizations detailing strategic insights from the analysis.",
      "Consulted on Agile methodologies in software, creating 10+ case studies to underscore best practices.",
      "Collaborated with a team of 5 to evaluate and consult on various strategy management courses."
    ]
  },
  {
    title: "Trading Analyst Intern",
    company_name: "PL India",
    icon: PLNew,
    iconBg: "#383E56",
    date: "July 2023 - September 2023",
    points: [
      "Analyzed high-frequency trading data of 200+ stocks using SQL on Oracle databases.",
      "Created 15+ Tableau dashboards, assisting relationship managers in optimizing client interactions.",
      "Utilized machine learning models to study 10000+ clients’ trading data, focusing on risk analytics and identifying key trading patterns.",
      "Developed Python scripts to analyze and optimize trading indicators, including RSI and Bollinger Bands, for 50+ stocks."
    ]
  },
  {
    title: "Data Analyst Intern",
    company_name: "Artifae(Corporate Service Provider)",
    icon: ArtifaeNew,
    iconBg: "#383E56",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Conducted feasibility analyses on 30+ potential firms, influencing lending decisions on loans exceeding $5M.",
      "Produced 25+ technical reports capturing analysis insights and potential concerns.",
      "Designed visualizations to swiftly convey financial standings for prompt lending decisions."
    ]
},
{
    title: "Co-Founder",
    company_name: "IITC - Indraprastha IT Cell",
    icon: IITCNew,
    iconBg: "#383E56",
    date: "April 2020 - Sep 2022",
    points: [
      "Founded and expanded digital marketing agency, securing 5+ clients in inaugural year.",
      "Directed a team of 15, delivering inventive web solutions and custom software with 95% satisfaction.",
      "Managed 10+ political campaigns via digital strategies.",
      "Executed digital marketing and SEO tactics, elevating client online visibility by 70%.",
      "Analyzed constituency data for strategic campaign decision-making across 100+ regions."
    ]
}

];

export { services, technologies, experiences };

export const projects = [
  {
    name: "Drone-based P2P Data Propagation System",
    description: "Implemented drone-based data propagation using Python for TCD's Computer Networks module. Designed WLAN-based image and metadata sharing with reliable acknowledgment system. Utilized greedy BFS algorithm for data routing and cryptographic methods for security.",
    tags: [
      { name: "Python", color: "text-blue-500" },
      { name: "Socket Programming", color: "text-red-500" },
      { name: "NumPy", color: "text-yellow-500" },
      { name: "Cryptography", color: "text-green-500" },
      { name: "YAML", color: "text-purple-500" }
    ],
    image: droneNew, // Placeholder: Update with correct image link
    source_code_link: "here" // Placeholder: Update with correct source code link
  },
  {
    name: "Financial Portfolio Manager AI",
    description: "Developed AI platform analyzing individual portfolios, offering personalized financial advice. Integrated GPT API for insights, performed risk analytics, and recommended tailored strategies. Created user clustering via risk analysis and utilized ARIMA model for stock price forecasting.",
    tags: [
      { name: "Python", color: "text-blue-500" },
      { name: "pandas", color: "text-red-500" },
      { name: "numpy", color: "text-yellow-500" },
      { name: "matplotlib", color: "text-green-500" },
      { name: "scikit-learn", color: "text-purple-500" },
      { name: "GPT API", color: "text-orange-500" }
    ],
    image: stocki, // Placeholder: Update with correct image link
    source_code_link: "here" // Placeholder: Update with correct source code link
  },
  {
    name: "DiaBeat.Ai",
    description: "Built MERN stack diabetes prediction app with 95% accuracy, providing real-time predictions. Integrated user-friendly web interface with advanced machine learning model. Enabled health data input, profile management, and diabetes risk tracking over time.",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Express.js", color: "text-red-500" },
      { name: "Node.js", color: "text-yellow-500" },
      { name: "MongoDB", color: "text-green-500" },
      { name: "Python", color: "text-purple-500" },
      { name: "Flask", color: "text-orange-500" },
      { name: "Scikit-learn", color: "text-pink-500" },
      { name: "HTML", color: "text-teal-500" },
      { name: "CSS", color: "text-indigo-500" },
      { name: "Java Script", color: "text-pink-500" },

    ],
    image: DiaBeat, // Placeholder: Update with correct image link
    source_code_link: "here" // Placeholder: Update with correct source code link
  },
  {
    name: "Dublin Bus Route Finder",
    description: "The software, developed in C, uses Dijkstra’s algorithm to find the optimal route between nodes representing Dublin locations. In the graph, edges symbolize roads, bus routes, or train tracks, with weights indicating travel time. By considering factors like traffic and transportation schedules, the software calculates the quickest route between specified points in Dublin.",
    tags: [
      { name: "C", color: "text-blue-500" },
      { name: "dijkstra algorithm", color: "text-green-500" }
    ],
    image: dublinbus,
    source_code_link: "https://github.com/ParthAsthana/Dublin-Bus-Root-Finder"
  },
  {
    name: "Chronic Disease Prediction AI",
    description: "VEDANT.AI is a healthcare platform that utilizes ML to generate risk assessments. The models are trained on large datasets and optimized for accuracy to provide reliable results for healthcare professionals. Built using Python and libraries such as Pandas, TensorFlow, and Scikit-learn.",
    tags: [
      { name: "Python", color: "text-blue-500" },
      { name: "Machine Learning", color: "text-yellow-500" },
      { name: "Scikit-learn", color: "text-pink-500" }

    ],
    image: vedant,
    source_code_link: "https://github.com/ParthAsthana/Vedant_Ai"
  },
  {
    name: "Lottery System Smart Contract",
    description: "Decentralized Lottery System built on Ethereum Blockchain and deployed on Rinkeby Ethereum Testnet. The winner is selected on a random basis using the Keccak256 algorithm and rewarded with some RinkebyETH. The owner of the contract also receives some incentive.",
    tags: [
      { name: "Blockchain", color: "text-green-500" },
      { name: "Ethereum Blockchain", color: "text-pink-500" }
    ],
    image: smart,
    source_code_link: "https://github.com/ParthAsthana/Lottery-System-Smart--Contract"
  }
];
