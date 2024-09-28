import { boolean, serial } from "drizzle-orm/pg-core";
import { pgTable, varchar } from "drizzle-orm/pg-core";

export const Users=pgTable('users',{
    id:serial('id').primaryKey(),
    email:varchar('email').notNull(),
    name:varchar('name').notNull(),
    imageUrl:varchar('imageUrl'),
    suscription:boolean('suscription').default(false)

}

)