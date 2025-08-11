import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";

const Contract = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_send_email_service_key, // ⬅️ Replace with your actual service ID
        import.meta.env.VITE_send_email_tamplete_key, // ⬅️ Replace with your actual template ID
        form.current,
        import.meta.env.VITE_send_email_public_key // ⬅️ Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Good Job",
            text: "Message sent successfully!",
            icon: "success",
          });
          form.current.reset(); // auto-reset
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Try again",
            text: "Failed to send message!",
            icon: "error",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-10 lg:px-24">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Contact Me
        </h2>

        <div className="dark:bg-base-200 rounded-2xl shadow-lg p-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="form_name"
                placeholder="Your Name"
                required
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="form_email"
                placeholder="Your Email"
                required
                className="input input-bordered w-full"
              />
            </div>
            <input
              type="text"
              name="form_subject"
              placeholder="Subject"
              required
              className="input input-bordered w-full"
            />
            <textarea
              name="form_message"
              placeholder="Your Message"
              required
              className="textarea textarea-bordered w-full min-h-[150px]"
            ></textarea>
            <button type="submit" className="btn btn-primary btn-outline btn-wide text-lg">
              Send Message
            </button>
          </form>

          <div className="mt-10 text-center space-y-3">
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope /> raihanbogra697@gmail.com
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaWhatsapp size={22} /> +880 170 980 0910
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
