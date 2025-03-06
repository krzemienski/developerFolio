/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nick Krzemienski",
  title: "Hi all, I'm Nick",
  subTitle: emoji(
    "Engineering Lead specializing in video streaming technologies, containerization, and cloud infrastructure 🚀"
  ),
  resumeLink:
    "Nick_Krzemienski_072024_cv.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/krzemienski",
  linkedin: "https://www.linkedin.com/in/krzemienski/",
  gmail: "krzemienski@gmail.com",
  twitter: "https://twitter.com/nkrzemienski",
  portfolio: "http://awesome.video",
  // Instagram and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ENGINEERING LEAD PASSIONATE ABOUT VIDEO STREAMING TECHNOLOGIES AND CLOUD INFRASTRUCTURE",
  skills: [
    emoji(
      "⚡ Server-side multi-view systems integrating multiple video feeds within a single player interface"
    ),
    emoji("⚡ Just-in-time transcoding and packaging solutions for HEVC files in Kubernetes"),
    emoji(
      "⚡ Video encoding and packaging pipelines with dual-format support (HEVC and AVC)"
    ),
    emoji(
      "⚡ Containerized applications using AWS, Docker, and Kubernetes for optimized efficiency"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "iOS",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "tvOS",
      fontAwesomeClassname: "fas fa-tv"
    },
    {
      skillName: "FFmpeg",
      fontAwesomeClassname: "fas fa-film"
    },
    {
      skillName: "Video Streaming",
      fontAwesomeClassname: "fas fa-video"
    },
    {
      skillName: "Cloud Infrastructure",
      fontAwesomeClassname: "fas fa-cloud"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Iona College",
      logo: require("./assets/images/ionaLogo.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "2008 - 2012",
      desc: "Completed degree in Computer Science building a foundation for a career in software engineering and technical leadership.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Video Technologies", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Infrastructure",
      progressPercentage: "90%"
    },
    {
      Stack: "Software Engineering Management",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineering Lead, Video Innovations",
      company: "fuboTV Inc.",
      companylogo: require("./assets/images/fuboTVLogo.png"),
      date: "March 2022 – June 2024",
      desc: "Led the development of server-side multi-view systems and just-in-time transcoding solutions.",
      descBullets: [
        "Led the development of server-side multi-view systems integrating multiple video feeds within a single player interface",
        "Engineered a just-in-time transcoding and packaging solution for HEVC files, deployed in Kubernetes",
        "Ensured high availability and service reliability through containerized applications management",
        "Implemented persistent volumes and stateful sets for effective data management",
        "Collaborated with cross-functional teams to design scalable and efficient solutions"
      ]
    },
    {
      role: "Engineering Lead, VOD Encoding & Operations",
      company: "fuboTV Inc.",
      companylogo: require("./assets/images/fuboTVLogo.png"),
      date: "February 2018 – February 2022",
      desc: "Directed the in-house development of the VOD encoding and packaging pipeline with dual-format support.",
      descBullets: [
        "Led encoding, packaging, and operations of VODs, delivering approximately 500 hours of assets daily",
        "Implemented dual-format support (HEVC and AVC) to significantly enhance video quality and streaming performance",
        "Leveraged AWS Spot Instances and container-based infrastructure to reduce costs by approximately 70%",
        "Engineered multiple codec streaming with DASH and HLS assets for 4K content",
        "Built and maintained a serverless CDN Edge for seamless playback across all OTT devices",
        "Designed and implemented a live-to-VOD generator for DRM-protected playback"
      ]
    },
    {
      role: "Engineering Manager, AppleTV & Roku",
      company: "fuboTV Inc.",
      companylogo: require("./assets/images/fuboTVLogo.png"),
      date: "February 2018 – November 2018",
      desc: "Oversaw product roadmaps and engineering teams for the AppleTV and Roku platforms.",
      descBullets: [
        "Hired, managed, and mentored a team of 10 software engineers in the NYC office",
        "Responsible for both fuboTV's AppleTV & Roku teams' product roadmap and engineering goals",
        "Contributed code to both Roku & AppleTV teams as an IC, while managing",
        "Designed and implemented workflow automation integrating with Jira",
        "Developed testing harnesses to run complex automation suites on an in-house device farm",
        "Helped build and deliver the first ever UHD/HDR10 live feed for OTT during World Cup 2018"
      ]
    },
    {
      role: "Software Engineer, iOS",
      company: "fuboTV Inc.",
      companylogo: require("./assets/images/fuboTVLogo.png"),
      date: "May 2017 – February 2018",
      desc: "Developed innovative iOS solutions, enhancing the overall streaming platform capabilities.",
      descBullets: [
        "Rewrote fuboTV's Swift player framework from the ground up",
        "Reduced dependency on 3rd party vendor SDKs",
        "Designed and measured overall video quality experience",
        "Leveraged Apple's AVFrameworks",
        "Built & designed fuboTV's In App Billing system for iTunes and Roku subscriptions"
      ]
    },
    {
      role: "Principal Developer & Founder",
      company: "KODA LABS INC.",
      companylogo: require("./assets/images/kodaLabsLogo.png"),
      date: "October 2013 – May 2017",
      desc: "Led mobile and web development projects, driving innovation in media delivery and streaming solutions.",
      descBullets: [
        "Hired, managed, and mentored a team of 3 developers and various contractors",
        "Completed over 15 successful client projects using agile methodologies",
        "Utilized Apple's latest iOS APIs and frameworks for optimal user experience",
        "Designed and developed numerous custom APIs leveraging AWS",
        "Integrated WebRTC technologies for video and text chat capabilities",
        "Built & designed 4 different games in Unity3D with user bases over 1 million users"
      ]
    },
    {
      role: "Squad Leader",
      company: "United States Marine Corps Reserve",
      companylogo: require("./assets/images/usmcLogo.png"),
      date: "December 2008 – January 2015",
      desc: "Commanded teams in high-pressure environments, fostering leadership, discipline, and strategic execution.",
      descBullets: [
        "Directly responsible for the actions and well-being of Marines under command",
        "Coordinated movement and employment of various weapons systems to complete missions",
        "Developed proficiency in giving and receiving orders under stressful environments",
        "Led team by adhering to the three core values: Honor, Courage, and Commitment",
        "Reached the rank of Sergeant in less than 4 years"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
  projects: [
    {
      projectName: "awesome-video",
      projectDesc: "A curated list of video streaming resources. Everything about video streaming and media processing.",
      repoUrl: "https://github.com/krzemienski/awesome-video"
    },
    {
      projectName: "flacjacket",
      projectDesc: "A Node.js module for integrating FLAC audio files with JavaScript applications.",
      repoUrl: "https://github.com/krzemienski/flacjacket"
    },
    {
      projectName: "deep-job-search",
      projectDesc: "AI-powered job search tool to help find the perfect match for your career.",
      repoUrl: "https://github.com/krzemienski/deep-job-search"
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "SOME OF THE SIGNIFICANT PROJECTS I'VE WORKED ON",
  projects: [
    {
      image: require("./assets/images/multiview.png"),
      projectName: "Server-Side Multi-View Systems",
      projectDesc: "Development of systems that integrate multiple video feeds within a single player interface, enhancing the viewer experience for sports and other multi-feed content.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://awesome.video"
        }
      ]
    },
    {
      image: require("./assets/images/transcoding.png"),
      projectName: "Just-in-Time Transcoding",
      projectDesc: "Created and deployed a solution for just-in-time transcoding and packaging of HEVC files, deployed in Kubernetes to boost scalability and efficiency.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://awesome.video"
        }
      ]
    },
    {
      image: require("./assets/images/vodpipeline.png"),
      projectName: "VOD Encoding Pipeline",
      projectDesc: "Led the in-house development of the VOD encoding and packaging pipeline with dual-format support (HEVC and AVC) to enhance video quality and streaming performance.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://awesome.video"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section - Removed as requested

const achievementSection = {
  title: emoji("Achievements And Leadership 🏆 "),
  subtitle:
    "Achievements and Leadership Roles in the Video Streaming Space",
  achievementsCards: [],
  display: false // Set to false to hide this section
};

// Blogs Section

const blogSection = {
  title: "Publications",
  subtitle:
    "Technical insights and contributions to the video streaming industry",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "http://awesome.video",
      title: "FFmpeg Research and Implementation",
      description:
        "Insights into FFmpeg research, ISO standards, and encoding workflows for optimal video streaming performance."
    },
    {
      url: "http://awesome.video",
      title: "Cloud Infrastructure for Video Streaming",
      description:
        "Best practices for leveraging AWS, Docker, and Kubernetes in video streaming applications."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Industry Contributions",
  subtitle: emoji(
    "CONTRIBUTIONS TO VIDEO STREAMING TECHNOLOGIES AND INDUSTRY PRACTICES"
  ),

  talks: [
    {
      title: "HLS & DASH Multi-Codec Encoding and Packaging",
      subtitle: "Video encoding optimization techniques for OTT platforms",
      slides_url: "HLS & DASH multi codec encoding & packaging v1.2 09022020.pdf",
      event_url: "https://youtu.be/g6C5qsQmEB8?si=v6wBOEu4HK9lK0IF"
    },
    {
      title: "Advanced Video Streaming Technologies",
      subtitle: "Deep dive into modern video delivery solutions",
      slides_url: "HLS & DASH multi codec encoding & packaging v1.2 09022020.pdf",
      event_url: "https://youtu.be/g6C5qsQmEB8?si=tm43yO8m4RAY5B6J"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "SHARE INSIGHTS ON VIDEO STREAMING TECHNOLOGY",
  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss opportunities or just say hi - my inbox is open for all.",
  email_address: "krzemienski@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "nkrzemienski", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display in Contact Section.

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
