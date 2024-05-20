import { defineDb, defineTable, column } from "astro:db";

const Productos = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    price: column.number(),
    brand: column.text(),
    description: column.text(),
    model: column.text(),
    amperaje: column.text(),
    warranty: column.text(),
    image: column.text(),
  },
});

export default defineDb({
  tables: { Productos },
});
