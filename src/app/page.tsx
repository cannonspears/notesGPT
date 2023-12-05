import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="notesGPT logo" width={100} height={100} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          notesGPT
        </span>
      </div>
      <div className="max-w-prose text-center">
        <p>A powerful note-taking app with AI integration.</p>
        <p>
          Built with OpenAI, Pinecone, Next.js, Shadcn UI, Clerk, and MongoDB.
        </p>
      </div>
    </main>
  );
}
