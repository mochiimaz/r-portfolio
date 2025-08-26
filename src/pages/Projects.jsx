import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ตัวอย่าง data สำหรับ project
const projects = [
  {
    title: "Booking Book (React)",
    description: [
      "Design Relationship Database",
      "Design UX/UI (Basic)",
      "Development Website",
      "JWT (JSON Web Token)",
    ],
    team: [
      {
        name: "Wimonrat Yongsungnern",
        avatar:
          "../public/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
      {
        name: "Pakorn Chaowachat",
        avatar:
          "../public/images/19_Messenger_creation_ADE07C52-89B2-4C27-A89C-1EB02628FBBD.jpg",
      },
    ],
    images: [
      "../public/images/1756184537214.jpg",
      "../public/images/1756184526704.jpg",
      "../public/images/1756184513940.jpg",
      "../public/images/1756184520342.jpg",
    ],
  },
  {
    title: "Guan Badminton App (React Native)",
    description: [
      "Design Relationship Database",
      "Design UX/UI (Basic)",
      "Development Application",
      "JWT (JSON Web Token)",
      "OpenAI LLM (Large Language Model)",
      "Moving Average Algorithm",
    ],
    team: [
      {
        name: "Wimonrat Yongsungnern",
        avatar:
          "../public/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
      {
        name: "Pakorn Chaowachat",
        avatar:
          "../public/images/19_Messenger_creation_ADE07C52-89B2-4C27-A89C-1EB02628FBBD.jpg",
      },
    ],
    images: [
      "../public/images/Screenshot_9.png",
      "../public/images/Screenshot_10.png",
      "../public/images/Screenshot_11.png",
      "../public/images/Screenshot_12.png",
    ],
  },
  {
    title: "Automatic Fish Feeder (Arduino ESP32)",
    description: ["Coding and Tester (Python)"],
    team: [
      {
        name: "Wimonrat Yongsungnern",
        avatar:
          "../public/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
      {
        name: "Pakorn Chaowachat",
        avatar:
          "../public/images/19_Messenger_creation_ADE07C52-89B2-4C27-A89C-1EB02628FBBD.jpg",
      },
    ],
    images: [
      "../public/images/Screenshot_13.png",
      "../public/images/Screenshot_14.png",
      "../public/images/Screenshot_15.png",
      "../public/images/Screenshot_16.png",
    ],
  },
  {
    title: "WhiteBloodSaga Game (Unity)",
    description: [
      "Programmer",
      "https://waanyenstudio.itch.io/white-blood-saga",
    ],

    team: [
      {
        name: "Wimonrat Yongsungnern",
        avatar:
          "../public/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
      { name: "Prapatsorn Kaewsathit", avatar: "/path/to/avatar2.png" },
      { name: "Asamapron Wongcheep", avatar: "/path/to/avatar1.png" },
      { name: "Jakkapan Thepdet", avatar: "../public/images/640117010009.jpg" },
      {
        name: "Thanasak Limprayun",
        avatar: "../public/images/25_received_338929871496950.jpg",
      },
      { name: "Chayutpol Verapant", avatar: "/path/to/avatar2.png" },
    ],
    images: [
      "../public/images/ta3UCp.png",
      "../public/images/2bJ9fY.png",
      "../public/images/p8NP32.png",
      "../public/images/n4eTUj.png",
    ],
  },
  {
    title: "Rice Separator Project (SolidWork (Software))",
    description: [
      "Measure the size of the machine",
      "Design parts",
      "Assemble parts",
    ],
    team: [
      {
        name: "Wimonrat Yongsungnern",
        avatar:
          "../public/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
      { name: "Natnicha Chusuwan", avatar: "/path/to/avatar2.png" },
    ],
    images: [
      "../public/images/{87C78343-8ABF-4151-BC19-024BB95510B2}.png",
      "../public/images/Screenshot_1.png",
      "../public/images/Screenshot_2.png",
      "../public/images/Screenshot_3.png",
    ],
  },
  {
    title: "Architectural drafting lamp (SolidWork (Hand Written))",
    description: [
      "Draw the parts",
      "Part grid line drawing",
      "Part size measurement",
    ],
    team: [
      {
        name: "Wimonrat Yongsungnern",
        avatar:
          "../public/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
      { name: "Natnicha Chusuwan", avatar: "/path/to/avatar2.png" },
      { name: "Jakkapan Thepdet", avatar: "../public/images/640117010009.jpg" },
    ],
    images: [
      "../public/images/Screenshot_4.png",
      "../public/images/Screenshot_5.png",
      "../public/images/Screenshot_6.png",
      "../public/images/Screenshot_7.png",
    ],
  },
  {
    title: "Free life (Sticker Line)",
    description: [
      "Design",
      "Drawing",
      "Coloring",
      "Scaling",
      "Production",
      "[ชีวิตเสรีภาพ]https://line.me/S/sticker/12918801/?lang=th&utm_source=gnsh_stickerDetail",
    ],
    team: [
      {
        name: "Wimonrat Yongsungnern",
        avatar:
          "../public/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
    ],
    images: [
      "../public/images/06-ไม่นะ...เขิล.png",
      "../public/images/08-อะไรนะ..ไม่ได้ยินเลย.png",
      "../public/images/12-ตกหลุมรักแล้วจ้า.png",
      "../public/images/Screenshot_8.png",
    ],
  },
];

// Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Projects() {
  return (
    <section className="bg-[#FFF5E4] text-white min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center text-[#FF9494]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        {projects.map((project, idx) => (
          <div
            key={idx}
            className="mb-12 p-6 bg-[#FFE3E1] rounded-lg shadow-lg hover:shadow-[#FF9494] transition"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Grid 2 คอลัมน์ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ฝั่งซ้าย: รายละเอียด */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-[#FF9494]">
                  {project.title}
                </h2>

                <ul className="list-disc list-inside mb-6 text-gray-600">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                  {project.team.map((member, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-600">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span>{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ฝั่งขวา: อัลบัมรูป (4 รูป) */}
              <div className="grid grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="w-full h-32 rounded-lg overflow-hidden bg-gray-700"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <img
                      src={img}
                      alt={`project-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 text-lg font-bold">
        <Link
          to="/contact"
          className="px-6 py-3 border border-[#FF9494] border border-3 text-[#FF9494] rounded-lg hover:bg-[#FFD1D1] hover:text-[#FF9494] transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default Projects;
