"use server";

import React from "react";
import { Resend } from "resend";
import { EmailTemplate } from "@/email/contract-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if(!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    }
  }
  if(!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    }
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "murphyyue@icloud.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(EmailTemplate, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
}

