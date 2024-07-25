import { column, defineDb, defineTable } from 'astro:db';


const Menu = defineTable({
  columns: {
    name: column.text(),
    description: column.text(),
    place: column.text(),
    plan: column.text(),
    slot: column.number(),
    time: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {Menu}
});
