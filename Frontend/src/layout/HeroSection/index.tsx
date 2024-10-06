


const index = () => {
  return (
    <>

<section className="py-20">
      <div className="container mx-auto mt-[2rem] px-4">
        <div className="text-center">
          <h2 className="text-[1.8rem] md:text-4xl font-bold text-gray-800 mb-8 font-googlefont">
            Find and become a <br /> <span className="text-primary-color">professional</span> with passion
          </h2>
          <div className="flex justify-center items-center max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row w-full">
              <input
                type="text"
                placeholder="search for jobs..."
                className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 sm:border-r-0 focus:outline-none text-md mb-2 sm:mb-0"
              />
              <button  className="w-full sm:w-1/4 bg-primary-color text-white font-semibold py-2 px-6 hover:bg-blue-600 transition duration-300 text-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default index