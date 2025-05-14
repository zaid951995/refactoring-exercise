import "./App.css";
import { useState } from "react";
import Refactoring from "./components/Refactoring";
import { countries, players, countryNameMap, playerNameMap } from "./Constants";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("de");
  const [selectedPlayer, setSelectedPlayer] = useState("jm");
  console.log(selectedCountry);
  console.log(selectedPlayer);
  return (
    <>
      <div className="country-box">
        <Refactoring
          id="countries"
          label="Wer wird Weltmeister?"
          value={selectedCountry}
          onChange={setSelectedCountry}
          options={countries}
          className="country-select"
        />
      </div>

      <div className="player-box">
        <Refactoring
          id="players"
          label="Wer wird Spieler des Turniers?"
          value={selectedPlayer}
          onChange={setSelectedPlayer}
          options={players}
          className="player-select"
        />
      </div>
      <div className="result-box">
        <h2>Deine Auswahl</h2>
        <p>
          Du hast <strong>{countryNameMap[selectedCountry]}</strong> als
          Weltmeister und <strong>{playerNameMap[selectedPlayer]}</strong> als
          Spieler des Turniers gewählt.
        </p>
      </div>
    </>
  );
}

export default App;
