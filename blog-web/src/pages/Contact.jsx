import React from "react";

const ContactPage = () => {
  return (
    <>
    <div className="w-full h-[300px] mt-14  text-center text-3xl md:text-5xl font-extrabold ">
      <h1 className="pt-32 ">contact us</h1>
    </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 capitalize mb-6">
          Get in touch
        </h2>
        <header className="mb-12 text-center">
       
        <p className="text-lg text-gray-600">We would love to hear from you. Please fill out the form below and we will get in touch with you shortly.</p>
      </header>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          {/* Contact Information */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <p className="text-gray-700 mb-2">
                Feel free to reach out to us via email or phone. We are here to
                assist you with any questions you may have.
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> Sikhwethamulanga@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> (+27) 721-962-692
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Address:</strong>
                <br />
                71 devilliers St
                <br />
                Turffontein, Johannesburg
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Office
              </h3>
              <iframe
                className="w-full rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092435!2d144.95373631568093!3d-37.81627974202182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d51c0d3eae7b!2sjohanesburg!5e0!3m2!1sen!2sau!4v1584848462344!5m2!1sen!2sau"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps Location"
              ></iframe>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0H1.326A1.325 1.325 0 000 1.326v21.348A1.325 1.325 0 001.326 24h11.494v-9.293H9.821v-3.622h2.999V8.414c0-3.007 1.792-4.654 4.533-4.654 1.312 0 2.686.235 2.686.235v2.96h-1.512c-1.49 0-1.953.923-1.953 1.868v2.14h3.316l-.53 3.622h-2.786V24h5.467A1.326 1.326 0 0024 22.674V1.326A1.326 1.326 0 0022.675 0z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.954 4.569a10.004 10.004 0 01-2.825.775 4.94 4.94 0 002.163-2.723 9.88 9.88 0 01-3.127 1.184 4.927 4.927 0 00-8.39 4.482 13.978 13.978 0 01-10.148-5.145 4.822 4.822 0 00-.665 2.475c0 1.708.869 3.215 2.188 4.099a4.903 4.903 0 01-2.228-.615v.062a4.929 4.929 0 003.946 4.827 4.935 4.935 0 01-2.224.084 4.927 4.927 0 004.604 3.416 9.869 9.869 0 01-6.102 2.104c-.395 0-.787-.023-1.175-.068a13.942 13.942 0 007.557 2.213c9.057 0 14.007-7.496 14.007-13.986 0-.215-.005-.428-.014-.64a10.014 10.014 0 002.459-2.548l.002-.003z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  className="text-pink-500 hover:text-pink-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.055 1.872.25 2.31.415a4.63 4.63 0 011.675 1.075 4.63 4.63 0 011.075 1.675c.165.438.36 1.104.415 2.31.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.206-.25 1.872-.415 2.31a4.63 4.63 0 01-1.075 1.675 4.63 4.63 0 01-1.675 1.075c-.438.165-1.104.36-2.31.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.055-1.872-.25-2.31-.415a4.63 4.63 0 01-1.675-1.075 4.63 4.63 0 01-1.075-1.675c-.165-.438-.36-1.104-.415-2.31-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.055-1.206.25-1.872.415-2.31a4.63 4.63 0 011.075-1.675 4.63 4.63 0 011.675-1.075c.438-.165 1.104-.36 2.31-.415 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.012 7.052.07 5.73.13 4.89.304 4.147.599a6.327 6.327 0 00-2.258 1.513A6.327 6.327 0 00.599 4.147c-.295.743-.469 1.583-.529 2.905C0 8.332.012 8.741.07 10.021.13 11.33.304 12.17.599 12.913a6.327 6.327 0 001.513 2.258 6.327 6.327 0 002.258 1.513c.743.295 1.583.469 2.905.529 1.28.058 1.689.07 4.948.07s3.667-.012 4.948-.07c1.322-.06 2.162-.234 2.905-.529a6.327 6.327 0 002.258-1.513 6.327 6.327 0 001.513-2.258c.295-.743.469-1.583.529-2.905.058-1.28.07-1.689.07-4.948s-.012-3.667-.07-4.948c-.06-1.322-.234-2.162-.529-2.905a6.327 6.327 0 00-1.513-2.258 6.327 6.327 0 00-2.258-1.513c-.743-.295-1.583-.469-2.905-.529C15.668.012 15.259 0 12 0zm0 5.838a6.163 6.163 0 00-6.162 6.162 6.163 6.163 0 006.162 6.162 6.163 6.163 0 006.162-6.162A6.163 6.163 0 0012 5.838zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
