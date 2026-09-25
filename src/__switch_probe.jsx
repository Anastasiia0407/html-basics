// TEMPORARY verification page for the shadcn Switch. Delete after checking.
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import { Switch } from "@/components/ui/switch";

createRoot(document.getElementById("root")).render(
  <div style={{ padding: 40, display: "flex", gap: 24, alignItems: "center" }}>
    <Switch id="a" />
    <Switch id="b" defaultChecked />
    <Switch id="c" size="sm" defaultChecked />
  </div>
);
