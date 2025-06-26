import { type NextRequest, NextResponse } from "next/server";
import type { D1Database } from '@cloudflare/workers-types'
import { cookies } from "next/headers";

export const runtime = "edge";

type Env = {
  DB: D1Database;
};

export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const isAdmin = cookieStore.get("isAdmin");

    if (!isAdmin || isAdmin.value !== "true") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { DB } = process.env as unknown as Env;
    const { results } = await DB.prepare("SELECT * FROM beta_signups").all();
    return NextResponse.json(results);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
