import { sql } from "@vercel/postgres";

export default async function Counter() {
    const rs = await sql`SELECT NOW() AS now`
    const now = rs.rows[0].now.toString()
    return (<>{now}</>);
}