const formatAmount = (amount: number, currency: "CLP" | "USD") => {
  const leng = { "CLP": "es-CL", "USD": "en-US" };
  const formatted = new Intl.NumberFormat(leng[currency], {
    style: "currency",
    currency: currency,
  }).format(amount);
  return formatted;
};

export default formatAmount;