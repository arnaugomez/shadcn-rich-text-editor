"use client";

import { OpenInV0Button } from "@/components/ui/open-in-v0-button";
import { RichTextEditor } from "@/registry/new-york/rich-text-editor/rich-text-editor";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(
    `<h2 style="text-align: center">Welcome to shadcn/ui rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a target="_blank" rel="noopener noreferrer" href="https://tiptap.dev/">Tiptap.dev</a> and supports all of its features:</p><ul><li><p>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s></p></li><li><p>Headings (h1-h6)</p></li><li><p>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</p></li><li><p>Ordered and bullet lists</p></li><li><p>Text align&nbsp;</p></li><li><p>And all <a target="_blank" rel="noopener noreferrer" href="https://tiptap.dev/extensions">other extensions</a></p></li></ul>`
  );
  return (
    <div className="py-10 sm:py-40 px-4">
      <div className="mx-auto max-w-prose">
        <RichTextEditor
          placeholder="This is a placeholder, write something…"
          value={value}
          onChange={setValue}
        />
        <div className="mt-4 flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-2">
            Made by <a href="https://www.arnaugomez.com" className="underline hover:text-primary">Arnau</a> using the{" "}
            <a href="https://www.tiptap.dev" className="underline hover:text-primary">Tiptap editor</a>
          </h2>
          <OpenInV0Button name="rich-text-editor" className="w-fit" />
        </div>
      </div>
    </div>
  );
}
