import classes from "./App.module.css";
import { useState } from "react";
import { countries, players } from "./data/Constants";
import { DropDown } from "./components/Dropdown";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("de");
  const [selectedPlayer, setSelectedPlayer] = useState("jm");

  function mapToOptions(data) {
    return Object.keys(data).map((key) => ({
      value: key,
      label: data[key],
    }));
  }

  return (
    <main className={classes.container}>
      <DropDown
        label="Wer wird Weltmeister?"
        value={selectedCountry}
        options={mapToOptions(countries)}
        onChange={(country) => setSelectedCountry(country)}
      />
      <DropDown
        label="Wer wird Spieler des Turniers?"
        value={selectedPlayer}
        options={mapToOptions(players)}
        onChange={(player) => setSelectedPlayer(player)}
        style={{ borderColor: "#e71d36" }}
      />
      <section>
        <h2>Deine Auswahl</h2>
        <p>
          Du hast <strong>{countries[selectedCountry]}</strong> als Weltmeister
          und <strong>{players[selectedPlayer]}</strong> als Spieler des
          Turniers gewählt.
        </p>
      </section>
    </main>
  );
}

export default App;
