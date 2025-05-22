import classes from "./App.module.css";
import { useState } from "react";
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

      <section>
        <h2>Deine Auswahl</h2>
        <p>
          Du hast <strong>{countries[selections.country]}</strong> als
          Weltmeister und <strong>{players[selections.player]}</strong> als
          Spieler des Turniers gewählt. Du hast{" "}
          <strong>{countries[selections.country]}</strong> als Weltmeister und{" "}
          <strong>{players[selections.player]}</strong> als Spieler des Turniers
          gewählt.
        </p>
      </section>
    </main>
  );
}

export default App;
