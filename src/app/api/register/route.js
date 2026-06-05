import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      father_name,
      mother_name,
      dob,
      mobile,
      email,
      address,
      pincode,
      state,
      district,
    } = body;

    if (!name || !mobile || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields are missing",
        },
        { status: 400 }
      );
    }

    // TODO: Database save code here

    const username = `AJFT${Date.now()}`;
    const password = Math.random().toString(36).slice(-8);

    return NextResponse.json({
      success: true,
      message: "Registration successful",
      username,
      password,
      student: {
        name,
        mobile,
        email,
      },
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}