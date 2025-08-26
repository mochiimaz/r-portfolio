import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const educationData = [
  {
    startYear: "2015",
    endYear: "2019",
    institution:
      "Bangkok Technical Of Business Administration Vocational College",
    faculty: "Vocational Certificate & High Vocational Certificate",
    major: "Computer Business",
  },
  {
    startYear: "2021",
    endYear: "2024",
    institution: "Dhurakij Pundit University",
    faculty:
      "Bachelor's degree, College of Technology Innovation and Engineering",
    major: "Computer Engineering",
  },
];

const experienceData = [
  {
    startYear: "July 2018",
    endYear: "November 2019",
    company: "Bangkok Management Realty Co.,Ltd",
    position: "Administrative Staff @ Accounts Receivable Clerk",
    type: "Full-time",
  },
  {
    startYear: "February 2020",
    endYear: "July 2020",
    company: "V C S Viriyacom & Service Co.,Ltd",
    position: "Webmaster & Adminstrator (Freelance)",
    type: "Freelance",
  },
  {
    startYear: "June 2023",
    endYear: "August 2023",
    company: "Provincial Electricity Authority",
    position: "Programmer (Front-End Internship)",
    type: "Internship",
  },
];

const skills = [
  { name: "HTML", color: "bg-orange-500" },
  { name: "CSS", color: "bg-blue-800" },
  { name: "JavaScript", color: "bg-yellow-800" },
  { name: "Python", color: "bg-orange-300" },
  { name: "C#", color: "bg-purple-800" },
  //   { name: "SQL", color: "bg-green-300" },
  { name: "React", color: "bg-blue-500" },
  { name: "React Native", color: "bg-blue-300" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "Express", color: "bg-yellow-300" },
  { name: "Bootstrap", color: "bg-purple-500" },
  { name: "Tailwind CSS", color: "bg-purple-300" },
  { name: "Unity", color: "bg-gray-600" },
  { name: "MySQL", color: "bg-yellow-500" },
  { name: "Google Cloud", color: "bg-red-500" },
  { name: "Render", color: "bg-gray-700" },
  { name: "Github", color: "bg-gray-300" },
  { name: "Copilot", color: "bg-pink-400" },
  { name: "OpenAI(LLM)", color: "bg-gray-100" },
  { name: "Moving Average", color: "bg-red-300" },
  { name: "SolidWork", color: "bg-blue-500" },
];

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
};

function About() {
  return (
    <section className="bg-[#FFF5E4] text-gray-600 min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-[#FF9494]">
          About Me
        </h1>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#FF9494]">
            Education
          </h2>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariant}
                className="flex flex-col md:flex-row md:items-start"
              >
                <div className="w-70 font-mono text-gray-600">
                  {edu.startYear} - {edu.endYear}
                </div>
                <div className="border-l-2 border-[#FF9494] pl-4 ml-4">
                  <p className="font-semibold">{edu.institution}</p>
                  <p>{edu.faculty}</p>
                  <p>{edu.major}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#FF9494]">
            Experience
          </h2>
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariant}
                className="flex flex-col md:flex-row md:items-start"
              >
                <div className="w-70 font-mono text-gray-600">
                  {exp.startYear} - {exp.endYear}
                </div>
                <div className="border-l-2 border-[#FF9494] pl-4 ml-4">
                  <p className="font-semibold">{exp.company}</p>
                  <p>{exp.position}</p>
                  <p className="italic">{exp.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-[#FF9494]">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className="flex items-center space-x-2"
              >
                <div className={`w-4 h-4 rounded-full ${skill.color}`}></div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-4 text-lg font-bold pt-10">
          <Link
            to="/projects"
            className="px-6 py-3 border border-[#FF9494] border border-3 text-[#FF9494] rounded-lg hover:bg-[#FFD1D1] hover:text-[#FF9494] transition"
          >
            Next to My Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
