import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import dotenv from 'dotenv';

console.log(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL)

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);
export const db = drizzle(sql);
