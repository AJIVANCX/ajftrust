import { db } from "../../../../lib/db";

export async function GET() {
  try {
    const [rows]: any = await db.query(`
      SELECT *
      FROM projects
      ORDER BY id DESC
    `);

    return Response.json(rows);
  } catch (error: any) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}