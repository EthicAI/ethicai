"use client";

import { useState } from "react";

export default function TestTransformersJs() {
  const [result, setResult] = useState(null);

  const classify = async (text) => {
    if (!text) return;

    // Make a request to the /classify route on the server.
    const result = await fetch(
      `/api/hello-transformers?text=${encodeURIComponent(text)}`
    );

    const json = await result.json();

    console.log(json);

    setResult(json);
  };

  return (
    <div onClick={() => classify("Hello, world!")}>
      <h1>TestTransformersJs</h1>

      <p>Click me to classify the text `Hello, world!`</p>

      {result && (
        <pre className="text-xs text-left whitespace-pre-wrap">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
