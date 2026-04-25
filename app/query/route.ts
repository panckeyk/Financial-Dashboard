import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data;
}

export async function GET() {
  console.log("API HIT");

  try {
    const data = await listInvoices();
    console.log(data);
    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
