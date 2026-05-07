import Header from "./components/header";

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <div id="container" className="flex-1"></div>
    </div>
  );
}

export default App;
