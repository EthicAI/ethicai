"use client";


export const enviarPergunta = async (text, callback = (response) => { }) => {
  if (!text) return;

  // Make a request to the /classify route on the server.
  const result = await fetch(
    `/api/transformers`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: text }),

    }
  );

  const json = await result.json();

  callback(json);
};
