import Jokes from "./components/Jokes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-full relative pb-36">
        <Navbar />
        <Jokes/>
      </div>
    </>
  );
}

export default App;
