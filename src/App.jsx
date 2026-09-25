import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import LessonCard from "./components/LessonCard.jsx";

export default function App() {
  // read the starting theme from <html>, which index.html sets
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  function handleThemeChange(checked) {
    setIsDark(checked);
    document.documentElement.classList.toggle("dark", checked);
  }

  return (
    <>
      <div className="flex items-center justify-end gap-2 p-4 font-sans text-sm text-foreground">
        <label htmlFor="theme-toggle">Dark mode</label>
        <Switch
          id="theme-toggle"
          checked={isDark}
          onCheckedChange={handleThemeChange}
        />
      </div>
      <main>
        <section className="lessons" aria-label="Lessons">
          <LessonCard
            variant="html"
            title="HTML Basics"
            description="Learn the building blocks of the web with HTML. This lesson covers elements, attributes, and how to structure a webpage from scratch."
            chip="Code"
            dueDate="Sep 1"
            isDone
          />
          <LessonCard
            variant="css"
            title="CSS Basics"
            description="Style and layout your webpages with CSS. This lesson covers selectors, properties, the box model, and how to bring your designs to life."
            chip="Code"
            dueDate="Sep 1"
            price="$19"
          />
          <LessonCard
            variant="html"
            title="HTML Basics"
            description="Learn the building blocks of the web with HTML. This lesson covers elements, attributes, and how to structure a webpage from scratch."
            chip="Code"
            dueDate="Sep 1"
            price="$19"
          />
        </section>
      </main>
    </>
  );
}
