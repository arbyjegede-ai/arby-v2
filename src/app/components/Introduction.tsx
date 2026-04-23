"use client";

import { useState, useEffect, useRef } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
  },
};

const Introduction = () => {
  // Intro lines state
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");

  // Rotating skills state
  const [skillText, setSkillText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);

  const lines = [
    "I am Abisola Jegede,",
    "a Jack of all trades",
    "and master of ",
  ];
  const skills = [
    "Product Design",
    "Design Thinking Facilitation",
    "Motion Design",
  ];

  useEffect(() => {
    const typeLine = async (text: string, setter: (val: string) => void) => {
      for (let i = 0; i <= text.length; i++) {
        setter(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 80));
      }
    };

    const runSequence = async () => {
      await typeLine(lines[0], setLine1);
      await typeLine(lines[1], setLine2);
      await typeLine(lines[2], setLine3);
      setIntroFinished(true);
    };

    runSequence();
  }, []);

  useEffect(() => {
    if (!introFinished) return;

    const currentSkill = skills[skillIndex];
    const typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && skillText === currentSkill) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && skillText === "") {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      } else {
        setSkillText(
          isDeleting
            ? currentSkill.slice(0, skillText.length - 1)
            : currentSkill.slice(0, skillText.length + 1),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [skillText, isDeleting, skillIndex, introFinished]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPronunciation = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/assets/audio/ah-bi-soh-lah.mp4");
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
      });
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();

    setIsPlaying(true);
  };

  const Cursor = () => (
    <motion.span
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      className="inline-block ml-1 w-[3px] h-[0.8em] bg-[#FF5F1F] translate-y-1"
    />
  );

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="mb-10 mt-20 mx-16 flex flex-col gap-4 lg:flex-row lg:justify-between items-start"
    >
      <div className="block lg:text-[2.8rem] md:text-[2.5rem] sm:text-[2.5rem] text-[1.6rem] tracking-wide font-normal font-space text-white/80 mb-4 leading-[1.2]">
        <div className="min-h-[1.2em]">
          {line1}
          {!line2 && <Cursor />}
        </div>

        <div className="min-h-[1.2em]">
          {line2}
          {line2 && !line3 && <Cursor />}
        </div>

        <div className="min-h-[1.2em]">
          <span>{line3}</span>
          <span className="block sm:inline whitespace-nowrap">
            <span className="text-[#FF5F1F] font-thin">{skillText}</span>
            {line3 && <Cursor />}
          </span>
        </div>
      </div>

      <div className="lg:text-right">
        <div className="text-[15px] flex items-center lg:justify-end my-2">
          <span className="font-mono xs:text-sm sm:text-sm md:text-md lg:text-sm text-white/80">
            Pronunciation
          </span>
          <button
            onClick={playPronunciation}
            aria-label="Play pronunciation"
            className="relative ml-3 flex items-center justify-center text-xl text-white cursor-pointer"
          >
            {isPlaying && (
              <motion.span
                className="absolute rounded-full border border-[#FF5F1F]"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2.4, opacity: 0 }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{
                  width: 32,
                  height: 32,
                }}
              />
            )}

            <motion.span
              animate={{
                scale: isPlaying ? 1.25 : 1,
                color: isPlaying ? "#FF5F1F" : "#ffffff",
              }}
              transition={{ duration: 0.25 }}
              className="absolute ml-2"
            >
              <FaVolumeUp />
            </motion.span>
          </button>
        </div>
        <span className="absolute font-thin text-2xl text-white block">
          /Ah: bi: soh: la/
        </span>
      </div>
    </motion.section>
  );
};

export default Introduction;
