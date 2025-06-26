import { type NextRequest, NextResponse } from "next/server";
import type { D1Database } from '@cloudflare/workers-types'
import { getCloudflareContext } from '@opennextjs/cloudflare'
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const isAdmin = cookieStore.get("isAdmin");

    if (!isAdmin || isAdmin.value !== "true") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

	  // @ts-ignore - D1 binding is available in Cloudflare Workers
	  const db = getCloudflareContext().env.DB as D1Database
    const { results } = await db.prepare("SELECT * FROM beta_signups").all();
    return NextResponse.json(results);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
