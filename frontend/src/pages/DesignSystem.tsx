import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-2 border-border bg-card p-3">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--text-dimmer)]">
        {title}
      </h2>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </section>
  );
}

export function DesignSystem() {
  const [checked, setChecked] = useState(true);
  const [switched, setSwitched] = useState(true);
  const [tab, setTab] = useState("attributes");

  return (
    <TooltipProvider delayDuration={150}>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-3 p-3">
          <Section title="Buttons">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </Section>

          <Section title="Inputs">
            <div className="grid w-full max-w-sm gap-1.5">
              <Label htmlFor="name">Display name</Label>
              <Input id="name" placeholder="namespace.control" />
            </div>
            <div className="grid w-full max-w-sm gap-1.5">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Optional notes" className="min-h-16" />
            </div>
            <Select defaultValue="new-york">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="classic">Classic</SelectItem>
                <SelectItem value="oreui">OreUI</SelectItem>
              </SelectContent>
            </Select>
          </Section>

          <Section title="Selection">
            <label className="flex items-center gap-2 text-sm">
              <Checkbox checked={checked} onCheckedChange={(v) => setChecked(v === true)} />
              Custom control
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Switch checked={switched} onCheckedChange={setSwitched} />
              Bindings enabled
            </label>
          </Section>

          <Section title="Feedback">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Error</Badge>
            <Badge variant="outline">Outline</Badge>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" size="sm">
                  Hover me
                </Button>
              </TooltipTrigger>
              <TooltipContent>OreUI tooltip surface</TooltipContent>
            </Tooltip>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog</DialogTitle>
                  <DialogDescription>
                    OreUI-style modal surface, 320–600px wide.
                  </DialogDescription>
                </DialogHeader>
                <Separator />
                <DialogFooter>
                  <Button variant="secondary">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Workspace</DropdownMenuLabel>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Rename</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Section>

          <Section title="Navigation">
            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <TabsList>
                <TabsTrigger value="attributes">Attributes</TabsTrigger>
                <TabsTrigger value="bindings">Bindings</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="attributes" className="pt-2 text-sm text-[var(--text-dim)]">
                Control attributes are edited as plain JSON.
              </TabsContent>
              <TabsContent value="bindings" className="pt-2 text-sm text-[var(--text-dim)]">
                Bindings resolve against the active namespace.
              </TabsContent>
              <TabsContent value="preview" className="pt-2 text-sm text-[var(--text-dim)]">
                Preview renders the control tree with resolved variables.
              </TabsContent>
            </Tabs>
          </Section>
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
}