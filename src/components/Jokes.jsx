import { useEffect, useState } from "react";
import img from "../assets/joking.png";

const url = `https://api.chucknorris.io/jokes/random`;

const Jokes = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const showJoke = async () => {
    try {
      setLoading(true);
      let joke = await fetch(url);
      joke = await joke.json();
      if (joke) {
        setJoke(joke.value);
        setLoading(false);
      } else throw new Error("Failed to fetch joke");
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    showJoke();
  }, []);

  const loadingText = (
    <p className="text-center animate-pulse text-3xl">
      Loading.. <br />
      Please wait..
    </p>
  );

  const errorText = (
    <p className="text-center text-3xl text-red-500">
      There was an error <br /> Kindly refresh the page.
    </p>
  );

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center gap-4 mt-12 bg-[#15161C] w-11/12 max-w-md m-auto rounded-lg py-8 text-white transition-all duration-300`}
      >
        <img className="w-32" src={img} alt="laughing image" />
        {loading ? (
          loadingText
        ) : error ? (
          errorText
        ) : (
          <p className="w-11/12 m-auto text-center text-white">{joke}</p>
        )}
        <button
          onClick={showJoke}
          className="bg-blue-600 px-6 py-2 rounded-lg text-white"
          type="button"
        >
          Show Random Joke
        </button>
      </div>
    </>
  );
};

export default Jokes;
