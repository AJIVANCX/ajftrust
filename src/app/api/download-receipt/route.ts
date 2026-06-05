import { jsPDF } from "jspdf";
import { db } from "../../../lib/db";

export async function GET(req: Request) {
try {
const { searchParams } = new URL(req.url);

const receiptNo =
  searchParams.get("receipt");

if (!receiptNo) {
  return new Response(
    "Receipt number missing",
    { status: 400 }
  );
}

const [rows]: any = await db.query(
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
    { status: 404 }
  );
}

const donor = rows[0];

const doc = new jsPDF("p", "mm", "a4");

// Golden Border
doc.setDrawColor(212, 175, 55);
doc.setLineWidth(1.5);
doc.roundedRect(
  5,
  5,
  200,
  287,
  4,
  4
);

// Header
doc.setFontSize(20);

doc.text(
  "ANAND JIVAN FOUNDATION TRUST",
  105,
  20,
  { align: "center" }
);

doc.setFontSize(10);

doc.text(
  "(Registered Public Charitable Trust)",
  105,
  28,
  { align: "center" }
);

doc.text(
  "DARPAN ID: BR/2023/0343963",
  105,
  35,
  { align: "center" }
);

doc.text(
  "Trust PAN: AAJTA9323K",
  105,
  41,
  { align: "center" }
);

doc.text(
  "www.ajftrust.org | info@ajftrust.org",
  105,
  48,
  { align: "center" }
);

// Receipt Title
doc.setFillColor(212, 175, 55);

doc.roundedRect(
  20,
  58,
  170,
  12,
  2,
  2,
  "F"
);

doc.setTextColor(255,255,255);

doc.text(
  "OFFICIAL DONATION RECEIPT",
  105,
  66,
  { align: "center" }
);

doc.setTextColor(0,0,0);

// Receipt Details
doc.setFontSize(11);

doc.text(
  `Receipt No: ${donor.receipt_no}`,
  20,
  85
);

doc.text(
  `Date: ${new Date(
    donor.created_at
  ).toLocaleDateString("en-IN")}`,
  130,
  85
);

doc.text(
  `Received From: ${donor.donor_name}`,
  20,
  98
);

// Amount Box
doc.setFillColor(240,248,255);

doc.roundedRect(
  20,
  108,
  170,
  28,
  3,
  3,
  "F"
);

doc.setFontSize(22);

doc.text(
  `₹ ${donor.amount}`,
  105,
  122,
  { align: "center" }
);

doc.setFontSize(10);

doc.text(
  "(Donation Amount)",
  105,
  130,
  { align: "center" }
);

// Donation Details
doc.setFontSize(11);

doc.text(
  `Purpose: ${donor.donation_type}`,
  20,
  150
);

doc.text(
  "Payment Mode: Online Transfer",
  20,
  160
);

doc.text(
  `UTR / Transaction No: ${donor.payment_id}`,
  20,
  170
);

doc.text(
  `Email: ${donor.donor_email}`,
  20,
  180
);

doc.text(
  `Mobile: ${donor.donor_mobile}`,
  20,
  190
);

doc.text(
  `Address: ${donor.address}`,
  20,
  200
);

// Declaration
doc.setFontSize(9);

doc.text(
  `Received with thanks from ${donor.donor_name}


towards donation to Anand Jivan Foundation Trust.`,
20,
220
);


doc.text(
  `Income Tax Benefit:


Donation eligible under Section 80G
subject to applicable rules.`,
20,
240
);

// Signature
doc.text(
  "For Anand Jivan Foundation Trust",
  125,
  265
);

doc.line(
  125,
  275,
  180,
  275
);

doc.text(
  "Authorized Signatory",
  135,
  282
);

const pdfBuffer = Buffer.from(
  doc.output("arraybuffer")
);

return new Response(
  pdfBuffer,
  {
    headers: {
      "Content-Type":
        "application/pdf",

      "Content-Disposition":
        `attachment; filename=${donor.receipt_no}.pdf`,
    },
  }
);


} catch (error) {

console.error(error);

return new Response(
  "Failed to generate receipt",
  { status: 500 }
);

}
}
