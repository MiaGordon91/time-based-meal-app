import postgres from "postgres";
import { NextResponse } from "next/server";


const sql: postgres.Sql = postgres(process.env.DATABASE_URL);
  
export async function GET(req: Request){

    try {
        const {searchParams} = new URL(req.url); // creates a URL object that's destructured to access searchParams property
        const dietary = searchParams.get("dietary")?.split(",") || [];
        const time = searchParams.get("time");     

        console.log("Received params:", { dietary, time });

        const response = await sql`
            SELECT * FROM recipes  
            WHERE ${dietary.length > 0 ? sql`dietary && ${sql.array(dietary)}` : sql`TRUE`}
            AND ${time ? sql`time = ${time}` : sql`TRUE`}
            ORDER BY id DESC;
        `;

        // Raw SQL Translation example => 
        // SELECT * FROM recipes 
        // WHERE dietary && ARRAY['lactoseIntolerant', 'vegetarian'] AND time = '30';`;

        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({error: "Database error"}, {status: 500});
    }
}
    