"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Toast from "./Toast";

const CONTACT_EMAIL = "fedebenitez1696@gmail.com";
export default function ContactButton() {
  const [open, setOpen] = useState(false);
  const [displayToast, setDisplayToast] = useState(false);

  const text = open ? CONTACT_EMAIL : "Available for work";

  const onCopyClick = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setDisplayToast(true);
  };

  useEffect(() => {
    const hideToast = setTimeout(() => {
      if (displayToast) setDisplayToast(false);
    }, 1500);

    return () => {
      clearTimeout(hideToast);
    };
  }, [displayToast]);

  return (
    <>
      <motion.button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => onCopyClick()}
        whileHover={{
          backgroundColor: "#303030",
          width: 270,
          transition: { duration: 0.2 },
        }}
        className="absolute right-0 mt-14 mr-14 flex items-center py-2 px-6 rounded-3xl"
      >
        <p className={`font-semibold mr-4 text-sm ${open ? "text-white" : ""}`}>
          {text}
        </p>
        {open ? (
          <Image
            priority
            src={"/clipboard.svg"}
            alt="clipboard"
            width={15}
            height={15}
          />
        ) : (
          <motion.div
            animate={{
              scale: [0.4, 0.8, 1, 0.9, 0.6],

              transition: {
                repeat: Infinity,
                duration: 2,
              },
            }}
            className="w-3 h-3 bg-green-400 rounded-xl"
          />
        )}
      </motion.button>
      <Toast text="Copied" visible={displayToast}>
        <Image
          src={"/check-circle.svg"}
          alt="clipboard"
          className="ml-2"
          width={20}
          height={20}
        />
      </Toast>
    </>
  );
}
