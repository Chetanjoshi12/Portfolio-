import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
  const {
    register,
    handleSubmit,
    reset,  // reset function को यहाँ include करें
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      Name: data.Name,
      Email: data.Email,
      Message: data.Message
    };

    try {
      await axios.post("https://getform.io/f/bgdllpoa", userInfo);
      toast.success("Your message has been sent successfully");
      reset();  // Form fields को reset करने के लिए
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-full sm:w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                {...register("Name", { required: true })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Name"
                name="Name"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.Name && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("Email", { required: true })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                name="Email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.Email && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("Message", { required: true })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Message"
                name="Message"
                placeholder="Enter Your Query"
              />
              {errors.Message && <span className="text-red-500">This field is required</span>}
            </div>

            <button type="submit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
