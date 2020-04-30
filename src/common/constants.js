import { formatRate } from './utils';

export const rates = {
  ruamm: {
    tranche1: formatRate(3.85),
    tranche2: formatRate(1.25),
  },
  retraite: formatRate(4.2),
  chomage: formatRate(0.34),
  ccs: formatRate(1),
  retraiteAgircArrco: {
    tranche1: formatRate(3.15),
    tranche2: formatRate(8.64),
  },
  ceg: formatRate(0.75),
  cet: formatRate(0.14),
};
