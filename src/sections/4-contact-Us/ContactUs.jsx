import { FiMail } from "react-icons/fi"
import Lottie from "lottie-react";
import mail from "../../gif/mail.json"
import success from "../../gif/success confetti.json"
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";
import ScrollAnimation from "../../components/ScrollAnimation";

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
        <div id="contact" className="section py-16">
            <div className="flex justify-between items-center gap-5 md:gap-10">
                <div className="w-full max-w-2xl">

                    <ScrollAnimation direction="right" duration={0.5} delay={0.1}>
                        <h2 className="text-2xl md:text-3xl font-semibold text-light mt-4 mb-2  flex items-center gap-3">
                            <FiMail className="text-blue" size={35} />
                            Contact Us
                        </h2>
                        <p className="text-subtitle leading-relaxed ">
                            For any project inquiries or technical questions, feel free to get in touch.
                        </p>
                    </ScrollAnimation>
                    <div className="mt-16 px-5 md:px-0">
                        <form className=" flex flex-col gap-6" onSubmit={handleSubmit}>
                            {/* Email */}
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
                                <label
                                    htmlFor="email"
                                    className="md:w-32 text-sm text-light/80 "
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
                                    className="w-full md:flex-1 py-3 px-4 rounded-md bg-header border border-borderColor text-light focus:outline-none focus:border-blue smooth-transition"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
                                <label htmlFor="phone" className="md:w-32 text-sm text-light/80">
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
                                    className="w-full md:flex-1 py-3 px-4 rounded-md bg-header border border-borderColor text-light focus:outline-none focus:border-blue smooth-transition"
                                />
                                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-5">
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
                                    className="w-full md:flex-1  py-3 px-4 rounded-md bg-header border border-borderColor text-light focus:outline-none focus:border-blue smooth-transition resize-none"
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>

                            <div className="flex flex-col md:flex-row sm:items-start items-center  gap-2 md:gap-5">
                                <div className="hidden md:block md:w-32" />
                                {/* Submit */}
                                <button
                                    type="submit"
                                    className={`w-fit py-2 px-5 rounded-md bg-[rgba(36,37,46,1)] border border-[rgba(93,188,252,0.2)] text-light font-semibold hover:border-blue smooth-transition 
                                        ${state.submitting ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                    disabled={state.submitting}
                                >
                                    {state.submitting ? "submitting..." : "Send Message"}
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
                    </div>
                </div>

                <Lottie
                    className='lg:w-[800px] md:w-[400px] sm:w-[250px] hidden  sm:block'
                    animationData={mail}
                />
            </div>

        </div>
    )
}

export default ContactUs