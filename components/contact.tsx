"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SubmitButton from "./submit-button";
import { sendEmail } from "@/actions/sendEmail"
import { useLang } from "@/context/theme-context"

export default function Contact() {
  const { ref } = useSectionInView("#contact");
  const { lang } = useLang();
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{lang === "en" ? "Contact me" : "联系我"}</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {lang === "en" ? "Please contact me directly at" : "请直接联系我"}
        <a className="underline" href="mailto:murphyyue@icloud.com">
          murphyyue@icloud.com
        </a>{" "}
        {lang === "en" ? "or through this form." : "或通过此表单联系我。"}
      </p>
      <form
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={lang === "en" ? "Your email" : "你的邮箱"}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={lang === "en" ? "Your message" : "你的消息"}
          required
          maxLength={5000}
        />
        <SubmitButton lang={lang} />
      </form>
    </motion.section>
  );
}