export default function Topic({ topic }: { topic: string }) {
  return (
    <li className="border py-2 px-4 border-emerald-400 text-emerald-400 hover:bg-emerald-950">
      {topic}
    </li>
  );
}
