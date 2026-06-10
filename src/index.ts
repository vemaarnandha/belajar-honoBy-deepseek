import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { charactersRoute } from './routes/characters.js';

const app = new Hono();

app.get('/', (c) => {
  return c.text('🏰 Selamat datang di Eldoria Online API!');
});

// Semua endpoint yang diawali /characters di-handle oleh charactersRoute
app.route('/characters', charactersRoute);

serve(
  { fetch: app.fetch, port: 3001 },
  (info) => {
    console.log(`Server berjalan di http://localhost:${info.port}`);
  }
);