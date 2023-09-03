"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { slideIn } from "../utils/motion";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_wba6fnq", "template_wkuzdaf", "LUN0j6gtv3iuZUhwD")
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: any) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    // <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden" >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      id="contact"
    >
      <p className="text-[#dfd9ff] font-medium lg:text-[25px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[30px]">
        Get in touch
      </p>
      <h3 className="font-black text-white lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] lg:leading-[78px] mt-2">
        Conta<span className="text-pink-600">ct.</span>
      </h3>

      <form
        // ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>

        <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
