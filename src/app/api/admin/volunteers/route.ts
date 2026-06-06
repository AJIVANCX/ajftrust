import { db } from "../../../../lib/db";

export async function GET() {
  const [rows]: any =
    await db.query(
      `
      SELECT *
      FROM volunteers
      ORDER BY id DESC
    `
    );

  return Response.json(rows);
}