export const JoinUs = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-pink-800 flex items-center justify-between flex-col lg:flex-row">
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
              Join With Us
            </h2>
            <p className="text-xl text-indigo-100 w-3/4">
              Beyond physical health, cosmetics can help to improve our mood,
              enhance our appearance.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-4 sm:flex-row">
            <input
              type="text"
              name="email"
              className="py-2.5 px-5 h-14 w-full md:max-w-md border border-gray-300 bg-pink-500 shadow-sm rounded-full text-lg text-white focus:outline-none placeholder:text-indigo-200"
              placeholder="Enter your phone email"
            />
            <button className="h-14 py-3.5 px-7 bg-white shadow-sm rounded-full text-pink-600 font-semibold">
              Subscribe
            </button>
          </div>
          {/* <a
            href="#"
            className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
          >
            Subcribe
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                stroke="#4F46E5"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a> */}
        </div>
      </div>
    </section>
  );
};
