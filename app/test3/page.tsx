import Counter from "./Counter";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div>
        <h1>Test 3</h1>
        <p>Now: {`${new Date()}`}</p>
        <p>Now (DB): <Suspense><Counter /></Suspense></p>
    </div>
  );
}