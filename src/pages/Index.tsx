
import CandidateProfile from "@/components/CandidateProfile";

const Index = () => {
  // This would typically come from an API or database
  const candidateData = {
    name: "Adu Melkie",
    position: "Data Consultant",
    email: "adu.melkie@example.com",
    phone: "+1 240 389 2080",
    location: "San Francisco, CA",
    // In a real application, these would be actual URLs
    resumeUrl: "#",
    recordingUrl: "#",
    prescreeningUrl: "#", // Added pre-screening video URL
    // Added transcripts for the videos
    introTranscript: "Hello, my name is Adu Melkie and I'm a Data Consultant with over 5 years of experience in data analytics, visualization, and migration. I'm excited about this opportunity because I believe my background in cloud transformation initiatives and data management systems makes me a great fit for this role. I look forward to discussing how my skills can benefit your organization.",
    prescreeningTranscript: "Interviewer: Can you tell us about your experience with data migration projects?\n\nAdu: Absolutely. At Fintech, I led a team that migrated legacy data systems to cloud-based solutions, reducing operational costs by 30% while improving data retrieval speeds by 50%. We implemented a phased migration approach to minimize disruption and ensure data integrity throughout the process.\n\nInterviewer: How do you approach data visualization for non-technical stakeholders?\n\nAdu: I always begin by understanding the key questions the stakeholders need answered. Then I design visualizations that clearly convey those insights without unnecessary complexity. At 3RDi, I created executive dashboards that transformed complex datasets into actionable insights, which helped the leadership make more informed strategic decisions.",
    recommendation: "Great news! Adu Melkie has shown strong interest in the Data Consultant position and their profile looks very promising. I highly recommend reaching out soon to discuss next steps - this could be an excellent match.",
    strengths: [
      "Strong background in data analytics and visualization",
      "5+ years experience with SQL, Python, and data migration",
      "Experience with cloud transformation initiatives",
      "Excellent communication skills demonstrated in interview",
      "Proven track record of optimizing data management systems"
    ],
    weaknesses: [
      "Limited experience with specific industry regulations",
      "Some gaps in knowledge of newest cloud technologies",
      "May require additional training on proprietary systems"
    ],
    analysis: "Adu demonstrates excellent technical capabilities in data management, with particular strength in data migration and architecture planning. The candidate has a solid understanding of information management systems and could quickly adapt to our organization's evolving data requirements. Their expertise in cloud transformation aligns well with our current initiatives.",
    about: "Software engineer experienced in working within a high-paced startup setting and collaborating with a large agile team delivering under tight deadlines. Displaying conscientiousness in leadership situations. Demonstrated perseverance, great communication skills, and an eye for detail.",
    experience: [
      {
        title: "Software Developer",
        company: "Fintech",
        period: "Oct 2022 - Present · 2 yrs 5 mo",
        location: "London, England, United Kingdom",
        logo: "/lovable-uploads/a05a5ce5-da7a-4437-b0e4-54942dfd2a23.png"
      },
      {
        title: "Course Instructor",
        company: "Code First Girls",
        period: "Apr 2022 - Present · 2 yrs 11 mo",
        location: "",
        description: "Teaching Data and SQL and Web development courses",
        logo: "/lovable-uploads/a05a5ce5-da7a-4437-b0e4-54942dfd2a23.png"
      },
      {
        title: "Software Developer",
        company: "3RDi",
        period: "May 2021 - Oct 2022 · 1 yr 5 mo",
        location: "London, England, United Kingdom",
        logo: "/lovable-uploads/a05a5ce5-da7a-4437-b0e4-54942dfd2a23.png"
      },
      {
        title: "Software Engineer",
        company: "Quicktext",
        period: "Oct 2019 - May 2021 · 1 yr 7 mo",
        location: "Sousse Governorate, Tunisia",
        logo: "/lovable-uploads/a05a5ce5-da7a-4437-b0e4-54942dfd2a23.png"
      }
    ],
    education: [
      {
        institution: "Lycée Pilote de Monastir",
        degree: "Computer Science",
        logo: "/lovable-uploads/a05a5ce5-da7a-4437-b0e4-54942dfd2a23.png"
      }
    ]
  };

  return <CandidateProfile {...candidateData} />;
};

export default Index;
