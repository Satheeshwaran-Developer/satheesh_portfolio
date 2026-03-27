import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import Toast from "./Toast";
import SocialLinks from "./SocialLinks";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
  show: false,
  type: "success",
  message: "",
});

 const sendEmail = (e: any) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .sendForm(
      "service_hg1wjfx",
        "template_u20zx7a",
        formRef.current!,
        "daQtXaoRCWau14GUM"
    )
    .then(
      () => {
        setToast({
          show: true,
          type: "success",
          message: "Message sent successfully 🚀",
        });

        setLoading(false);
        formRef.current?.reset();

        setTimeout(() => {
          setToast({ ...toast, show: false });
        }, 3000);
      },
      () => {
        setToast({
          show: true,
          type: "error",
          message: "Failed to send message ❌",
        });

        setLoading(false);

        setTimeout(() => {
          setToast({ ...toast, show: false });
        }, 3000);
      }
    );
};

  return (
    <section
      id="contact"
      className="
        py-24 px-6 
        bg-white text-gray-900 
        dark:bg-[#0b1629] dark:text-white
        transition-colors duration-500
      "
    >
        <Toast show={toast.show} type={toast.type} message={toast.message} />
         <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }} // 🔥 repeat animation every scroll
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">
          <h2   className="
    text-3xl font-bold
    bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
    text-transparent bg-clip-text
  ">Get In Touch</h2>
          <div className="w-16 h-[3px] bg-blue-500 mt-2 mb-4 rounded-full"></div>

          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            Currently open to new opportunities. I’ll try my best to get back to you!
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">

            {/* CARD */}
            {[
              { icon: <Phone />, title: "Phone", value: "+91 9080616772" },
              { icon: <Mail />, title: "Email", value: "satheeshwarn95@gmail.com" },
              { icon: <MapPin />, title: "Location", value: "Madurai, India" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="
                  flex items-center gap-4 p-5 rounded-xl

                  bg-gray-100 border border-gray-200
                  dark:bg-white/5 dark:border-white/10

                  hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                  transition
                "
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.value}
                  </p>
                </div>
                
              </motion.div>
            ))}
           <SocialLinks/>
          </div>

          {/* RIGHT FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="
              p-6 rounded-2xl

              bg-gray-100 border border-gray-200
              dark:bg-white/5 dark:border-white/10

              backdrop-blur-xl
            "
          >
            <h3 className="text-xl font-semibold mb-6">
              Send me a message
            </h3>

            {/* INPUTS */}
            <div className="space-y-4">

              <input
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-transparent border border-gray-300 dark:border-white/10 focus:border-blue-500 outline-none"
              />

              <input
                name="user_email"
                required
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-transparent border border-gray-300 dark:border-white/10 focus:border-blue-500 outline-none"
              />

              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-transparent border border-gray-300 dark:border-white/10 focus:border-blue-500 outline-none"
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                mt-6 w-full flex items-center justify-center gap-2
                py-3 rounded-lg

                bg-gradient-to-r from-blue-500 to-purple-500
                text-white font-medium

                hover:scale-105 active:scale-95
                transition
              "
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </motion.form>

        </div>

      </div>
      
      </motion.div>
    </section>
  );
}