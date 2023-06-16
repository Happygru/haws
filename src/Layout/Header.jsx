import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="w-full h-[104px] bg-[--site-main-color1] px-[35px] pt-[10px] flex items-center justify-between">
      {/* Logo */}
      <div>
        <img src="logo.svg" alt="logo" />
      </div>
      {/* Navbar */}
      <div className="flex gap-6 xl:gap-12 xl:pr-[60px] max-[1011px]:hidden">
        <Link 
          className="font-semibold text-white cursor-pointer font-default"
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Lifestyle Hospitality
        </Link>
        <Link 
          className="font-semibold text-white cursor-pointer font-default"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          What we do?
        </Link>
        <Link 
          className="font-semibold text-white cursor-pointer font-default"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Get comfy
        </Link>
        <Link 
          className="font-semibold text-white cursor-pointer font-default"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Work, Meetings & Party time
        </Link>
        <Link 
          className="font-semibold text-white cursor-pointer font-default"
          to="section5"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Eat & Drink
        </Link>
        <Link 
          className="font-semibold text-white cursor-pointer font-default"
          to="section6"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          The HAWS Pipeline
        </Link>
      </div>
      <div className="min-[1010px]:hidden">
        {/* <button></button> */}
      </div>
    </div>
  );
};

export default Header;
