export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const roundNumber = (number) => {
  return Math.round(number);
};

export const formatRate = (rate) => {
  return rate / 100;
};
