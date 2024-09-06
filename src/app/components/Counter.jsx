"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCounter] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCounter(count + 1);
        }}
        className="border p-2 bg-slate-600"
      >
        Click {count} times
      </button>
    </>
  );
}
