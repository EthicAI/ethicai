import Groq from 'groq-sdk';

export default class ChatCompletion {

	_parseResponseStream = async (chatCompletionResponse) => {
		let response = [];
		for await (const chunk of chatCompletionResponse) {
			response += chunk.choices[0]?.delta?.content || '';
		}

		return response;
	}

	generate = async task => {
		const grok = new Groq({ apiKey: process.env.GROQ_API_KEY });
		const apiResponse = await grok.chat.completions.create({
			messages: [
				{
					role: "system",
					content: `Se tarefa "${task}" for considerada ética, retorne um passo a passo em tópicos de como posso realizá-la eticamente, caso contrário, retorne uma mensagem de erro.`
				},
				{
					role: "user",
					content: ""
				}
			],
			model: "llama3-8b-8192",
			temperature: 1,
			max_tokens: 1024,
			top_p: 1,
			stream: true,
			stop: null
		});

		return await this._parseResponseStream(apiResponse);
	}

};