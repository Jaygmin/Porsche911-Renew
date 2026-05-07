import Header from "./components/header";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <div className="flex-1 bg-[url(/src/assets/Background.png)] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center sm:block">
        <div className="flex flex-col items-center sm:items-start space-y-2 sm:ml-15 sm:mt-30 text-center sm:text-left">
          <h1 className="md:text-5xl text-4xl sm:text-6xl font-semibold text-white tracking-tight">
            Driven to Perfection.
          </h1>
          <h3 className="md:text-3xl text-2xl sm:text-4xl font-light text-white">
            Speed, Precision, Legacy
          </h3>
        </div>
        <div className="mt-8 sm:mt-0 sm:bottom-10 flex items-center justify-center sm:absolute left-1/2 right-1/2">
          <Button
            className="bg-transparent text-white rounded-none border-2 py-2.5 px-8 font-normal tracking-tight cursor-pointer"
            variant={"outline"}
          >
            Read more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
