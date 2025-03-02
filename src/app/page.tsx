"use client";

import { RichTextEditor } from "@/components/ui/rich-text-editor";

export default function Home() {
  return (
    <div className="py-40 px-4">
      <div className="mx-auto max-w-prose">
        <RichTextEditor placeholder="Write something..." />
      </div>
    </div>
  );
}
