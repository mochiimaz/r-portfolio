import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await axios.post("/api/send-email", data);
      if (response.data.success) {
        setSubmitStatus("success");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#FFF5E4] text-[#FF9494] min-h-screen flex flex-col justify-center items-center px-6 py-12">
      <div className="w-full max-w-4xl">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h1>

        {submitStatus === "success" ? (
          <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
            <h2 className="text-2xl font-bold">Thank You!</h2>
            <p>
              Your message has been sent successfully. I will get back to you
              soon.
            </p>
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            noValidate // ปิดการ validate ของ browser เพื่อใช้ของ react-hook-form
          >
            <motion.div
              className="grid gap-6 md:grid-cols-2"
              variants={itemVariants}
            >
              {/* First Name */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium"
                >
                  First name*
                </label>
                <input
                  id="firstName"
                  {...register("firstName", {
                    required: "First name is required.",
                    pattern: {
                      value: /^[A-Za-z\u0E00-\u0E7F]+$/i, // English and Thai characters
                      message: "Please enter text only.",
                    },
                  })}
                  className={`w-full p-2.5 rounded-lg bg-[#FFE3E1] border ${
                    errors.firstName ? "border-red-500" : "border-[#FF9494]"
                  } ...`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </motion.div>

              {/* Last Name */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium"
                >
                  Last name*
                </label>
                <input
                  id="lastName"
                  {...register("lastName", {
                    required: "Last name is required.",
                    pattern: {
                      value: /^[A-Za-z\u0E00-\u0E7F]+$/i,
                      message: "Please enter text only.",
                    },
                  })}
                  className={`w-full p-2.5 rounded-lg bg-[#FFE3E1] border ${
                    errors.lastName ? "border-red-500" : "border-[#FF9494]"
                  } ...`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </motion.div>

              {/* Company */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium"
                >
                  Company*
                </label>
                <input
                  id="company"
                  {...register("company", { required: "Company is required." })}
                  className={`w-full p-2.5 rounded-lg bg-[#FFE3E1] border ${
                    errors.company ? "border-red-500" : "border-[#FF9494]"
                  } ...`}
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.company.message}
                  </p>
                )}
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium"
                >
                  Phone number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required.",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message:
                        "Please enter a valid 10-digit Thai phone number.",
                    },
                  })}
                  className={`w-full p-2.5 rounded-lg bg-[#FFE3E1] border ${
                    errors.phone ? "border-red-500" : "border-[#FF9494]"
                  } ...`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email address*
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address.",
                    },
                  })}
                  className={`w-full p-2.5 rounded-lg bg-[#FFE3E1] border ${
                    errors.email ? "border-red-500" : "border-[#FF9494]"
                  } ...`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </motion.div>

              {/* Website */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium"
                >
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  {...register("website", {
                    pattern: {
                      value:
                        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                      message: "Please enter a valid URL.",
                    },
                  })}
                  className={`w-full p-2.5 rounded-lg bg-[#FFE3E1] border ${
                    errors.website ? "border-red-500" : "border-[#FF9494]"
                  } ...`}
                />
                {errors.website && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.website.message}
                  </p>
                )}
              </motion.div>
            </motion.div>

            {/* Message Area */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                // {...register("message", { required: "Message is required." })}
                className={`w-full p-2.5 rounded-lg bg-[#FFE3E1] border ${
                  errors.message ? "border-red-500" : "border-[#FF9494]"
                } ...`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#FF9494] hover:bg-[#FFD1D1] text-[#FFF5E4] rounded-lg text-sm font-medium transition disabled:opacity-50"
              variants={itemVariants}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
            {submitStatus === "error" && (
              <p className="mt-2 text-red-600">
                Failed to send message. Please try again later.
              </p>
            )}
          </motion.form>
        )}
      </div>
    </section>
  );
}

export default Contact;
