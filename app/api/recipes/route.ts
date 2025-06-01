/* eslint-disable no-console */
import postgres from "postgres";
import { NextResponse } from "next/server";

if (!process.env.DATABASE_URL || typeof process.env.DATABASE_URL !== "string") {
  throw new Error("DATABASE_URL env variable is not set");
}

const databaseUrl = process.env.DATABASE_URL;

const sql = postgres(databaseUrl);

const dietaryOptions = ["lactoseIntolerant", "vegetarian", "vegan", "glutenFree", "none"] as const;
const timeOptions = ["0", "20", "30", "45", "60"] as const;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url); // creates a URL object that's destructured to access searchParams property

    const dietaryQuery = searchParams.get("dietary") ?? "none";

    const dietaryArray: string[] = dietaryQuery?.split(",").filter((dietary) => 
        dietaryOptions.includes(dietary as typeof dietaryOptions[number])
    ) || ["none"] as string[];

    const timeQuery = searchParams.get("time") ?? "0";
    
    let time = "0";

    if (timeQuery != null && timeOptions.includes(timeQuery as typeof timeOptions[number])) {
      time = timeQuery;
    } else {
      // eslint-disable-next-line no-console
      console.error("Invalid time query:", timeQuery);
    }

    let response;   
    
    if (!dietaryArray.includes("none") && time != "0") {
       response = await sql`
        SELECT * FROM recipes  
        WHERE dietary && ${dietaryArray}
        AND time = ${time}
        ORDER BY id DESC;`;
    } else if (dietaryArray.includes("none")) {
       response = await sql`
        SELECT * FROM recipes  
        WHERE time = ${time}
        ORDER BY id DESC LIMIT 4;`;
    } else {
        response = await sql`
        SELECT * FROM recipes  
        WHERE dietary && ${dietaryArray}
        ORDER BY RANDOM() LIMIT 3;`;
    }

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
