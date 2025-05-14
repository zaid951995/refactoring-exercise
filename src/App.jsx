import "./App.css";
import { useState } from "react";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("de");
  const [selectedPlayer, setSelectedPlayer] = useState("jm");
  console.log(selectedCountry);
  console.log(selectedPlayer);
  return (
    <>
      <div className="country-box">
        <label htmlFor="countries">Wer wird Weltmeister?</label>
        <select
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
          className="country-select"
          id="countries"
        >
          <option value="de">Deutschland 🇩🇪</option>
          <option value="en">England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</option>
          <option value="fr">Frankreich 🇫🇷</option>
          <option value="it">Italien 🇮🇹</option>
        </select>
      </div>

      <div className="player-box">
        <label htmlFor="players">Wer wird Spieler des Turniers?</label>
        <select
          value={selectedPlayer}
          onChange={(e) => {
            setSelectedPlayer(e.target.value);
          }}
          className="player-select"
          id="players"
        >
          <option value="jm">Jamal Musiala</option>
          <option value="km">Kylian Mbappé</option>
          <option value="hk">Harry Kane</option>
          <option value="lm">Lautaro Martinez</option>
          <option value="ly">Lamine Yamal</option>
        </select>
      </div>
      <div className="result-box">
        <h2>Deine Auswahl</h2>
        <p>
          Du hast{" "}
          <strong>
            {selectedCountry === "de"
              ? "Deutschland"
              : selectedCountry === "en"
              ? "England"
              : selectedCountry === "fr"
              ? "Frankreich"
              : "Italien"}
          </strong>{" "}
          als Weltmeister und{" "}
          <strong>
            {selectedPlayer === "jm"
              ? "Jamale Musiala"
              : selectedCountry === "km"
              ? "Kylian Mbappé"
              : selectedPlayer === "hk"
              ? "Harry Kane"
              : selectedPlayer === "lm"
              ? "Lautaro Martinez"
              : "Lamine Yamal"}
          </strong>{" "}
          als Spieler des Turniers gewählt.
        </p>
      </div>
    </>
  );
}

export default App;
