import { NextRequest, NextResponse } from "next/server";
import { db } from "./server/db";

// runs on edge since next v7 (the version middlewares  were introduced)
const middelware = async (req: NextRequest) => {
  // crash!
  const query = await db.post.findMany();
  return NextResponse.next();
}

export default middelware;
