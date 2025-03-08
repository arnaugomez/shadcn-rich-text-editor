import { ControlledTextEditor } from "@/components/ui/controlled-text-editor";
import InstallTabs from "@/components/ui/install-tabs";
import { OpenInV0Button } from "@/components/ui/open-in-v0-button";

export default function Home() {
  const componentUrl = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/r/rich-text-editor.json`;
  return (
    <div className="py-10 sm:py-40 px-4">
      <div className="mx-auto max-w-prose">
        <ControlledTextEditor />

        <div className="mt-4 flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-2">
            Made by{" "}
            <a
              href="https://www.arnaugomez.com"
              className="underline hover:text-primary"
            >
              Arnau
            </a>{" "}
            using the{" "}
            <a
              href="https://www.tiptap.dev"
              className="underline hover:text-primary"
            >
              Tiptap editor
            </a>
          </h2>

          <OpenInV0Button componentUrl={componentUrl} className="w-fit" />
        </div>

        <div className="mt-4">
          <InstallTabs componentUrl={componentUrl} />
        </div>
      </div>
    </div>
  );
}
