const formatter = new Intl.NumberFormat("uk-UK", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export { formatter };
