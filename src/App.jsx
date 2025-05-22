import classes from "./App.module.css";
import { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import {
  countries,
  players,
  countryOptions,
  playerOptions,
} from "./data/Constants";
import { DropDown } from "./components/Dropdown";

function App() {
  const [selections, setSelections] = useState({
    country: "de",
    player: "jm",
  });

  const config = [
    {
      label: "Wer wird Weltmeister?",
      valueKey: "country",
      options: countryOptions,
      variant: "primary",
    },
    {
      label: "Wer wird Spieler des Turniers?",
      valueKey: "player",
      options: playerOptions,
      variant: "secondary",
    },
  ];

  const handleChange = (key, value) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <main className={classes.container}>
      {config.map(({ label, valueKey, options, ...rest }) => (
        <DropDown
          key={valueKey}
          label={label}
          value={selections[valueKey]}
          options={options}
          onChange={(val) => handleChange(valueKey, val)}
          {...rest}
        />
      ))}

=======
import { countries, players } from "./data/Constants";
import { DropDown } from "./components/Dropdown";

function App() {
=======
import { countries, players } from "./data/Constants";
import { DropDown } from "./components/Dropdown";

function App() {
>>>>>>> main
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
>>>>>>> main
      <section>
        <h2>Deine Auswahl</h2>
        <p>
          Du hast <strong>{countries[selections.country]}</strong> als
          Weltmeister und <strong>{players[selections.player]}</strong> als
          Spieler des Turniers gewählt.
        </p>
      </section>
    </main>
  );
}

export default App;
