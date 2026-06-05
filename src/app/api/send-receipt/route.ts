import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json({
      success: true,
      message: "Receipt sent successfully",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error processing request",
      },
      { status: 500 }
    );
  }
}