import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Contact = () => {
  const access_key = import.meta.env.VITE_ACCESS_KEY;
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", access_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 font-mono bg-rainbow"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-gray-800 text-center mt-2 sm:mt-10">
          Get In Touch
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5">
          I’d love to hear from you! If you have any questions, comments, or
          feedback, please use the form below.
        </p>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
              name="name"
            />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
              name="email"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Enter your message"
            required
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="message"
          ></textarea>
          <button
            type="submit"
            className="mt-5 py-3 px-6 w-max mx-auto flex items-center justify-between gap-1 text-white rounded-full bg-black hover:bg-gray-900"
          >
            Submit now
            <IoIosArrowRoundForward size={24} />
          </button>
          <p className="mt-5">{result}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
