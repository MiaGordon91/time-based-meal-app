import postgres from "postgres";
import { NextResponse } from "next/server";

if (!process.env.DATABASE_URL || typeof process.env.DATABASE_URL !== "string") {
  throw new Error("DATABASE_URL env variable is not set");
}

const databaseUrl = process.env.DATABASE_URL;

const sql = postgres(databaseUrl);

export async function GET(req: Request) {
  try {

    const { searchParams } = new URL(req.url);

    const inputQuery = searchParams.get("input");

    let userInputArray: string[] = [];

    if(inputQuery !== "" && inputQuery != null){
      userInputArray = inputQuery.split(" ");
    } else {
    //   eslint-disable-next-line no-console
      console.error("Invalid user input");
    }

    const response = await sql`
        SELECT * FROM recipes  
        WHERE name ILIKE ANY (${sql.array(userInputArray.map(word => `%${word}%`))})
        ORDER BY id DESC;
        `;

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
