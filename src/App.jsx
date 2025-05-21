import styles from "./App.module.css";
import { useState, useMemo } from "react";
import { countries, players } from "./data/Constants";
import { DropDown } from "./components/DropDown";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("de");
  const [selectedPlayer, setSelectedPlayer] = useState("jm");

  const countryOptions = useMemo(
    () =>
      Object.entries(countries).map(([key, label]) => ({
        value: key,
        label,
      })),
    []
  );

  const playerOptions = useMemo(
    () =>
      Object.entries(players).map(([key, label]) => ({
        value: key,
        label,
      })),
    []
  );

  return (
    <main className={styles.container}>
      <DropDown
        label="Wer wird Weltmeister?"
        value={selectedCountry}
        options={countryOptions}
        onChange={setSelectedCountry}
        variant="primary"
      />
      <DropDown
        label="Wer wird Spieler des Turniers?"
        value={selectedPlayer}
        options={playerOptions}
        onChange={setSelectedPlayer}
        variant="secondary"
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
};

export default App;
