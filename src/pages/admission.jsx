import React from 'react';

const Admissions = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Admissions</h1>
      <p className="max-w-3xl mx-auto mb-8 text-center text-lg">
        {`Please fill out the admission form below or contact the school office for more information.`}
      </p>
      <div className="max-w-lg mx-auto">
        <form
          action="https://example.com/admission-form-submit"
          method="POST"
          className="space-y-4 bg-indigo-50 p-6 rounded-md shadow-md"
        >
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-semibold mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admissions;
