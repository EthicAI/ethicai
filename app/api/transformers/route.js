// Create a custom request handler for the /classify route.
// For more information, see https://nextjs.org/docs/app/building-your-application/routing/router-handlers

import { NextResponse } from "next/server";
import ChatCompletion from "./chatCompletion";

export async function POST(request) {
	const { text } = await request.json();
	if (!text) {
		return NextResponse.json({
			error: "Missing text parameter",
		},
		{ status: 400 });
	}

	const chatCompletion = new ChatCompletion();
	const result = await chatCompletion.generate(text);

	return NextResponse.json(result);
}
