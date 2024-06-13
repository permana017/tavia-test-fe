import chevron from "../assets/chevron-right.svg";
import banner from "../assets/img/banner.webp";

function Banner() {
  return (
    <div className="relative w-auto h-auto">
      <img src={banner} alt="banner" className="scale-105 fill-indigo-100" />
      <div className="absolute w-full h-full top-0 scale-105 banner p-10 justify-between items-center flex opacity-0 hover:opacity-100 duration-150">
        <img
          src={chevron}
          alt="chevron"
          className="w-8 h-8 cursor-pointer  rotate-180"
        />
        <img src={chevron} alt="chevron" className="w-8 h-8 cursor-pointer " />
      </div>
    </div>
  );
}

export default Banner;
