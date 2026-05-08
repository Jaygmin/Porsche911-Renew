import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import Header from "./components/header";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import Porsche911 from "@/assets/911.png";
import PorscheBackground from "@/assets/Thrid.png";
import GT3RS from "@/assets/GT3RS.png";
import Boxster from "@/assets/Boxster.png";
import Carrera from "@/assets/Carrera.png";
import Background1 from "@/assets/background1.png";
import Background2 from "@/assets/background2.png";
import Background3 from "@/assets/background3.png";
import Logo911 from "@/assets/911.svg";
import Facebook from "@/assets/Facebook.svg";
import Instagram from "@/assets/Instagram.svg";
import Pinterest from "@/assets/Pinterest.svg";
import Youtube from "@/assets/Youtube.svg";
import X from "@/assets/X.svg";
import LinkedIn from "@/assets/LinkedIn.svg";

const buyNowBase =
  "h-9 w-32 cursor-pointer rounded-none border-2 bg-transparent text-sm font-medium hover:bg-transparent lg:h-12.5 lg:w-45 lg:text-[22px]";

function App() {
  const onClickSecondContainer = () => {
    document
      .getElementById("second-container")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Toaster position="top-center" />
      <div className="flex h-dvh w-full flex-col">
        <Header />
        <div className="flex flex-1 flex-col items-center justify-center bg-[url(/src/assets/Background.png)] bg-cover bg-center bg-no-repeat sm:block">
          <div className="flex flex-col items-center space-y-2 text-center sm:mt-30 sm:ml-15 sm:items-start sm:text-left">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-5xl">
              Driven to Perfection.
            </h1>
            <h3 className="text-2xl font-light text-white sm:text-4xl md:text-3xl">
              Speed, Precision, Legacy
            </h3>
          </div>
          <div className="right-1/2 left-1/2 mt-8 flex items-center justify-center sm:absolute sm:bottom-10 sm:mt-0">
            <Button
              className="cursor-pointer rounded-none border-2 bg-transparent px-8 py-2.5 font-normal tracking-tight text-white"
              variant="outline"
              onClick={onClickSecondContainer}
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
      <div id="second-container" className="w-full p-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold sm:text-4xl">
                Porsche 911 Turbo S
              </h1>
              <p className="font-light tracking-tighter">
                The <span className="font-medium">Porsche 911 Turbo S </span>
                delivers an impressive performance with
                <span className="font-medium"> 650 horsepower</span> and
                exceptional precision. <br />
                The
                <span className="font-medium"> active aerodynamic system </span>
                maximizes aerodynamic efficiency while enhancing the bold and
                elegant presence of the 911 Turbo S. <br /> Porsche's unique
                design language transcends time and trends, offering an
                <span className="font-medium"> iconic aesthetic</span> that
                captivates the eye. <br />
                Experience the ultimate combination of extreme performance and
                luxurious driving with the Porsche 911 Turbo S today.
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:flex-wrap lg:items-start lg:justify-start lg:gap-10">
              {[
                { label: "Curb weight", value: "1,680kg" },
                { label: "Maximum output", value: "662hp" },
                { label: "Top Safe Speed", value: "330km/h" },
                { label: "Fuel Economy (Rating)", value: "6.8km/L (Grade 5)" },
                { label: "CO₂ Emissions", value: "259g/km" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2.5 lg:items-start"
                >
                  <span className="text-[18px] font-semibold">{label}</span>
                  <span className="font-light">{value}</span>
                </div>
              ))}
            </div>
            <div className="hidden items-center lg:flex">
              <Button className="cursor-pointer border-black bg-transparent px-4 py-2.5 font-light tracking-tight text-black">
                Read More
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img
              src={Porsche911}
              alt="Porsche 911 Image"
              className="h-auto w-130"
            />
            <div className="flex items-center lg:hidden">
              <Button className="cursor-pointer border-black bg-transparent px-4 py-2.5 font-light tracking-tight text-black">
                Read More
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="third-container"
        className="relative flex h-175 w-full flex-col justify-between py-15 sm:pl-10"
      >
        <img
          src={PorscheBackground}
          alt=""
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          <p className="text-4xl font-bold text-white sm:text-[60px]">
            Overwhelm many.
          </p>
          <p className="text-2xl font-medium text-white sm:text-[30px]">
            While making others celebrate.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-center text-sm font-light text-white sm:text-left sm:text-[20px]">
          <p>
            The 911 Turbo models feature incredible performance
            <br />
            combined with breath taking driving dynamics.
          </p>
          <p>
            Even though the basic engine layout has not changed,
            <br />
            every detail has been optimized, honed and refined.
          </p>
        </div>
      </div>
      <div
        id="four-container"
        className="flex w-full flex-col divide-y-4 divide-white border-4 border-white"
      >
        <div className="relative h-75 w-full overflow-hidden lg:h-175">
          <img
            src={GT3RS}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute top-8 left-8 flex flex-col gap-3 lg:top-15 lg:left-30 lg:gap-5">
            <p className="text-2xl leading-[1.4] font-bold text-[#b92e25] lg:text-[72px]">
              911 GT3RS
            </p>
            <Button
              variant="outline"
              onClick={() => toast("This feature is not implemented yet.")}
              className={`${buyNowBase} border-[#b92e25] text-[#b92e25] hover:text-[#b92e25]`}
            >
              Buy Now
            </Button>
          </div>
        </div>
        <div className="flex flex-col divide-y-4 divide-white lg:flex-row lg:divide-x-4 lg:divide-y-0">
          <div className="relative h-75 w-full overflow-hidden lg:h-175 lg:w-1/2">
            <img
              src={Boxster}
              alt=""
              className="absolute inset-0 size-full object-cover object-[40%_50%]"
            />
            <p className="absolute top-8 left-8 text-xl leading-[1.4] font-bold text-[#f4f4f6] lg:top-15 lg:left-[38%] lg:text-[56px]">
              718 Boxster GTS
            </p>
            <Button
              variant="outline"
              onClick={() => toast("This feature is not implemented yet.")}
              className={`absolute bottom-8 left-8 ${buyNowBase} border-white text-white hover:text-white lg:top-[24%] lg:bottom-auto lg:left-[69%]`}
            >
              Buy Now
            </Button>
          </div>
          <div className="relative h-75 w-full overflow-hidden lg:h-175 lg:w-1/2">
            <img
              src={Carrera}
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
            <p className="absolute top-8 left-8 text-xl leading-[1.4] font-bold text-[#d8a402] lg:top-15 lg:left-30 lg:text-[56px]">
              911 Carrera 4 GTS
            </p>
            <Button
              variant="outline"
              onClick={() => toast("This feature is not implemented yet.")}
              className={`absolute bottom-8 left-8 ${buyNowBase} border-[#d8a401] text-[#d8a401] hover:text-[#d8a401] lg:top-[24%] lg:bottom-auto lg:left-30`}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div id="fifth-container" className="w-full bg-white">
        <div className="mx-auto max-w-350 px-4">
          <div className="flex flex-col items-center gap-15 pt-21.25">
            <img src={Logo911} alt="911" className="h-6.25" />
            <img
              src={Background1}
              alt=""
              className="h-75 w-full rounded-[24px] object-cover lg:h-165"
            />
          </div>
          <div className="mt-16 flex flex-col items-start gap-10 lg:mt-32.5 lg:flex-row lg:gap-22.5">
            <img
              src={Background2}
              alt=""
              className="h-70 w-full shrink-0 rounded-[24px] object-cover lg:h-132.75 lg:w-180"
            />
            <div className="flex flex-col gap-6 lg:gap-10 lg:pt-8">
              <div className="text-3xl leading-[1.4] font-medium tracking-tight lg:text-[60px] lg:tracking-[-1.5px]">
                <p>The one and</p>
                <p>always.</p>
              </div>
              <p className="text-sm leading-[1.4] tracking-tight lg:max-w-145.5 lg:text-[20px] lg:tracking-[-0.5px]">
                Anyone who dreams of owning a Porsche has a clear image in mind.
                The 911 has been the epitome of an exciting and powerful sports
                car, offering everyday usability for 60 years. Drive the new 911
                and become a part of this extraordinary community.
              </p>
            </div>
          </div>
          <div className="mt-16 flex flex-col-reverse items-start gap-10 pb-20 lg:mt-32.5 lg:flex-row lg:items-center lg:gap-8.5 lg:pb-32">
            <div className="flex flex-col items-start gap-6 text-left lg:flex-1 lg:items-end lg:gap-10 lg:text-right">
              <p className="text-3xl leading-[1.4] font-medium tracking-tight lg:text-[60px] lg:tracking-[-1.5px]">
                Comfort.
              </p>
              <p className="text-sm leading-[1.4] tracking-tight lg:max-w-131 lg:text-[20px] lg:tracking-[-0.5px]">
                Everything new? Everything the same? Neither. The interior
                combines what has characterized the 911 Turbo for over 45 years
                with the possibilities of today.
              </p>
            </div>
            <img
              src={Background3}
              alt=""
              className="h-70 w-full shrink-0 rounded-[24px] object-cover lg:h-123 lg:w-190"
            />
          </div>
        </div>
      </div>
      <footer className="w-full bg-[#0e0e12] px-15 pt-12.5 pb-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
          <div className="flex flex-col gap-2.5">
            <p className="text-[26px] leading-[1.4] font-bold tracking-[-0.65px] text-white">
              Porsche
            </p>
            <p className="text-[14px] leading-[1.4] tracking-[-0.35px] text-white">
              official porsche site
            </p>
            <button className="mt-1 h-7.5 w-42.5 cursor-pointer rounded-sm bg-white text-[12px] font-bold tracking-[-0.3px] text-black">
              Enter
            </button>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-[26px] leading-[1.4] font-bold tracking-[-0.65px] text-white">
              Locations &amp; Contacts
            </p>
            <p className="text-[14px] leading-[1.4] tracking-[-0.35px] text-white">
              Ask question on official site
            </p>
            <button className="mt-1 h-7.5 w-42.5 cursor-pointer rounded-sm bg-white text-[12px] font-bold tracking-[-0.3px] text-black">
              Get in touch
            </button>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-[26px] leading-[1.4] font-bold tracking-[-0.65px] text-white">
              Social Media
            </p>
            <p className="text-[14px] leading-[1.4] tracking-[-0.35px] text-white">
              Get in touch with porsche
            </p>
            <div className="mt-1 grid grid-cols-3 gap-1">
              {[Facebook, Instagram, Pinterest, Youtube, X, LinkedIn].map(
                (src, i) => (
                  <div
                    key={i}
                    className="flex size-7.5 items-center justify-center rounded-sm bg-white"
                  >
                    <img src={src} alt="" className="size-5.5 object-contain" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="my-13.5 border-t border-white/20" />
        <div className="flex flex-col gap-2">
          <p className="text-[26px] leading-[1.4] font-bold tracking-[-0.65px] text-white">
            Company &amp; Support
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5">
            {[
              "Porsche Cars North America",
              "Recall Information",
              "Career",
              "Global Partnership Council",
            ].map((item) => (
              <p
                key={item}
                className="cursor-pointer text-[12px] leading-[1.4] font-medium tracking-[-0.3px] text-white hover:underline"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5">
            {["Compliance", "Sustainability", "Newsroom & Press"].map(
              (item) => (
                <p
                  key={item}
                  className="cursor-pointer text-[12px] leading-[1.4] font-medium tracking-[-0.3px] text-white hover:underline"
                >
                  {item}
                </p>
              ),
            )}
          </div>
        </div>
      </footer>
    </>
  );
}
export default App;
