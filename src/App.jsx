import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import WelcomeSection from "./components/WelcomeSection";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    // แบบ Navbar + Footer
    // <div className="min-h-screen flex flex-col">
    //   <Navbar />
    //   <div className="flex-grow">
    //     <Routes>
    //       <Route path="/" element={<WelcomeSection />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    //   <Footer />
    // </div>

    // แบบ Sidebar + Content + Footer
    <div className="flex min-h-screen bg-[#FFF8F7]">
      <Sidebar />
      {/* เพิ่ม padding ให้เนื้อหาเพื่อความสวยงาม */}
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<WelcomeSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
