import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
    // extract the prompt from the body
    const { prompt } = await req.json();

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        messages: [
            {
                role: "system",
                content: `You are a helpful AI embedded in a blogbox technical blogging app that is used to autocomplete sentences
            The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
        AI is a well-behaved and well-mannered individual.
        AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.`,
            },
            {
                role: "user",
                content: `
        I am writing a piece of text in blogbox technical blogging app.
        Help me complete my train of thought here: ##${prompt}##
        keep the tone of the text consistent with the rest of the text.
        keep the response short and sweet.
        `,
            },
        ],
        max_tokens: 200,
        stream: true,
    });
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
}
