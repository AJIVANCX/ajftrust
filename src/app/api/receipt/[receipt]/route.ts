import { redirect } from "next/navigation";

export async function GET(
  req: Request,
  { params }: any
) {
  return Response.redirect(
    new URL(
      `/api/download-receipt?receipt=${params.receipt}`,
      req.url
    )
  );
}