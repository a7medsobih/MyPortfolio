import { FiMail, FiMapPin, FiPhone, FiSend, } from "react-icons/fi"
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import mail from "../../gif/mail.json"
import success from "../../gif/success confetti.json"
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";
import ScrollAnimation from "../../components/ScrollAnimation";

const contactInfo = [
    { icon: FiMail, label: "Email", value: "ahmedsobih7@gmail.com", href: "mailto:ahmedsobih7@gmail.com" },
    { icon: FiPhone, label: "Phone", value: "+20 101 732 0732", href: "tel:+201017320732" },
    { icon: FiMapPin, label: "Location", value: "6th of October City, Egypt", href: "#" },
];

const ContactUs = () => {
    const [state, handleSubmit] = useForm("mkgkklyb");
    const [formData, setFormData] = useState({
        email: sessionStorage.getItem("email") || "",
        phone: sessionStorage.getItem("phone") || "",
        message: sessionStorage.getItem("message") || ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const newData = { ...prev, [name]: value };
            sessionStorage.setItem(name, value); // حفظ لكل حقل
            return newData;
        });
    };
    return (
        <div id="contact" className="bg-primary-light section overflow-hidden py-16">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14 "
                >
                    <h2 className="section-title">
                        Get In<span className="text-highlight">Touch</span>
                    </h2>
                    <p className="text-subtitle text-md w-[90%] mx-auto mt-4">
                        Have a project in mind? Let's work together to create something amazing!
                    </p>
                </motion.div>

                <div className="flex md:flex-row flex-col justify-between items-center gap-6">

                    <div className=" w-full md:w-[80%]">
                        <ScrollAnimation direction="right" duration={0.5} delay={0.2}>
                            <Lottie
                                className='w-[250px] mx-auto hidden md:block'
                                animationData={mail}
                            />

                            {/* Contact Cards */}
                            <div className="flex flex-col gap-4">
                                {contactInfo.map((info, i) => (
                                    <ScrollAnimation direction="right" duration={0.5} delay={0.2 * i}>
                                        <a
                                            key={i}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-primary shadow-md backdrop-blur-xl border border-borderC smooth-transition group hover:border-border-highlight"
                                            href={info.href}
                                        >
                                            <div className="p-3 rounded-lg bg-primary-lighter text-highlight group- transition-all">
                                                <info.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-subtitle ">{info.label}</p>
                                                <p className="font-medium text-light">{info.value}</p>
                                            </div>
                                        </a>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className="w-full">
                        <ScrollAnimation direction="left" duration={0.5} delay={0.5}>
                            <form className="p-8 bg-primary rounded-xl shadow-md backdrop-blur-xl border border-borderC" onSubmit={handleSubmit}>
                                {/* Email */}
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-3">
                                        <label
                                            htmlFor="email"
                                            className=" text-sm text-light/80 "
                                        >
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full md:flex-1 p-3 rounded-xl bg-primary-light border border-borderC text-light focus:outline-none focus:border-highlight smooth-transition"
                                        />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="phone" className=" text-sm text-light/80">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full md:flex-1 p-3 rounded-xl bg-primary-light border border-borderC text-light focus:outline-none focus:border-highlight smooth-transition"
                                        />
                                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-3">
                                        <label
                                            htmlFor="message"
                                            className="md:w-32 text-sm text-light/80"
                                        >
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            placeholder="Write your message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full md:flex-1 p-3 rounded-xl bg-primary-light border border-borderC text-light focus:outline-none focus:border-blue smooth-transition resize-none"
                                        ></textarea>
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                        />
                                    </div>
                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className={`btn btn-light w-fit px-12 mx-auto flex items-center gap-2
                                            ${state.submitting ? "opacity-50 cursor-not-allowed" : ""}`}
                                        disabled={state.submitting}
                                    >
                                        {state.submitting ? ("submitting...") : <>Send Message <FiSend size={19} /> </>}
                                    </button>
                                </div>

                                {state.succeeded && (
                                    <p className="flex items-center mx-auto text-sm text-subtitle">
                                        <Lottie
                                            className='w-20 -mr-3'
                                            animationData={success}
                                            loop={false}
                                        />
                                        Thanks for reaching out! I'll get back to you soon.
                                    </p>
                                )}
                            </form>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactUs