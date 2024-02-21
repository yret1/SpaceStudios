const Footer = () => {
  return (
    <footer className="min-h-80 flex flex-col justify-center items-center gap-10 p-10 bg-slate-950">
      <h3 className="font-bold text-3xl text-white">SPACESTUDIOS</h3>

      <hr />
      <div className="w-80 flex flex-col xl:flex-row justify-center items-center gap-10">
        <a href="#hero">
          <button className="text-white font-semibold h-10 w-60 p-4 flex justify-center items-center border-2 border-white rounded-md hover:border-white hover:text-black hover:bg-white">
            Back To Start
          </button>
        </a>
        <a href="https://github.com/yret1" target="_blank">
          <button className="text-white font-semibold h-10 w-60 p-4 flex justify-center items-center border-2 border-white rounded-md hover:border-white hover:text-black hover:bg-white">
            Github
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/simon-gustavsson-94b50090/"
          target="_blank"
        >
          <button className="text-white font-semibold h-10 w-60 p-4 flex justify-center items-center border-2 border-white rounded-md hover:border-white hover:text-black hover:bg-white">
            LinkedIn
          </button>
        </a>
        <a href="https://www.yret1.se/" target="_blank">
          <button className="text-white font-semibold h-10 w-60 p-4 flex justify-center items-center border-2 border-white rounded-md hover:border-white hover:text-black hover:bg-white">
            Developer Portfolio
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
