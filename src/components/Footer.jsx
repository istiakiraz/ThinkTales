import React from 'react';
import { Link } from 'react-router';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import logoTitle from '../assets/titleLogo.png'

const Footer = () => {
    return  <footer  className='footer bg-[#4c637c]/70 p-10 '   >
      <div className="lg:w-10/12 space-y-5  mx-auto footer text-base-content *:text-white sm:footer-horizontal  ">
        <nav>
          <h6 className="footer-title">Categories</h6>
          <ul className=" *:hover:underline space-y-2">
            <Link to="/all-blogs">
              <li className="mb-2">Lifestyle</li>
            </Link>
            <Link to="/all-blogs">
              <li>Technology</li>
            </Link>
            <Link to="/all-blogs">
              <li className="my-2">Health & Wellness</li>
            </Link>
            <Link to="/all-blogs">
              <li className="my-2">Art & Design</li>
            </Link>
            <Link to="/all-blogs">
              <li className="my-2">Music & Culture</li>
            </Link>
            <Link to="/all-blogs">
              <li>Fashion & Style</li>
            </Link>
          </ul>
        </nav>
        <nav>
          <div>
            <h3 className=" footer-title ">Contact Information</h3>
            <div className="space-y-4 text-sm text-white">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg " />
                Address: 123 Digital Road, Dhaka, Bangladesh
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-lg " />
                Phone: +880 1234-567890
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-lg " />
                Email:{" "}
                <a href="mailto:support@novapay.com" className="underline">
                  istiakiraz@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div>
           <img className='w-56' src={logoTitle} alt="logo img" />
            <p className='text-sm text-gray-200'>
             Stay connected with us for the latest stories, <br /> ideas, and insights. We share curated content <br /> that informs, inspires, and empowers. <br /> Thank you for being a part of our journey.
            </p>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="http://x.com/istiakiraz" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="http://youtube.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="http://facebook.com/istiak.iraz" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14598.796932347963!2d90.44081905902821!3d23.829291952152886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1749998277275!5m2!1sen!2sbd" width="350" className='mt-2 rounded-xl' height="200" style={{border:0}}  loading="lazy" referrerPolicy='no-referrer-when-downgrade'></iframe>
        </nav>
      </div>
    </footer>
};

export default Footer;