import React from "react";
import Navbar from '../components/Landing/Navbar'
import Footer from '../components/Landing/Footer'
import LocationSection from '../components/Landing/LocationSection'
import LocationSection from '../components/Landing/LocationSection'
const ContactUs = () => {
  return (
    <>
      <div className='relative max-w-[1400px] w-full mx-auto'>
        <Navbar />
        <main className="relative my-24 px-5 h-full">

          {/* Contact Info & Form Section */}
          <div className="flex flex-wrap justify-center md:justify-between gap-8 px-4">
            {/* Contact Information */}
            <div className="flex-2 w-full md:w-3/5">
              {/* Header Section */}
              <h1 className="text-center text-3xl font-bold py-5">Contact Us</h1>
              <p className="text-gray-600 mt-2 font-medium ext-sm">
                Email, call, or complete the form to learn how Mayrahkeeafrica can solve your problem.
              </p>
              <p className="my-2"><a href="mailto:info@mayrahkee.com" className="text-gray-600 underline font-medium text-sm">info@mayrahkee.com</a></p>
              <p className="my-2"><a href="tel:09155827610" className="text-gray-600 underline font-medium text-sm">09155827610</a></p>
              <p className="my-2"><a className="underline font-medium text-purple-900 text-[16px] capitalize">Customer Support</a></p>
              <div className="mt-6 grid grid-cols-responsive3 gap-2">
                <div>
                  <h2 className="font-bold capitalize">Customer Support</h2>
                  <p className="text-gray-600">Figma ipsum component variant many layer...</p>
                </div>
                <div>
                  <h2 className="font-bold capitalize">Feedback & Suggestions</h2>
                  <p className="text-gray-600">Figma ipsum component variant many layer...</p>
                </div>
                <div>
                  <h2 className="font-bold capitalize">Media Inquiries</h2>
                  <p className="text-gray-600">Figma ipsum component variant many layer...</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 text-center w-2/5 min-w-[300px] bg-gray-50 p-6 rounded-lg border border-gray-400">
              <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-500">You can reach us anytime</p>
              <form className="mt-3">
                <div className="flex gap-4">
                  <input type="text" placeholder="First Name" className="w-full p-3 border border-gray-400 placeholder:text-gray-600 font-medium rounded-full" />
                  <input type="text" placeholder="Last Name" className="w-full p-3 border border-gray-400 placeholder:text-gray-600 font-medium rounded-full" />
                </div>
                <input type="email" placeholder="Your email address" className="w-full p-3 mt-4 border border-gray-400 placeholder:text-gray-600 font-medium rounded-full" />
                <input type="text" placeholder="Your phone number" className="w-full p-3 mt-4 border border-gray-400 placeholder:text-gray-600 font-medium rounded-full" />
                <textarea
                  placeholder="How can we help?"
                  maxLength={200}
                  className="w-full p-3 mt-4 border rounded-2xl border-gray-400 placeholder:text-gray-600 font-medium"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 mt-4 rounded-full hover:bg-green-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <LocationSection />

        </main>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;
