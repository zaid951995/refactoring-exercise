export const countries = {
  de: "Deutschland 🇩🇪",
  en: "England 🏴",
  fr: "Frankreich 🇫🇷",
  it: "Italien 🇮🇹",
  es: "Spanien 🇪🇸",
};

export const players = {
  jm: "Jamal Musiala",
  km: "Kylian Mbappé",
  hk: "Harry Kane",
  lm: "Lautaro Martinez",
  ly: "Lamine Yamal",
  ph: "Phil Foden",
};

export const countryOptions = Object.entries(countries).map(
  ([value, label]) => ({ value, label })
);
export const playerOptions = Object.entries(players).map(([value, label]) => ({
  value,
  label,
}));
