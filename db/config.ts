import { defineDb, defineTable, column } from "astro:db";

const Productos = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    price: column.number(),
    brand: column.text(),
    image: column.text(),
  },
});

export default defineDb({
  tables: { Productos },
});
