import { z } from 'zod';

export const createCharacterSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  class: z.enum(['Warrior', 'Mage', 'Rogue']),
});

// Type dari schema (biar bisa dipakai di route)
export type CreateCharacterInput = z.infer<typeof createCharacterSchema>;