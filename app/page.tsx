"use client";

import Greeting from '@/components/1-Greeting';
import Description from '@/components/2-Description';
import PersonalInfo from '@/components/3-PersonalInfo';
import Skills from '@/components/4-Skills';
import MobileSkills from '@/components/4-mobileskill';
import Experience from '@/components/5-Experience';
import Contect from '@/components/6-Contact';
import Novel from '@/components/7-Novel';
import Dream from '@/components/8-Dream';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [bgColor, setBgColor] = useState("#fdebbc");
  const [textColor, setTextColor] = useState("text-black");
  const [sectionBgColor, setSectionBgColor] = useState("#ffc54f");
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours();
      
      // Define time ranges for different periods
      if (hours >= 12 && hours < 17) {
        // Afternoon (12 PM - 5 PM)
        setBgColor("#ceedec");
        setTextColor("text-black");
        setSectionBgColor("#847478");
      } else if (hours >= 17 && hours < 20) {
        // Evening (5 PM - 8 PM)
        setBgColor("#ffcbf6");
        setTextColor("text-black");
        setSectionBgColor("#712e62");
      } else if (hours >= 20 || hours < 5) {
        // Night (8 PM - 5 AM)
        setBgColor("#0b2247");
        setTextColor("text-black");
        setSectionBgColor("#265f96");
      } else {
        // Morning (5 AM - 12 PM)
        setBgColor("#fdebbc");
        setTextColor("text-black");
        setSectionBgColor("#ffc54f");
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isPdfModalOpen={isPdfModalOpen} />
      <main className="flex-grow">
        <div id="greeting">
          <Greeting />
        </div>
        
        {/*---------------------------------- Description ----------------------------------*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5}}
        >
          <div id="description" className={`relative z-40 border-y border-transparent ${textColor}`} style={{ backgroundColor: bgColor }}>
            <Description />
          </div>
        </motion.div>

        {/*---------------------------------- Personal Info ----------------------------------*/}
        <div className={`pb-3 relative z-20`} style={{ backgroundColor: sectionBgColor }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5}}
          >
            <PersonalInfo />
          </motion.div>
        </div>

        {/*---------------------------------- Skills ----------------------------------*/}
        <div id="skills" className='md:block hidden'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5}}
          >
            <Skills />
          </motion.div>
        </div>

        <div id="mobile-skills" className='md:hidden'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5}}
          >
            <MobileSkills />
          </motion.div>
        </div>

        {/*---------------------------------- Experience ----------------------------------*/}
        <div id="experience" className={`py-3 relative z-20`} style={{ backgroundColor: sectionBgColor }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5}}
          >
            <Experience onPdfModalChange={setIsPdfModalOpen} />
          </motion.div>
        </div>

        {/*---------------------------------- Contact ----------------------------------*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5}}
        >
          <div id="contact">
            <Contect />
          </div>
        </motion.div>

        {/*---------------------------------- Novel ----------------------------------*/}
        <div id="novel" className={`py-3`} style={{ backgroundColor: sectionBgColor }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Novel />
          </motion.div>
        </div>

        {/*---------------------------------- Dream ----------------------------------*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div id="dream">
            <Dream />
          </div>
        </motion.div>
      </main>
    </div>
  );
}