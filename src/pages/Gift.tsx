import {
  faGift,
  faArrowLeftRotate,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toJpeg } from "html-to-image";
import { useEffect, useRef, useState } from "react";

const Gift = () => {
  const dark = useSelector((state: any) => state.isDark);
  const name = useSelector((state: any) => state.name);
  const navigate = useNavigate();

  const APPRECIATION = "I sincerely appreciate your wonderful contribution to my 2025 journey. As we flip the page...";

const NEW_YEAR_WISHES = [
  "may 2026 bring you boundless opportunities and the bravery to follow your greatest aspirations. I hope that each day will help you become the best version of yourself.",
  "I hope you have an amazing 2026 full of deep serenity, boundless wealth, and the comfort of sincere laughter. I hope you share this year's masterpiece with the people who are most important to you.",
  "may 2026 be the start of your most remarkable chapter to date. I wish you the unexpected blessings and unwavering happiness you so richly deserve this year.",
  "cheers to 365 days of excellent health, meaningful relationships, and endless inspiration. I hope that in 2026, all of your efforts will be rewarded and your heart will be completely satisfied.",
  "I hope the upcoming year is filled with success and self-discovery. Throughout 2026, may you have the fortitude to conquer every obstacle and the determination to rejoice in every minor triumph."
];
  
  const [selectedWish, setSelectedWish] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * NEW_YEAR_WISHES.length);
    setSelectedWish(NEW_YEAR_WISHES[randomIndex]);
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const [isDownloading, setIsDownloading] = useState(false);
  const giftCardRef = useRef<HTMLDivElement>(null);
  const handleDownload = async () => {
    if (!giftCardRef.current) return;

    setIsDownloading(true);

    setTimeout(async () => {
      try {
        const dataUrl = await toJpeg(giftCardRef.current!, { 
          quality: 1,
          pixelRatio: 3,
          cacheBust: true 
        });

        const link = document.createElement("a");
        link.download = `${name}-gift.jpeg`;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error("Download failed", err);
      } finally {
        setIsDownloading(false);
      }
    }, 500); 
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between text-sm max-w-screen max-h-screen overflow-hidden ${
        dark
          ? "bg-background_dark text-white"
          : "bg-background_light text-black"
      }`}
    >
      <Nav />

      <main className="p-4 rounded-lg shadow-md w-[40%] lg:w-[60%] sm:w-[90%] h-[25rem] m-auto bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSgQ4AffZHnaT8RkTIj_tTO6f4jcnzr_o3tIUfYdQ_7AWOOc5fhUr2fpMNK8rhxKbCeiROVpaCOEUPGmusu5Y-56irtfoYXOUJWs3TZbkoa_co8qH7K5_br8dfvb8gkCKeSSu_8uaYLxkyteGkUfJS2AyldgHST6QA-iO0Ns_qjryZaK_xyMuHFLQSaAMaK8rcEdUU4o985iaKQPT8wy3_3EkGJeu4vmPs0r9we6WTMvGdQgNhT50OnSj7z0oQboUmZCe47Rh8Aee1')] bg-cover bg-center relative" ref={giftCardRef} >
        <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center gap-5 text-xs bg-surface_dark bg-opacity-90 rounded-lg p-4 bg-cover bg-center bg-no-repeat text-white">
          <div className=" flex flex-col gap-4 items-center">
            <FontAwesomeIcon
            icon={faGift}
            className={`rounded-full p-3 flex justify-center items-center text-primary h-3 w-3 ${
              dark ? "bg-border_dark" : "bg-surface_light"
            }`}
          />
          <p className=" text-center uppercase text-xs text-primary">A special message for you.</p>
          <p className=" text-center text-4xl font-bold">
            Happy New Year, {name}
          </p>
          <p className={`text-center italic transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} leading-relaxed max-w-[90%] text-wrap`}>
            {APPRECIATION + selectedWish}
          </p>
          <p className=" text-center text-xs text-text_muted italic">
            Warm regards, <br /> Braide, Daniella Biobele
          </p>
          </div>
          <div className={`flex items-center justify-center gap-4 text-xs ${isDownloading ? "hidden" : "block"}`}>
            <button className="bg-primary rounded-lg p-2 px-4 flex items-center gap-2" onClick={handleDownload}>
              <FontAwesomeIcon icon={faDownload} />
              Download Image
            </button>
            <button className=" bg-transparent border border-border_light rounded-lg p-2 px-4 flex items-center gap-2" onClick={() => navigate("/")}>
              <FontAwesomeIcon icon={faArrowLeftRotate} />
              Create another
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gift;
