const CLASSES = [
  "w-full",
  "font-sans text-sm text-white",
  "bg-pink-700 hover:bg-pink-800",
  "border border-solid border-pink-700 hover:border-pink-800",
  "rounded-lg p-2 cursor-pointer",
].join(" ");

export default function Button({ children }) {
  return <button className={CLASSES}>{children}</button>;
}
