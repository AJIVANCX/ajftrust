import { jsPDF } from "jspdf";
import QRCode from "qrcode";
import { db } from "../../../lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const volunteerId =
      searchParams.get("id");

    if (!volunteerId) {
      return new Response(
        "Volunteer ID Missing",
        { status: 400 }
      );
    }

    const [rows]: any =
      await db.query(
        `
        SELECT *
        FROM volunteers
        WHERE volunteer_id = ?
        LIMIT 1
      `,
        [volunteerId]
      );

    if (!rows.length) {
      return new Response(
        "Volunteer Not Found",
        { status: 404 }
      );
    }

    const volunteer = rows[0];

    const qr =
      await QRCode.toDataURL(
        JSON.stringify({
          volunteerId:
            volunteer.volunteer_id,
          name:
            volunteer.full_name,
          mobile:
            volunteer.mobile,
        })
      );

    const doc = new jsPDF(
      "p",
      "mm",
      [85, 54]
    );

    // Header
    doc.setFillColor(
      7,
      28,
      77
    );

    doc.rect(
      0,
      0,
      85,
      15,
      "F"
    );

    doc.setTextColor(
      255,
      255,
      255
    );

    doc.setFontSize(10);

    doc.text(
      "AJF VOLUNTEER CARD",
      42,
      9,
      {
        align: "center",
      }
    );

    // QR
    doc.addImage(
      qr,
      "PNG",
      58,
      18,
      18,
      18
    );

    doc.setTextColor(
      0,
      0,
      0
    );

    doc.setFontSize(8);

    doc.text(
      `ID: ${volunteer.volunteer_id}`,
      5,
      22
    );

    doc.text(
      `Name: ${volunteer.full_name}`,
      5,
      30
    );

    doc.text(
      `Mobile: ${volunteer.mobile}`,
      5,
      38
    );

    doc.text(
      `District: ${volunteer.district}`,
      5,
      46
    );

    doc.setFontSize(6);

    doc.text(
      "Anand Jivan Foundation Trust",
      42,
      52,
      {
        align: "center",
      }
    );

    const pdf =
      Buffer.from(
        doc.output(
          "arraybuffer"
        )
      );

    return new Response(
      pdf,
      {
        headers: {
          "Content-Type":
            "application/pdf",
          "Content-Disposition":
            `attachment; filename=${volunteer.volunteer_id}.pdf`,
        },
      }
    );
  } catch (error: any) {
    console.error(error);

    return new Response(
      error.message,
      { status: 500 }
    );
  }
}