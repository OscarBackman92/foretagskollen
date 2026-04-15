import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return Response.json({ error: "Ogiltigt prompt." }, { status: 400 });
    }

    const message = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    });

    const text = message.content[0]?.text ?? "";
    return Response.json({ text });
  } catch (error) {
    console.error("API error:", error);
    return Response.json(
      { error: "Kunde inte generera text. Försök igen." },
      { status: 500 }
    );
  }
}
