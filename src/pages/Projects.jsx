import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaShareAlt, FaExpand, FaTimes } from "react-icons/fa"; // เพิ่มไอคอนที่จำเป็น

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
        avatar: "/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
      {
        name: "Pakorn Chaowachat",
        avatar:
          "/images/19_Messenger_creation_ADE07C52-89B2-4C27-A89C-1EB02628FBBD.jpg",
      },
    ],
    images: [
      "/images/1756184537214.jpg",
      "/images/1756184526704.jpg",
      "/images/1756184513940.jpg",
      "/images/1756184520342.jpg",
    ],
    shareLink: ""
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
        avatar: "/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
      {
        name: "Pakorn Chaowachat",
        avatar:
          "/images/19_Messenger_creation_ADE07C52-89B2-4C27-A89C-1EB02628FBBD.jpg",
      },
    ],
    images: [
      "/images/Screenshot_9.png",
      "/images/Screenshot_10.png",
      "/images/Screenshot_11.png",
      "/images/Screenshot_12.png",
    ],
    shareLink: ""
  },
  {
    title: "Automatic Fish Feeder (Arduino ESP32)",
    description: ["Coding and Tester (Python)"],
    team: [
      {
        name: "Wimonrat Yongsungnern",
        avatar: "/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
      {
        name: "Pakorn Chaowachat",
        avatar:
          "/images/19_Messenger_creation_ADE07C52-89B2-4C27-A89C-1EB02628FBBD.jpg",
      },
    ],
    images: [
      "/images/Screenshot_13.png",
      "/images/Screenshot_14.png",
      "/images/Screenshot_15.png",
      "/images/Screenshot_16.png",
    ],
    shareLink: ""
  },
  {
    title: "WhiteBloodSaga Game (Unity)",
    description: [
      "Programmer",
      "[WhiteBloodSaga]https://waanyenstudio.itch.io/white-blood-saga",
    ],

    team: [
      {
        name: "Wimonrat Yongsungnern",
        avatar: "/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
      { name: "Prapatsorn Kaewsathit", avatar: "/images/hahn-66341_1280.jpg" }, 
      { name: "Asamapron Wongcheep", avatar: "/images/hahn-66341_1280.jpg" }, 
      { name: "Jakkapan Thepdet", avatar: "/images/640117010009.jpg" },
      {
        name: "Thanasak Limprayun",
        avatar: "/images/25_received_338929871496950.jpg",
      },
      { name: "Chayutpol Verapant", avatar: "/images/hahn-66341_1280.jpg" },
    ],
    images: [
      "/images/ta3UCp.png",
      "/images/2bJ9fY.png",
      "/images/p8NP32.png",
      "/images/n4eTUj.png",
    ],
    shareLink: "https://waanyenstudio.itch.io/white-blood-saga"
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
        avatar: "/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
      { name: "Natnicha Chusuwan", avatar: "/images/hahn-66341_1280.jpg" },
    ],
    images: [
      "/images/{87C78343-8ABF-4151-BC19-024BB95510B2}.png",
      "/images/Screenshot_1.png",
      "/images/Screenshot_2.png",
      "/images/Screenshot_3.png",
    ],
    shareLink: "https://drive.google.com/file/d/1ndwbzeuvAC-Opwh0rh96mzG9CJ53m_7H/view?usp=sharing"
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
        avatar: "/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
      { name: "Natnicha Chusuwan", avatar: "/images/hahn-66341_1280.jpg" },
      { name: "Jakkapan Thepdet", avatar: "/images/640117010009.jpg" },
    ],
    images: [
      "/images/Screenshot_4.png",
      "/images/Screenshot_5.png",
      "/images/Screenshot_6.png",
      "/images/Screenshot_7.png",
    ],
    shareLink: "https://drive.google.com/file/d/14eM5whuMw_YY4RtobfYK8cYA7b_ku6cM/view?usp=sharing"
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
        avatar: "/images/83868280_2603860246605948_5353002390238789632_n.jpg",
      },
    ],
    images: [
      "/images/06-ไม่นะ...เขิล.png",
      "/images/08-อะไรนะ..ไม่ได้ยินเลย.png",
      "/images/12-ตกหลุมรักแล้วจ้า.png",
      "/images/Screenshot_8.png",
    ],
    shareLink: "https://drive.google.com/drive/folders/1N-2ujxrrDgSc6r7WDKT8SH7C2t5jqb1j?usp=sharing"
  },
];

// Motion Variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Motion Variants for modal (for smooth open/close)
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProjectImages, setSelectedProjectImages] = useState([]);

  const openModal = (projectImages, imageIndex) => {
    setSelectedProjectImages(projectImages);
    setSelectedImage(imageIndex);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedProjectImages([]);
  };

  const goToNextImage = () => {
    setSelectedImage(
      (prevIndex) => (prevIndex + 1) % selectedProjectImages.length
    );
  };

  const goToPrevImage = () => {
    setSelectedImage(
      (prevIndex) =>
        (prevIndex - 1 + selectedProjectImages.length) %
        selectedProjectImages.length
    );
  };

  const handleShare = (shareLink) => {
    if (navigator.share && shareLink) {
      navigator.share({ title: "Check out this project!", url: shareLink });
    } else if (shareLink) {
      navigator.clipboard.writeText(shareLink).then(() => {
        alert("Project link copied to clipboard!");
      });
    } else {
      alert("Please contact me to explore this project");
    }
  };

  const renderDescriptionItem = (item, i) => {
    const linkRegex = /\[(.*?)\](https?:\/\/[^\s]+)/;
    const match = item.match(linkRegex);

    if (match) {
      const text = match[1];
      const url = match[2];
      return (
        <li key={i}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {text}
          </a>
        </li>
      );
    }
    return <li key={i}>{item}</li>;
  };

  return (
    <section className="bg-[#FFF5E4] text-gray-800 min-h-screen px-6 py-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#FFE3E1] rounded-lg shadow-xl overflow-hidden flex flex-col hover:shadow-[#FF9494] transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="relative h-48 w-full bg-gray-700 overflow-hidden">
                <img
                  src={
                    project.images[0] ||
                    "https://via.placeholder.com/600x400?text=No+Image"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => openModal(project.images, 0)}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-white text-3xl"
                  aria-label="Expand image"
                >
                  <FaExpand />
                </button>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-2 text-[#FF9494]">
                  {project.title}
                </h2>

                <ul className="list-disc list-inside mb-4 text-gray-600 flex-grow">
                  {project.description.map(renderDescriptionItem)}
                </ul>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 mt-auto">
                  {project.team.map((member, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                        <img
                          src={
                            member.avatar || "https://via.placeholder.com/150"
                          }
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-700">
                        {member.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
                  <button
                    onClick={() => handleShare(project.shareLink)}
                    className="flex items-center text-[#FF9494] hover:text-red-700 font-semibold transition-colors duration-200"
                  >
                    <FaShareAlt className="mr-2" /> SHARE
                  </button>
                  {/* <Link
                    to={`/project/${idx}`}
                    className="text-[#FF9494] hover:text-red-700 font-semibold transition-colors duration-200"
                  >
                    Learn More &rarr;
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-center space-x-4 text-lg font-bold mt-16">
          <Link
            to="/contact"
            className="px-6 py-2 border-2 border-[#FF9494] text-[#FF9494] rounded-lg hover:bg-[#FFD1D1] hover:text-white transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && selectedProjectImages.length > 0 && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div
              className="relative max-w-4xl max-h-full w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProjectImages[selectedImage]}
                alt="Enlarged project image"
                className="max-w-full max-h-[85vh] object-contain mx-auto rounded-lg shadow-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-4xl p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/75"
              >
                <FaTimes />
              </button>
              <button
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/75"
              >
                &larr;
              </button>
              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/75"
              >
                &rarr;
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800/70 text-white px-4 py-2 rounded-full text-lg">
                {selectedImage + 1} / {selectedProjectImages.length}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
