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
              variant={"outline"}
              onClick={onClickSecondContainer}
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
      <div id="second-container" className="h-full w-full p-12">
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
        {/* GT3RS - full width */}
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
              className="h-9 w-32 cursor-pointer rounded-none border-2 border-[#b92e25] bg-transparent text-sm font-medium text-[#b92e25] hover:bg-transparent hover:text-[#b92e25] lg:h-12.5 lg:w-45 lg:text-[22px]"
            >
              Buy Now
            </Button>
          </div>
        </div>
        {/* Bottom row - Boxster + Carrera */}
        <div className="flex flex-col divide-y-4 divide-white lg:flex-row lg:divide-x-4 lg:divide-y-0">
          {/* Boxster */}
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
              className="absolute bottom-8 left-8 h-9 w-32 cursor-pointer rounded-none border-2 border-white bg-transparent text-sm font-medium text-white hover:bg-transparent hover:text-white lg:top-[24%] lg:bottom-auto lg:left-[69%] lg:h-12.5 lg:w-45 lg:text-[22px]"
            >
              Buy Now
            </Button>
          </div>
          {/* Carrera */}
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
              className="absolute bottom-8 left-8 h-9 w-32 cursor-pointer rounded-none border-2 border-[#d8a401] bg-transparent text-sm font-medium text-[#d8a401] hover:bg-transparent hover:text-[#d8a401] lg:top-[24%] lg:bottom-auto lg:left-30 lg:h-12.5 lg:w-45 lg:text-[22px]"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
