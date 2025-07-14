import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c8b09dff-d4b2-4f1d-a2c3-499809660d65");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setLoading(false);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="c-space" id="contact">
      <div className="relative min-h-screen flex items-center justify-center ">
        <div className="contact-container relative z-10  rounded-xl  md:p-16 max-w-3xl w-full grid-container">
          <h3 className="head-text text-white text-3xl md:text-4xl font-bold mb-6">
            Let's Connect
          </h3>

          <form onSubmit={onSubmit} className="flex flex-col space-y-7">
            <label className="flex flex-col space-y-2">
              <span className="field-label text-white text-sm font-medium">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                required
                className="field-input bg-white/90 text-black px-4 py-3 rounded-md focus:outline-none"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="flex flex-col space-y-2">
              <span className="field-label text-white text-sm font-medium">
                Email Address
              </span>
              <input
                type="email"
                name="email"
                required
                className="field-input bg-white/90 text-black px-4 py-3 rounded-md focus:outline-none"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="flex flex-col space-y-2">
              <span className="field-label text-white text-sm font-medium">
                Your Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="field-input bg-white/90 text-black px-4 py-3 rounded-md focus:outline-none"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn " type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="w-5 h-5"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
