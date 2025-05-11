import { useState } from "react";
import "./App.css";
import Heads from "../src/assets/heads.svg";
import Tails from "../src/assets/tails.svg";
import Shadows from "../src/assets/shadow.svg";

export default function Game() {
  const [flip, setFlip] = useState(() =>
    Math.random() < 0.5 ? "Header" : "Tail"
  );

  function makeFlip() {
    const result = Math.random() < 0.5 ? "Header" : "Tail";
    setFlip(result);
  }

  // -------------------------------------------------------------------------//

  return (
    <div className="bg-slate-600 h-screen flex flex-col items-center text-center">
      <h1 className="font-kanit text-7xl text-stroke text-white m-12 ">
        Flip The Coin
      </h1>
      <p className="font-kanit-medium text-white text-3xl mb-15">
        Press the coin or the button to flip the coin
      </p>

      <div className="font-kanit-medium text-3xl text-white mb-15">
        {flip === "Header" && (
          <div className="m-auto">
            <img src={Heads} alt="" onClick={makeFlip} className="mb-10" />
            <img src={Shadows} alt="" className="m-auto mb-10" />
            <p>Heads</p>
          </div>
        )}

        {flip === "Tail" && (
          <div className="m-auto">
            <img src={Tails} alt="" onClick={makeFlip} className=" mb-10" />
            <img src={Shadows} alt="" className="m-auto mb-10" />
            <p>Tails</p>
          </div>
        )}
      </div>
      <button
        onClick={makeFlip}
        className="font-kanit-medium text-white text-3xl bg-sky-600 rounded-lg border-b-5 border-sky-700 hover:bg-sky-700 hover:border-sky-800 transition-all ease-in-out duration-100 active:scale-90 active:border-b-0 
        px-10 py-2"
      >
        FLIP
      </button>
    </div>
  );
}
