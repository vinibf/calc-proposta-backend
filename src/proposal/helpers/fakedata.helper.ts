import { Guid } from 'guid-typescript';

enum PowerSupplyEnum {
  CONVENCIONAL = 'Convencional',
  RENOVAVEL = 'Renovável',
}

enum SubmarketEnum {
  NORTE = 'Norte',
  NORDESTE = 'Nordeste',
  SUL = 'Sul',
  SUDESTE = 'Sudeste',
}

const proposalList = [
  {
    publicId: Guid.create().toString(),
    startDate: '2017-10-12',
    endDate: '2018-09-25',
    loads: [
      { title: 'c1', consume: '27.5' },
      { title: 'c2', consume: '125' },
      { title: 'c3', consume: '275' },
    ],
    powerSupply: PowerSupplyEnum,
    submarket: SubmarketEnum,
    totalConsumption: '580',
    contracted: true,
    value: '2500',
  },
  {
    publicId: Guid.create().toString(),
    startDate: '2017-10-12',
    endDate: '2018-09-25',
    loads: [
      { title: 'c1', consume: '27.5' },
      { title: 'c2', consume: '125' },
    ],
    powerSupply: PowerSupplyEnum,
    submarket: SubmarketEnum,
    totalConsumption: '580',
    contracted: true,
    value: '5700',
  },
];

export { proposalList };
