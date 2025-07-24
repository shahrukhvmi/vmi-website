import Assistance from "@/components/contact/Assistance";
import ContactForm from "@/components/contact/ContactForm";
import StarsCanvas from "@/components/StarsCanvas";
import React from "react";

export default function ContactUs() {
  return (
    <main className="relative text-white min-h-screen overflow-hidden">
      <StarsCanvas />

      <ContactForm />
      <Assistance />
    </main>
  );
}
