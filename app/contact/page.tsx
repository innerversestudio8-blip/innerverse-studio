import { Suspense } from "react";
import ContactClient from "./ContactClient";

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: 40 }}>Loading...</div>}>
      <ContactClient />
    </Suspense>
  );
}