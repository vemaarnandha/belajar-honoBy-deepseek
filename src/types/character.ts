export interface Character {
  id: string;
  name: string;
  class: 'Warrior' | 'Mage' | 'Rogue';
  level: number;
  hp: number;
}