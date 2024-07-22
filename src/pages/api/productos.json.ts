import { db, Productos } from "astro:db";

export async function GET() {
  try {
    const productos = await db.select().from(Productos);
    return new Response(JSON.stringify(productos), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error al obtener los productos" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
