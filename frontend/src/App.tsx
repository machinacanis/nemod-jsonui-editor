import { useEffect, useState } from "react";
import { AppService } from "../bindings/github.com/machinacanis/nemod-jsonui-editor";
import { DesignSystem } from "@/pages/DesignSystem";
import { Badge } from "@/components/ui/badge";

function App() {
  const [version, setVersion] = useState<string>("");

  useEffect(() => {
    let alive = true;
    AppService.Version()
      .then((v) => {
        if (alive) setVersion(v);
      })
      .catch(() => {
        // Running in a plain browser (vite dev without the Go side).
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="flex h-full flex-col bg-background text-foreground">
      <header className="flex h-11 shrink-0 items-center gap-3 border-b-2 border-border bg-[var(--chrome)] px-3">
        <span className="text-lg font-semibold tracking-wide">NeMod JSON UI Editor</span>
        <Badge variant="outline" className="border-border text-[var(--text-dimmer)]">
          design system
        </Badge>
        <span className="flex-1" />
        <span className="text-xs text-[var(--text-dimmer)]">OreUI theme</span>
      </header>

      <main className="min-h-0 flex-1 overflow-hidden">
        <DesignSystem />
      </main>

      <footer className="flex h-6 shrink-0 items-center justify-between border-t-2 border-border bg-[var(--chrome)] px-2 text-xs text-[var(--text-dimmer)]">
        <span>Ready</span>
        <span>{version ? `backend v${version}` : "backend offline"}</span>
      </footer>
    </div>
  );
}

export default App;