import { NextResponse, type NextRequest } from "next/server";
import { getFronttasteStyle } from "@/lib/fronttaste";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const style = getFronttasteStyle(slug);

  if (!style) {
    return NextResponse.json({ error: "Download is not available for this style." }, { status: 404 });
  }

  return NextResponse.redirect(new URL(`/downloads/${style.slug}.skill.zip`, request.url));
}
