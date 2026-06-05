import { NextResponse } from "next/server";
import { db } from "../../../lib/db";

export async function POST(req: Request) {
try {
const data = await req.json();


const receiptNo =
  "AJF-" +
  new Date().getFullYear() +
  "-" +
  Date.now();

await db.query(
  `INSERT INTO donors
  (
    receipt_no,
    payment_id,
    donor_name,
    donor_email,
    donor_mobile,
    address,
    amount,
    donation_type
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  [
    receiptNo,
    data.paymentId,
    data.donorName,
    data.donorEmail,
    data.donorMobile,
    data.address,
    data.amount,
    data.donationType,
  ]
);

return NextResponse.json({
  success: true,
  receiptNo,
});


} catch (error) {
console.error(error);

return NextResponse.json(
  {
    success: false,
    message: "Failed to save donor",
  },
  {
    status: 500,
  }
);

}
}
