import { useState } from "react";
import { motion } from "framer-motion";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const translations = {
  en: {
    nav: ["Home", "About", "Products", "Projects", "Contact", "Careers"],
    title: "WE MAKE STRUCTURES MOVE",
    subtitle: "We are the leading specialist for mechanical bridge equipment, structural protection systems and vibration isolation.",
    about: "MAURER Group is a leading international supplier of innovative solutions for bridge and building engineering as well as industrial applications. Our portfolio includes expansion joints, seismic devices, bearings, and structural protection systems designed to ensure safety, durability, and performance.",
    products: "Our Solutions",
    contact: "Contact Us",
    bearings: "Bridge Bearings",
    expansionJoints: "Expansion Joints",
    seismicDevices: "Seismic Devices",
    accessories: "Bridge Accessories",
    careers: "Join our team and shape the future of infrastructure.",
    motto: "force in motion",
    company: "MAURER Bridge Accessories Co.,Ltd",
    tagline: "Innovating connections, empowering movement."
  },
  zh: {
    nav: ["首頁", "關於我們", "產品", "項目", "聯絡我們", "招募人才"],
    title: "我們讓結構運動",
    subtitle: "我們是機械橋樑設備、結構保護系統和減振隔離的領先專家。",
    about: "MAURER集團是橋樑和建築工程以及工業應用的國際領先創新解決方案供應商。我們的產品組合包括伸縮縫、抗震裝置、支座和結構保護系統，旨在確保安全性、耐用性和性能。",
    products: "我們的解決方案",
    contact: "聯絡我們",
    bearings: "橋樑支座",
    expansionJoints: "伸縮縫",
    seismicDevices: "抗震裝置",
    accessories: "橋樑配件",
    careers: "加入我們的團隊，共同塑造基礎建設的未來。",
    motto: "動力之源",
    company: "MAURER橋樑配件有限公司",
    tagline: "創新連接，驅動未來。"
  }
};

function LanguageSelector({ lang, setLang }) {
  return (
    <div className="flex justify-end p-4 text-sm space-x-2">
      <button onClick={() => setLang("en")} className={lang === "en" ? "text-orange-500" : "hover:text-orange-500"}>EN</button>
      <button onClick={() => setLang("zh")} className={lang === "zh" ? "text-orange-500" : "hover:text-orange-500"}>中文</button>
    </div>
  );
}

function Navbar({ lang, t }) {
  const labels = t.nav;
  return (
    <nav className="flex justify-center space-x-6 text-white text-sm py-2 bg-black border-t border-b border-gray-800">
      <Link to="/" className="hover:text-orange-500">{labels[0]}</Link>
      <Link to="/about" className="hover:text-orange-500">{labels[1]}</Link>
      <Link to="/products" className="hover:text-orange-500">{labels[2]}</Link>
      <Link to="/projects" className="hover:text-orange-500">{labels[3]}</Link>
      <Link to="/contact" className="hover:text-orange-500">{labels[4]}</Link>
      <Link to="/careers" className="hover:text-orange-500">{labels[5]}</Link>
    </nav>
  );
}

function Home({ t }) {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-black">
      <motion.h1 className="text-3xl md:text-5xl font-bold text-white mb-2" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        {t.company}
      </motion.h1>
      <motion.h2 className="text-xl md:text-2xl text-orange-500 italic mb-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }}>
        {t.tagline}
      </motion.h2>
      <motion.h1 className="text-4xl md:text-6xl font-bold text-orange-500 mb-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
        {t.title}
      </motion.h1>
      <motion.p className="text-lg md:text-2xl max-w-3xl text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }}>
        {t.subtitle}
      </motion.p>
    </section>
  );
}

function About({ t }) {
  return (
    <section className="px-6 py-12 text-center bg-black text-white">
      <h2 className="text-2xl text-orange-500 mb-4">About</h2>
      <p className="max-w-3xl mx-auto text-lg">{t.about}</p>
    </section>
  );
}

function Products({ t }) {
  return (
    <section className="px-6 py-12 text-center bg-black text-white">
      <h2 className="text-2xl text-orange-500 mb-6">{t.products}</h2>
      <ul className="space-y-4 text-lg">
        <li>{t.bearings}</li>
        <li>{t.expansionJoints}</li>
        <li>{t.seismicDevices}</li>
        <li>{t.accessories}</li>
      </ul>
    </section>
  );
}

function Projects({ t }) {
  return (
    <section className="px-6 py-12 text-center bg-black text-white">
      <h2 className="text-2xl text-orange-500 mb-4">Projects</h2>
      <p className="text-lg">[Project portfolio coming soon]</p>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section className="px-6 py-12 text-center bg-black text-white">
      <h2 className="text-2xl text-orange-500 mb-4">{t.contact}</h2>
      <p className="text-lg">[Contact form and map integration coming soon]</p>
    </section>
  );
}

function Careers({ t }) {
  return (
    <section className="px-6 py-12 text-center bg-black text-white">
      <h2 className="text-2xl text-orange-500 mb-4">Careers</h2>
      <p className="text-lg">{t.careers}</p>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="text-center text-orange-500 italic py-4 bg-black">
      {t.motto}
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white font-sans">
        <LanguageSelector lang={lang} setLang={setLang} />
        <Navbar lang={lang} t={t} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/about" element={<About t={t} />} />
            <Route path="/products" element={<Products t={t} />} />
            <Route path="/projects" element={<Projects t={t} />} />
            <Route path="/contact" element={<Contact t={t} />} />
            <Route path="/careers" element={<Careers t={t} />} />
          </Routes>
        </div>
        <Footer t={t} />
      </div>
    </Router>
  );
}// This is a placeholder. Replace with the latest code content from canvas.
