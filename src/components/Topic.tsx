export default function Topic({ topic }: { topic: string }) {
  return (
    <span className="border py-1 px-2 border-dotted text-xs border-emerald-400 text-emerald-400 hover:bg-emerald-950">
      {topic}
    </span>
  )
}
