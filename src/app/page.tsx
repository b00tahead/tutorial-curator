import Topic from "@/components/Topic";
import Tutorial from "@/components/Tutorial";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="flex justify-center py-8 border-b">
        <h1 className="text-3xl font-bold">Code Tuts</h1>
      </header>
      <div className="p-16">
        <div className="flex justify-center mb-16">
          <input
            className="bg-transparent border border-white py-2 px-4 placeholder:text-slate-300 w-1/4"
            type="text"
            placeholder="Search tutorials..."
          />
        </div>

        <div className="flex items-center justify-center gap-x-8">
          <h2 className="text-xl font-semibold">Topics</h2>
          <div>
            <ul className="flex gap-x-8">
              <Topic topic="Python" />
              <Topic topic="Rust" />
              <Topic topic="Go" />
              <Topic topic="JavaScript" />
              <Topic topic="Zig" />
              <Topic topic="Ruby" />
              <Topic topic="PHP" />
              <Topic topic="HTML" />
              <Topic topic="CSS" />
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
