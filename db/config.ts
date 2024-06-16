import { defineDb, defineTable, column} from "astro:db";

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

const Usuarios = defineTable({
  columns: {
    id: column.number({ primaryKey: true, optional: false, unique: true}),
    email: column.text({ unique: true, optional: false}),
    name: column.text(),
    password_hash: column.text(),
  }
});

const Session = defineTable({
  columns: {
    id: column.number({ optional: false, unique: true}),
    userId: column.number({optional: false, references: () => Usuarios.columns.id}),
    expiresAt: column.number({optional: false}),
  },
});


export default defineDb({
  tables: { Productos, Usuarios, Session },
});
