import postgres from "postgres";
import { NextResponse } from "next/server";

if (!process.env.DATABASE_URL || typeof process.env.DATABASE_URL !== "string") {
  throw new Error("DATABASE_URL env variable is not set");
}

const databaseUrl = process.env.DATABASE_URL;

const sql = postgres(databaseUrl);

const dietaryOptions = ["lactoseIntolerant", "vegetarian", "vegan"] as const;
const timeOptions = ["0", "15", "30", "45", "60"] as const;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url); // creates a URL object that's destructured to access searchParams property

    let time = "20";

    const dietaryQuery = searchParams.get("dietary");

    const dietaryArray = dietaryQuery?.split(",").filter((dietary) => {
      return dietary in dietaryOptions;
    }) || ["none"];

    const timeQuery = searchParams.get("time");

    if (timeQuery != null && timeQuery in timeOptions) {
      time = timeQuery;
    } else {
      // eslint-disable-next-line no-console
      console.error("Invalid time query:", timeQuery);
    }

    // const dietary = searchParams.get("dietary")?.split(",") || [];
    // const time = searchParams.get("time");

    // console.log("Received params:", { dietary, time });

    const response = await sql`
            SELECT * FROM recipes  
            WHERE dietary && ${sql.array(dietaryArray)}
            AND time = ${time}
            ORDER BY id DESC;
        `;

    // Raw SQL Translation example =>
    // SELECT * FROM recipes WHERE dietary && ARRAY['lactoseIntolerant', 'vegetarian'] AND time = '30';`;

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
