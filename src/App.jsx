import Header from "./Layout/Header";
import WedoItem from "./Components/WedoItem";
import ScrollToTop from "react-scroll-to-top";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function App() {
  var settings = {
    dots: true,
    speed: 500,
    dotsClass: "slick-dots template-dots",
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 986,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="relative w-full bg-[url('assets/hero_background.svg')] h-[45vw] min-h-[400px] bg-cover bg-center bg-no-repeat divide-y flex flex-col">
        <div className="w-full h-1/2 md:h-2/3">
          <div className="container relative w-full h-full max-w-screen-xl px-8 m-auto">
            <p className="text-[40px] md:text-[50px] lg:text-[70px] xl:text-[100px] text-white font-default uppercase font-black leading-none absolute bottom-4">
              Lifestyle
              <br /> Hospitality
            </p>
          </div>
        </div>
        <div className="w-full h-1/2 md:h-1/3">
          <div className="container relative w-full h-full max-w-screen-xl px-8 m-auto">
            <p className="text-[25px] text-white font-default pt-8">
              Reimagining the hospitality space
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div
        className="flex flex-col w-full gap-8 py-[60px] bg-white"
        id="section1"
      >
        <div className="w-full text-center text-[--site-main-color1] text-[19px] font-default">
          <p>We are open minded and creative.</p>
          <p>
            We turn old houses into into hotels and residences, reimagine old
          </p>
          <p>
            buildings that have interesting stories, and breathe life into new
            ones.
          </p>
        </div>
        <div className="text-[--site-main-color2] text-[15px] font-default m-auto flex flex-col gap-4">
          <p className="m-auto text-center max-w-[420px]">
            Our hotels are inspired by the streets and scenes that surround
            them, and each one is an authentic reflection of its neighbourhood.
          </p>
          <p className="text-center">
            It all started with Lisbon, at Rua Maria in 2022.
          </p>
          <p className="text-center m-auto max-w-[420px]">
            Budapest will follow in late 2023. More projects are coming in
            Marrakech, Prague, Riyadh and Jeddah.
          </p>
          {/* <p className="m-auto text-center">
            More new buildings are coming in Rome, Budapest, Prague, Riyadh and
            Sanna.
          </p> */}
        </div>
        <div className="w-full text-center">
          <img src="tree.svg" className="m-auto" alt="" />
        </div>
      </div>

      {/* What We Do Section */}
      <div
        className="bg-[url('assets/hero_pattern.svg')] w-full pt-[60px]"
        id="section2"
      >
        <div className="flex flex-col items-center justify-center w-full max-w-3xl gap-8 m-auto font-default">
          <p className="uppercase text-[--site-main-color1] font-black text-[35px]">
            what we do?
          </p>
          <p className="text-[--site-main-color2] font-semibold text-[27px]">
            More than one just bed for the night
          </p>
          <div className="flex flex-col items-center justify-center gap-4 text-[--site-main-color2] text-[19px]">
            <p className="text-center">
              We provide a home base for misfits, business travelers and digital
              nomads alike.
            </p>
            <p className="text-center">
              Accomodation made with love for those who have long hoped for an
              anternative place to stay, work, play and love while getting wired
              into the local community.
            </p>
          </div>
        </div>
        <div className="grid w-full max-w-[1000px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 m-auto mt-12 px-8">
          <div className="col-span-1">
            <WedoItem
              icon={<img src="home.svg" alt="home" />}
              title="connected to our neighbourhood"
              text="Immerse in our surroundings and community, from local art and best of collaborations, to our programme of monthly unique events."
            />
          </div>
          <div className="col-span-1">
            <WedoItem
              icon={<img src="bed.svg" alt="bed" />}
              title="our design"
              text="All our spaces are vibrant, cosy, welcoming, and inspired by our local neighbourhoods and communities."
            />
          </div>
          <div className="col-span-1">
            <WedoItem
              icon={<img src="menu.svg" alt="bed" />}
              title="food & drinks and parties"
              text="Good vibes and gatherings are a Haws thing. We're all about creating a settings where locals and visitors can come togegher."
            />
          </div>
          <div className="col-span-1">
            <WedoItem
              icon={<img src="shopbag.svg" alt="bed" />}
              title="haws shop"
              text="A selection of the best local products that you can order directly to your room or residence. Furniture and digital art are part of our essence."
            />
          </div>
          <div className="col-span-1">
            <WedoItem
              icon={<img src="computerdesk.svg" alt="bed" />}
              title="haws work"
              text="Our work spaces are designed to offer teams and individuals everything you need to connect, collaborate and create."
            />
          </div>
          <div className="col-span-1">
            <WedoItem
              icon={<img src="hotel.svg" alt="bed" />}
              title="hotel & residences"
              text="Offering long and short term guests the ultimate experience, creating a welcoming and lively vibe for people to come together, connect and kick back."
            />
          </div>
        </div>
        <div className="py-[70px] bg-[url('assets/pattern_background.svg')] flex items-center justify-center px-10 lg:px-0 w-full">
          <div className="hidden w-2/4 grow-0 lg:block">
            <hr />
          </div>
          <div className="px-12 py-8 border max-w-[800px] w-1/2 flex flex-col gap-8 grow lg:min-w-[800px]">
            <p className="text-white text-center text-[27px] font-bold">
              Open to the World around us
            </p>
            <div className="w-full text-center text-white text-[23px]">
              <p>Our doors are always open to everybody.</p>
              <p>With comfy seats, cosy corners and food and drink on tap.</p>
              <p>
                Spaces designed for guests and locals alike to immerse
                themselves in the neighborhood.
              </p>
            </div>
          </div>
          <div className="hidden w-2/4 grow-0 lg:block">
            <hr />
          </div>
        </div>
      </div>

      {/* Get Comfy */}
      <div
        className="grid w-full grid-cols-1 lg:grid-cols-2 bg-[url('assets/hotel_background.svg')] bg-cover bg-center lg:bg-none"
        id="section3"
      >
        <div className="col-span-1 py-[60px] flex pb-[120px] px-[30px] lg:px-0 lg:pr-[10%] justify-end bg-white/60 backdrop-blur-md">
          <div className="flex flex-col w-full gap-8 lg:w-3/4">
            <div className="w-full py-4">
              <p className="text-[35px] text-[--site-main-color1] font-default font-bold">
                GET COMFY
              </p>
              <p className="text-[35px] text-[--site-main-color1] font-default">
                HOTEL & RESIDENCES
              </p>
            </div>
            <p className="text-[--site-main-color2] font-semibold text-[27px] py-4">
              Cosy & Roomy
            </p>
            <div className="text-[--site-main-color2] text-[19px] flex flex-col gap-8">
              <p>
                We challenge conventions by incorporating multi-functionality
                and creativity into our designs.
              </p>
              <p>
                From doubles, twins and quads to apartments and lofts that
                easily convert into offices.
              </p>
              <p>
                Offering medium and short term stays alike to our guests while
                creating a welcoming and lively vibe for people to come
                together, connect and kick back.
              </p>
            </div>
            <p className="text-[--site-main-color2] text-[15px] font-sans">
              We create home offices hybrid with the services of a hotel and the
              social buzz of a thriving neighborhood. Haws is designed for
              people living and working in a city for a few days to several
              months and offers teams and individuals everything they need to
              connect, collaborate and create.
            </p>
          </div>
        </div>
        <div className="col-span-1 bg-[url('assets/hotel_background.svg')] bg-cover bg-center hidden lg:block"></div>
      </div>

      {/* Work, Meeting */}
      <div
        className="grid grid-cols-1 bg-[url('assets/workmeeting.svg')] divide-x-0 lg:divide-x-2 lg:grid-cols-3"
        id="section4"
      >
        <div className="grid col-span-2 grid-rows-1 divide-y-2 lg:grid-rows-3">
          <div className="row-span-2 pt-[60px] flex justify-end pb-0 lg:pb-[60px]">
            <div className="w-full px-12 lg:w-5/6 lg:px-0">
              <p className="text-[35px] font-black uppercase text-white font-default">
                work, meetings <p>& party time</p>
              </p>
              <p className="text-[35px] uppercase text-white font-default">
                Events & Coworking spaces
              </p>
            </div>
          </div>
          <div className="hidden row-span-1 lg:block" />
        </div>
        <div className="flex flex-col justify-between w-full h-full col-span-1 p-12">
          <div>
            <p className="text-[35px] font-black text-white">Pitch?</p>
            <p className="text-[35px] font-black text-white">Presentation?</p>
            <p className="text-[35px] font-black text-white">Party?</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[30px] font-default text-white">
              We've got you covered!
            </p>
            <p className="text-[25px] font-default text-white">
              We believe that the future of work needs human connection
            </p>
          </div>
        </div>
      </div>

      {/* Eat & Drink */}
      <div
        className="grid w-full grid-cols-1 lg:grid-cols-2 bg-[url('assets/hotel_background.svg')] bg-cover bg-center lg:bg-none"
        id="section5"
      >
        <div className="col-span-1 bg-[url('assets/eat_background.svg')] bg-cover bg-center hidden lg:block"></div>
        <div className="col-span-1 py-[60px] flex pb-[120px] px-[30px] lg:px-0 lg:pr-[10%] justify-end bg-white/60 backdrop-blur-md">
          <div className="flex flex-col w-full gap-8 lg:w-3/4">
            <div className="w-full py-4">
              <p className="text-[35px] text-[--site-main-color1] font-default font-bold uppercase">
                eat & drink
              </p>
              <p className="text-[35px] text-[--site-main-color1] font-default">
                bars & restaurants
              </p>
            </div>
            <p className="text-[--site-main-color2] font-semibold text-[27px] py-4">
              Cosy & Roomy
            </p>
            <div className="text-[--site-main-color2] text-[19px] flex flex-col gap-8">
              <p>Good vives and gatherings are a Haws thing.</p>
            </div>
            <p className="text-[--site-main-color2] text-[15px] font-sans">
              We don't just offer a place to sleep. We're all about creating a
              setting where locals and visitors can come together to share good,
              homemade food, delicious cocktails and the beat of live music
              sessions.
            </p>
            <p className="text-[--site-main-color2] text-[15px] font-sans">
              Dine at our generous communal tables, lounge at the bar or take in
              the view from one of our rooftops.
            </p>
          </div>
        </div>
      </div>

      {/* haws pipeline */}
      <div
        className="w-full py-[50px] bg-[rgba(241,228,195,0.2)]"
        id="section6"
      >
        <p className="text-[--site-main-color1] font-default font-bold uppercase pb-[30px] text-[35px] text-center">
          the haws pipeline
        </p>
        <div className="w-full">
          <img src="map.svg" className="m-auto" alt="" />
        </div>
        <div className="w-full pl-[100px]">
          <div className="flex justify-between w-full mt-12 overflow-hidden cursor-grab">
            <Slider {...settings} className="w-full mt-[10px] ml-[10px]">
              <div className="border-t w-1/4 border-[--site-main-color1] mt-12 pt-12 relative">
                <div className="absolute top-[-67px] left-[-10px]">
                  <p className="text-[--site-main-color1] text-2xl font-default mb-4 pl-2">
                    2023
                  </p>
                  <div className="border border-[--site-main-color1] p-2 rounded-full w-max">
                    <div className="bg-[--site-main-color1] rounded-full w-[20px] h-[20px]"></div>
                  </div>
                </div>
                <div className="w-3/4 text-[--site-main-color2] text-[15px]">
                  <p>
                    2023 marks the beggining of Haws in the heart of Lisbon, Rua
                    Maria.
                  </p>
                  {/* <p>
                    Second opening is under works at Rua dos Fanqueiros in Lisbon.
                  </p> */}
                </div>
              </div>

              <div className="border-t w-1/4 border-[--site-main-color1] mt-12 pt-12 relative">
                <div className="absolute top-[-67px] left-[-10px]">
                  <p className="text-[--site-main-color3] text-2xl font-default mb-4 pl-2">
                    2024
                  </p>
                  <div className="border border-[--site-main-color3] p-2 rounded-full w-max">
                    <div className="bg-[--site-main-color3] rounded-full w-[20px] h-[20px]"></div>
                  </div>
                </div>
                <div className="w-3/4 text-[--site-main-color2] text-[15px]">
                  <p>
                    News locations are opening in Barcelona, Marrakech and
                    Budapest.
                  </p>
                </div>
              </div>

              <div className="border-t w-1/4 border-[--site-main-color1] mt-12 pt-12 relative">
                <div className="absolute top-[-67px] left-[-10px]">
                  <p className="text-[--site-main-color2] text-2xl font-default mb-4 pl-2">
                    2025
                  </p>
                  <div className="border border-[--site-main-color2] p-2 rounded-full w-max">
                    <div className="bg-[--site-main-color2] rounded-full w-[20px] h-[20px]"></div>
                  </div>
                </div>
                <div className="w-3/4 text-[--site-main-color2] text-[15px]">
                  <p>
                    We are moving to Saudi Arabia with two projects Riyadh and
                    Jeddah.
                  </p>
                </div>
              </div>

              <div className="border-t w-1/4 border-[--site-main-color1] mt-12 pt-12 relative">
                <div className="absolute top-[-67px] left-[-10px]">
                  <p className="text-[#515151] text-2xl font-default mb-4 pl-2">
                    2026
                  </p>
                  <div className="border border-[#515151] p-2 rounded-full w-max">
                    <div className="bg-[#515151] rounded-full w-[20px] h-[20px]"></div>
                  </div>
                </div>
                <div className="w-3/4 text-[--site-main-color2] text-[15px]">
                  <p>
                    We will continue our expansion, aiming at 10+ locations by
                    the end of 2026.
                  </p>
                </div>
              </div>

              <div className="border-t w-1/4 border-[--site-main-color1] mt-12 pt-12 relative">
                <div className="absolute top-[-67px] left-[-10px]">
                  <p className="text-[#F29678] text-2xl font-default mb-4 pl-2">
                    2026 Onwards
                  </p>
                  <div className="border border-[#F29678] p-2 rounded-full w-max">
                    <div className="bg-[#F29678] rounded-full w-[20px] h-[20px]"></div>
                  </div>
                </div>
                <div className="w-3/4 text-[--site-main-color2] text-[15px]">
                  <p>
                    Cities of our interest include: San Sebastian, Valencia,
                    Malaga, Rome, Florence, Milano, London, Prague, Berlin,
                    Vienna, Paris.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* haws development */}
      <div className="w-full py-[50px] pb-[200px]">
        <p className="text-[--site-main-color1] font-default font-bold uppercase pb-[30px] text-[35px] text-center">
          haws development
        </p>
        <p className="pb-8 text-center text-[--site-main-color1] text-[17px]">
          What are we looking for?
        </p>
        <div className="flex flex-col w-full gap-6">
          <p className="max-w-[500px] text-[15px] text-[--site-main-color2] text-center m-auto">
            We are flexible to closing fixed long-term leases
            contracts,management agreements or any other viable options.
          </p>
          <p className="text-center text-[15px] text-[--site-main-color2]">
            Whatever the scenario, we adapt to it.
          </p>
        </div>
        <div className="w-full max-w-[1000px] m-auto md:flex justify-between mt-12 gap-8 px-4">
          <div className="w-1/2 m-auto mt-4 md:w-1/3">
            <img src="radius_img3.svg" className="m-auto" alt="" />
            <p className="text-center text-[--site-main-color2] text-[17px] mt-4">
              Conversations of existing offices or hotels
            </p>
          </div>
          <div className="w-1/2 m-auto mt-4 md:w-1/3">
            <img src="radius_img2.svg" className="m-auto" alt="" />
            <p className="text-[--site-main-color2] text-[17px] text-center mt-4">
              New buildings or clearable sites
            </p>
          </div>
          <div className="w-1/2 m-auto mt-4 md:w-1/3">
            <img src="radius_img1.svg" className="m-auto" alt="" />
            <p className="text-[--site-main-color2] text-[17px] text-center mt-4">
              Mixed use development
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <img src="footer_nav.png" className="w-full" alt="" />
      </div>

      <div className="w-full bg-[--site-main-color2] px-[135px] py-[40px] flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src="logo.svg" alt="logo" />
        </div>
        {/* Navbar */}
        <div className="flex xl:pr-[60px] max-[1011px]:hidden divide-x">
          <span className="px-2 text-white font-default text-[15px]">
            Cookies Policy
          </span>
          <span className="px-2 text-white font-default text-[15px]">
            Privacy Policy
          </span>
          <span className="px-2 text-white font-default text-[15px]">
            Legal Notice
          </span>
        </div>
      </div>
      <ScrollToTop smooth="true" className="flex items-center justify-center" />
      <div className="w-full h-[40px] bg-[#164676]"></div>
    </>
  );
}

export default App;
