import { Kbd } from "@/components/ui/kbd";

export default function KbdDemo() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd>
      </div>
      <div>
        <Kbd variant="outline">⌘</Kbd> + <Kbd variant="outline">Shift</Kbd>
      </div>
    </div>
  );
}
