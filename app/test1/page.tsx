import { sql } from "@vercel/postgres";

export default async function Page({ searchParams } : {searchParams? : {x?: string}}) {
  console.log(searchParams?.x)
  const rs = await sql`SELECT COUNT(*) FROM invoices`
  const count = rs.rows[0].count

  return (
    <div>
        <h1>Test 1</h1>
        <p>Now: {`${new Date()}`}</p>
        <p>Count: {count}</p>
    </div>
  );
}