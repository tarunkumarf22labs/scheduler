"use client";

import GenerateButton from "@/components/GenerateButton";
import PreviewModal from "@/components/PreviewModal";
import dynamic from "next/dynamic";
import { useState } from "react";

const Tldraw = dynamic(
  () => import("@tldraw/tldraw").then((value) => value.Tldraw),
  {
    ssr: false,
  }
);

export default function Home() {
  const [html, setHtml] = useState<null | string>(``);

  return (
    <>
      {html && <PreviewModal html={html} setHtml={setHtml} />}

      <main className="w-screen h-screen">
        <Tldraw persistenceKey="tldraw">
          <GenerateButton setHtml={setHtml} />
        </Tldraw>
      </main>
    </>
  );
}
