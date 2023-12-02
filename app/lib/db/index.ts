import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
 
neonConfig.fetchConnectionCache = true;

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
    }
 
const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

export default db;
 
// const result = await db.select().from(...);