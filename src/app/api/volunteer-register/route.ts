import { NextResponse } from "next/server";
import { db } from "../../../lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const volunteerId =
      "AJF-VOL-" +
      new Date().getFullYear() +
      "-" +
      Date.now();

    await db.query(
      `
      INSERT INTO volunteers (
        volunteer_id,
        full_name,
        father_name,
        mother_name,
        dob,
        gender,
        mobile,
        email,
        pincode,
        state,
        district,
        village,
        post_office,
        thana,
        qualification,
        occupation,
        aadhaar,
        reason
      )
      VALUES (
        ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?
      )
      `,
      [
        volunteerId,
        data.fullName,
        data.fatherName,
        data.motherName,
        data.dob,
        data.gender,
        data.mobile,
        data.email,
        data.pincode,
        data.state,
        data.district,
        data.village,
        data.postOffice,
        data.thana,
        data.qualification,
        data.occupation,
        data.aadhaar,
        data.reason,
      ]
    );

    return NextResponse.json({
      success: true,
      volunteerId,
      message:
        "Volunteer Registration Successful",
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