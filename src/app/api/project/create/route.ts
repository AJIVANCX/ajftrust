import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const projectId =
      "AJF-PROJ-" +
      new Date().getFullYear() +
      "-" +
      Date.now();

    await db.query(
      `
      INSERT INTO projects
      (
        project_id,
        title,
        category,
        location,
        goal_amount,
        beneficiaries,
        status,
        description,
        image
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        projectId,
        data.title,
        data.category,
        data.location,
        data.goalAmount,
        data.beneficiaries || 0,
        data.status || "Active",
        data.description,
        data.image || "",
      ]
    );

    return NextResponse.json({
      success: true,
      projectId,
      message: "Project Created Successfully",
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
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