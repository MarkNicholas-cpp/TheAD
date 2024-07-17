function Footer() {
  return (
    <footer className="flex p-20 bg-black gap-5 text-white">
      <div className="mr-10">
        <img src="/src/assets/Logo-light.svg" alt="logo" className="w-36" />
      </div>
      <div className="elements m-5 border-gray-700 h-40">
        <p className="text-lg font-bold">difference</p>
        <ul className="indent-4">
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">sell </li>
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">recruit </li>
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">portfolio</li>
        </ul>
      </div>
      <div className="elements m-5 border-gray-700 h-40">
        <p className="text-sm font-bold">Services</p>
        <ul className="indent-4">
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">
            marketing plan{" "}
          </li>
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">personas</li>
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">messaging</li>
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">kpis</li>
        </ul>
      </div>
      <div className="elements m-5 border-gray-700 h-40">
        <ul className="indent-4">
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">
            branding and design
          </li>
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">website</li>
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">
            product launch
          </li>
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">other tools</li>
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">
            visibility on google
          </li>
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">
            keyword purchases
          </li>
          <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">social media</li>
        </ul>
        
      </div>
      <div className="elements m-5 border-gray-700 h-40">
          <p className="text-lg font-bold">You </p>
          <ul className="indent-4">
            <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">president </li>
            <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">marketing director</li>
            <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">sales</li>
            <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">director rh</li>
          </ul>
        </div>  
      <div className="elements m-5 border-gray-700 h-40">
          <p className="text-lg font-bold">Us </p>
          <ul className="indent-4">
            <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">agency</li>
            <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">team</li>
            <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">clients</li>
            <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">affiliations</li>
            <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">careers</li>
            <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">news</li>
            <li className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer font-semibold">contact us</li>
            <li className="flex items-center my-3">
                <button className="w-12 h-12 bg-yellow-500 rounded-md ml-4 text-2xl flex items-center justify-center font-bold">f</button>
                <button className="w-12 h-12 bg-yellow-500 rounded-md ml-4 text-2xl flex items-center justify-center font-bold">w</button>
            </li>
          </ul>
        </div> 
         <div className="elements m-5 border-gray-700 h-40">
            <button className="bg-yellow-500 py-2 uppercase text-sm px-10 rounded-full border border-yellow-500 hover:bg-transparent hover:text-yellow-500 hoverr-pointer:border hover:border-yellow-500 transition-all duration-500 ease-out">Contact</button>
         </div>
    </footer>
  );
}








  
export default Footer;
