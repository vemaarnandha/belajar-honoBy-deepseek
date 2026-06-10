import { Hono } from 'hono';
import { createCharacterSchema } from '../schemas/character.js';
import type { Character } from '../types/character.js';

// App khusus untuk route karakter
export const charactersRoute = new Hono();

// Database sementara (nanti kita ganti database sungguhan)
const characters: Character[] = [];

// GET /characters - tampilkan semua karakter
charactersRoute.get('/', (c) => {
  return c.json({
    status: 'success',
    data: characters,
  });
});

// POST /characters - daftarkan karakter baru
charactersRoute.post('/', async (c) => {
  // Ambil body dari request
  const body = await c.req.json();
  
  // Validasi pakai Zod
  const result = createCharacterSchema.safeParse(body);
  
  if (!result.success) {
    return c.json(
      {
        status: 'error',
        errors: result.error.flatten().fieldErrors,
      },
      400 // HTTP 400 Bad Request
    );
  }

  // Data sudah valid, buat karakter baru
  const newCharacter: Character = {
    id: crypto.randomUUID(), // ID unik otomatis
    name: result.data.name,
    class: result.data.class,
    level: 1,
    hp: 100,
  };

  characters.push(newCharacter);

  return c.json(
    {
      status: 'success',      data: newCharacter,
    },
    201 // HTTP 201 Created
  );
});