import { db, Productos } from "astro:db";

export async function get() {
  try {
    const productos = await db.select().from(Productos);
    return {
      body: JSON.stringify(productos),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      status: 500,
      body: JSON.stringify({ error: 'Error al obtener los productos' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
}
