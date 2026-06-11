export interface Character {
  id: number;
  name: string;
  class: 'Warrior' | 'Mage' | 'Rogue';
  level: number;
  hp: number;
}