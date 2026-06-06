import { jsPDF } from "jspdf";
import { db } from "../../../lib/db";
import QRCode from "qrcode";
import fs from "fs";
import path from "path";

function amountInWords(amount: number) {
  return `${amount.toLocaleString("en-IN")} Rupees Only`;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const receiptNo =
      searchParams.get("receipt");

    if (!receiptNo) {
      return new Response(
        "Receipt number missing",
        {
          status: 400,
        }
      );
    }

    const [rows]: any =
      await db.query(
        `
    SELECT *
    FROM donors
    WHERE receipt_no = ?
    LIMIT 1
  `,
        [receiptNo]
      );

    if (!rows.length) {
      return new Response(
        "Receipt not found",
        {
          status: 404,
        }
      );
    }

    const donor = rows[0];
    const logoPath = path.join(
      process.cwd(),
      "public",
      "logo.png"
    );

    let logo = "";

    if (fs.existsSync(logoPath)) {
      logo =
        "data:image/png;base64," +
        fs.readFileSync(logoPath).toString("base64");
    }
    const qr = await QRCode.toDataURL(`

Receipt No: ${donor.receipt_no}
Donor: ${donor.donor_name}
Amount: ₹${donor.amount}
`);

    const doc = new jsPDF(
      "p",
      "mm",
      "a4"
    );

    // BORDER
    doc.setDrawColor(
      212,
      175,
      55
    );

    doc.setLineWidth(1.5);

    doc.roundedRect(
      5,
      5,
      200,
      287,
      4,
      4
    );

    // HEADER WHITE

    doc.setFillColor(255, 255, 255);
    doc.rect(
      8,
      8,
      194,
      55,
      "F"
    );

    // LEFT LOGO

    if (logo) {
      doc.addImage(
        logo,
        "PNG",
        18,
        12,
        24,
        24
      );
    }

    // RIGHT QR

    doc.addImage(
      qr,
      "PNG",
      170,
      12,
      18,
      18
    );

    doc.setTextColor(40, 40, 40);

    doc.setFont("times", "bold");
    doc.setFontSize(18);

    doc.text(
      "ANAND JIVAN FOUNDATION TRUST",
      105,
      30,
      { align: "center" }
    );

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);

    doc.text(
      "(Registered Public Charitable Trust)",
      105,
      37,
      { align: "center" }
    );

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);

    doc.text(
      "DARPAN ID: BR/2023/0343963 | Registration No: AAJTA9323KF20231 | Trust PAN: AAJTA9323K",
      105,
      44,
      { align: "center" }
    );

    doc.setFont("helvetica", "normal");

    doc.text(
      "Mabbi Belauna, Post- Lalshahpur, Shahpur, Darbhanga, Bihar - 846005",
      105,
      50,
      { align: "center" }
    );

    doc.text(
      "info@ajftrust.org | 9155751363 | www.ajftrust.org",
      105,
      55,
      { align: "center" }
    );

    // GOLD TITLE

    doc.setFillColor(212, 175, 55);

    doc.roundedRect(
      20,
      68,
      170,
      10,
      2,
      2,
      "F"
    );

    doc.setTextColor(0, 0, 0);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);

    doc.text(
      "OFFICIAL DONATION RECEIPT",
      105,
      75,
      { align: "center" }
    );

    // DETAILS
    doc.rect(
      20,
      68,
      170,
      55
    );

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);

    // RECEIPT DETAILS

    doc.text(
      `Receipt No : ${donor.receipt_no}`,
      25,
      95
    );

    doc.text(
      `Date : ${new Date(
        donor.donation_date ??
        Date.now()
      ).toLocaleDateString("en-IN")}`,
      125,
      95
    );

    doc.text(
      `Received From : ${donor.donor_name}`,
      25,
      108
    );

    doc.text(
      `Mobile No : ${donor.donor_mobile}`,
      25,
      120
    );

    doc.text(
      `Email ID : ${donor.donor_email}`,
      25,
      132
    );

    // AMOUNT BOX

    doc.setFillColor(
      234,
      244,
      255
    );

    doc.roundedRect(
      20,
      145,
      170,
      38,
      3,
      3,
      "F"
    );

    doc.setFontSize(24);

    doc.text(
      `₹ ${Number(
        donor.amount
      ).toLocaleString("en-IN")}`,
      105,
      160,
      {
        align: "center",
      }
    );

    doc.setFontSize(9);

    doc.text(
      `(${amountInWords(
        Number(donor.amount)
      )})`,
      105,
      170,
      {
        align: "center",
      }
    );

    doc.text(
      "DONATION AMOUNT RECEIVED",
      105,
      178,
      {
        align: "center",
      }
    );

    // DONATION DETAILS

    doc.setFontSize(10);

    doc.text(
      `Purpose : ${donor.purpose ||
      "General Donation"
      }`,
      20,
      195
    );

    doc.text(
      `Payment Mode : ${donor.payment_mode ||
      "Online Transfer"
      }`,
      20,
      205
    );

    doc.text(
      `Transaction ID : ${donor.payment_id ||
      "N/A"
      }`,
      20,
      215
    );

    doc.text(
      `Donor PAN : ${donor.pan_number ||
      "N/A"
      }`,
      20,
      225
    );

    doc.text(
      `Address : ${donor.address ||
      "N/A"
      }`,
      20,
      235,
      {
        maxWidth: 160,
      }
    );

    // DECLARATION BOX

    doc.setFillColor(
      248,
      248,
      248
    );

    doc.roundedRect(
      20,
      245,
      170,
      22,
      3,
      3,
      "F"
    );

    doc.setFontSize(8);

    doc.text(
      "Received with thanks towards charitable activities of Anand Jivan Foundation Trust.",
      25,
      254,
      {
        maxWidth: 150,
      }
    );

    doc.text(
      "Donation eligible under Section 80G of the Income Tax Act, 1961.",
      25,
      261
    );
doc.setFontSize(7);

doc.text(
  "This is a computer generated receipt and does not require physical signature.",
  20,
  272
);

    // FOOTER

    doc.setFontSize(8);

    doc.text(
      "For Anand Jivan Foundation Trust",
      120,
      276
    );

    doc.line(
      120,
      282,
      180,
      282
    );

    doc.text(
      "Authorized Signatory",
      132,
      287
    );

    // CREATE PDF BUFFER
    const pdf = Buffer.from(
      doc.output("arraybuffer")
    );

    return new Response(
      pdf,
      {
        headers: {
          "Content-Type":
            "application/pdf",
          "Content-Disposition":
            `attachment; filename=${donor.receipt_no}.pdf`,
        },
      }
    );


  } catch (error: any) {
    console.error(error);

    return new Response(
      error.message,
      {
        status: 500,
      }
    );


  }
}
