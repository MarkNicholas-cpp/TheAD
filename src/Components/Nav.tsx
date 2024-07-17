function Nav() {
  return (
    <div className="px-10 py-6 flex items-center justify-between fixed w-full bg-white z-50">
      <div className="logo w-36">
        <img
          src="/src/assets/Logo.svg"
          className="w-full h-full"
          alt="Image not found"
        />
      </div>
      <nav className="flex items-center gap-3">
        <a
          href="/Home"
          className="inter-700 text-gray-500 hover:text-gray-900 transition-all ease-in relative hover:after:w-full text-xl"
        >
          Home
        </a>
        <a
          href="/About"
          className="inter-700 text-gray-500 hover:text-gray-900 transition-all ease-in relative hover:after:w-full text-xl"
        >
          About us
        </a>
      </nav>
    </div>
  );
}

export default Nav;
