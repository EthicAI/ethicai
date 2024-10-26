"use client";


export const enviarPergunta = async (text, callback=(response)=>{}) => {
    if (!text) return;

    // Make a request to the /classify route on the server.
    const result = await fetch(
      `/api/transformers?text=${encodeURIComponent(text)}`
    );

    const json = await result.json();

    console.log(json);
  };
