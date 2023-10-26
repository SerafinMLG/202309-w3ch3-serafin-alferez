import { Pets } from '../models/pets';
// eslint-disable-next-line capitalized-comments
// import { Component } from '../components/component';

export const repo = () => {
  const data: Pets[] = [
    { id: crypto.randomUUID(),
      name: 'Rufo',
      owner: 'Abel',
      race: 'Pastor alemán',
      isAdopted: false 
    },
    { id: crypto.randomUUID(),
      name: 'Bruno',
      owner: 'Pablo',
      race: 'Bulldog francés',
      isAdopted: true,
    },
    {
      id: crypto.randomUUID(),
      name: 'Lucky',
      owner: 'Hannah',
      race: 'Yorkshire',
      isAdopted: true,
    },
    {
      id: crypto.randomUUID(),
      name: 'Mickey',
      owner: 'Jose',
      race: 'Labrador',
      isAdopted: false,
  },
];
  return data;
};
