function Home() {
  return (
    <>
      {/* main */}
      <div className="px-10 box-border snap-y snap-mandatory h-[calc(100vh-64px)] overflow-hidden relative mb-16">
        <div className="video-bg w-full h-full overflow-hidden relative">
          <video
            className="w-full h-full brightness-[25%]"
            autoPlay
            loop
            muted
          >
            <source
              src="https://propage.com/imports/video/video3.mp4"
              type="video/mp4"
            />
          </video>
          <img
            src="https://propage.com/imports/images/ellipses-m-n.svg"
            className="absolute scale-100 left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 opacity-50"
            alt=""
          />
          <img
            src="https://propage.com/imports/images/marketing-digital.svg"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
        </div>
      </div>
      {/* Intro */}
      <div className="snap-start h-[calc(100vh-64px)] bg-zinc-800 flex items-center justify-center p-20">
        <div className="w-1/2 flex-1 flex items-center justify-center">
          <img
            src="https://propage.com/imports/images/tilt-plus2.svg"
            className="w-3/4"
            alt=""
          />
        </div>
        <div className="w-1/2 flex-1">
          <p className="inter-300 text-yellow-400 text-2xl w-1/2 mb-2">
            Selling and recruiting{" "}
            <span className="font-bold">more & better</span> is what you deserve
            as a client.
          </p>
          <p className="inter-300 text-gray-50 w-1/2">
            Making brands stronger and more differentiated, building more
            performance-accountable brands, maximizing user experience and
            customer journeys, and developing websites that improve talent
            recruitment or convert more leads into sales are part of our daily
            business.
          </p>
        </div>
      </div>
      {/* action */}
      <div className="snap-start h-[calc(100vh-64px)] bg-zinc-950">
        <div className="relative">
          <p className="text-10xl text-zinc-800 opacity-50 inter-900 absolute -top-28 left-1/2 -translate-x-1/2 whitespace-nowrap">
            The AD Agency
          </p>
        </div>
        <div className="flex items-center justify-start h-full pt-32 flex-col gap-5">
          <p className="shrikhand-regular w-1/2  text-gray-50 text-3xl leading-normal z-10 text-center">
            What if Propage was the best change agent for your business? The one
            to provide you with the most tangible results? The way for you to
            sell and recruit <br /> <br />
            <span className="text-yellow-500 text-5xl">More & better?</span>
          </p>
          <div className="action flex gap-5 pt-8">
            <button className="rounded-full bg-yellow-500 p-2 px-10 border border-yellow-500 transition-all duration-500 ease-out hover:border hover:border-yellow-500 hover:bg-transparent hover:text-gray-50">
              <p>Discover the Program</p>
              <p className="font-bold">Sell More & Better</p>
            </button>
            <button className="rounded-full bg-yellow-500 p-2 px-10 border border-yellow-500 transition-all duration-500 ease-out hover:border hover:border-yellow-500 hover:bg-transparent hover:text-gray-50">
              <p>Discover the Program</p>
              <p className="font-bold">Recruit More & Better</p>
            </button>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="snap-start h-[calc(100vh-64px)] bg-services bg-center bg-repeat bg-cover bg-fixed p-16 pt-24 flex flex-col justify-center gap-10">
        <div className="flex items-center justify-start text-gray-50 gap-5">
          <p className="text-9xl inter-700">Services</p>
          <p className="w-1/2 inter-300">
            We establish tight links between strategy and execution to provide
            you with the big picture and ensure we are in line with your
            business objectives.
          </p>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <div className="w-52 aspect-square border border-white text-gray-50 rounded-full inter-300 text-2xl flex items-center justify-center text-center cursor-pointer hover:bg-white hover:text-black m-0 p-0 transition-all duration-500 ease-out">
            Branding and desing
          </div>
          <div className="w-52 aspect-square border border-white text-gray-50 rounded-full inter-300 text-2xl flex items-center justify-center text-center cursor-pointer hover:bg-white hover:text-black m-0 p-0 transition-all duration-500 ease-out">
            Branding and desing
          </div>
          <div className="w-52 aspect-square border border-white text-gray-50 rounded-full inter-300 text-2xl flex items-center justify-center text-center cursor-pointer hover:bg-white hover:text-black m-0 p-0 transition-all duration-500 ease-out">
            Branding and desing
          </div>
        </div>
      </div>
      {/* Recent Projects */}
      <div className="snap-start h-[calc(100vh-64px)] bg-gray-100 relative p-16">
        <div className="absolute text-white top-0 left-0 text-15xl whitespace-nowrap inter-900 z-0">
          Our Projects
        </div>
        <p className="inter-900 text-6xl z-10 relative">Recent Projects</p>
        <div className="flex relative z-20">
          <div className="card flex-1 cursor-pointer">
            <div className="card-img aspect-square w-72 overflow-hidden">
              <img
                src="https://propage.com/imports/images/realisations/fournier/thumbnail.jpg"
                className="w-full h-full hover:scale-95 transition-all duration-500 ease-out hover:grayscale"
                alt="Thumbnail"
              />
            </div>
            <div className="card-content w-full">
              <p className="text-2xl w-full inter-600 text-gray-900 uppercase">
                Fournier
              </p>
              <p className="w-full inter-400 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut
                placeat eveniet cum doloremque. Natus magni ipsa odit.
                Perspiciatis molestias nesciunt eum at perferendis ipsum
                suscipit, sit quidem similique praesentium. Molestiae natus
              </p>
            </div>
          </div>
          <div className="card flex-1 cursor-pointer">
            <div className="card-img aspect-square w-72 overflow-hidden">
              <img
                src="https://propage.com/imports/images/realisations/fournier/thumbnail.jpg"
                className="w-full h-full hover:scale-95 transition-all duration-500 ease-out hover:grayscale"
                alt="Thumbnail"
              />
            </div>
            <div className="card-content w-full">
              <p className="text-2xl w-full inter-600 text-gray-900 uppercase">
                Fournier
              </p>
              <p className="w-full inter-400 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut
                placeat eveniet cum doloremque. Natus magni ipsa odit.
                Perspiciatis molestias nesciunt eum at perferendis ipsum
                suscipit, sit quidem similique praesentium. Molestiae natus
              </p>
            </div>
          </div>
          <div className="card flex-1 cursor-pointer">
            <div className="card-img aspect-square w-72 overflow-hidden">
              <img
                src="https://propage.com/imports/images/realisations/fournier/thumbnail.jpg"
                className="w-full h-full hover:scale-95 transition-all duration-500 ease-out hover:grayscale"
                alt="Thumbnail"
              />
            </div>
            <div className="card-content w-full">
              <p className="text-2xl w-full inter-600 text-gray-900 uppercase">
                Fournier
              </p>
              <p className="w-full inter-400 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut
                placeat eveniet cum doloremque. Natus magni ipsa odit.
                Perspiciatis molestias nesciunt eum at perferendis ipsum
                suscipit, sit quidem similique praesentium. Molestiae natus
              </p>
            </div>
          </div>
          <div className="card flex-1 cursor-pointer">
            <div className="card-img aspect-square w-72 overflow-hidden">
              <img
                src="https://propage.com/imports/images/realisations/fournier/thumbnail.jpg"
                className="w-full h-full hover:scale-95 transition-all duration-500 ease-out hover:grayscale"
                alt="Thumbnail"
              />
            </div>
            <div className="card-content w-full">
              <p className="text-2xl w-full inter-600 text-gray-900 uppercase">
                Fournier
              </p>
              <p className="w-full inter-400 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut
                placeat eveniet cum doloremque. Natus magni ipsa odit.
                Perspiciatis molestias nesciunt eum at perferendis ipsum
                suscipit, sit quidem similique praesentium. Molestiae natus
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="snap-start h-[calc(100vh-64px)] relative">
        <div className="relative">
          <p className="shrikhand-regular text-[550px] text-yellow-500 m-0 p-0">
            team
          </p>
          <div className="flex flex-column">
            <img
              src="https://propage.com/imports/images/equipe.png"
              className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 scale-120"
              alt=""
            />
            <button className="absolute -translate-x-1/2 -translate-y-1/2 top-3/4 left-1/2  bg-purple-900 border border-purple-900 hover:border-yellow-500 hover:bg-yellow-500 transition-all duration-500 ease-out p-3 rounded-full px-16 block mx-auto mb-10 font-bold text-white">
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
