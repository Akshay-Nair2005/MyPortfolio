import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 ">
      <div className="border-t border-black flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms and Condition</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex gap-3">
          <div className="social-icon">
            <a
              href="https://github.com/Akshay-Nair2005"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.instagram.com/akshayy_nairr/5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/instagram.svg"
                alt="github"
                className="w-6 h-6"
              />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/akshay-a-nair-052b14250/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/linkedin.svg"
                alt="github"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="text-white-500 mt-5 text-center">
        © {new Date().getFullYear()} Akshay Nair. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
