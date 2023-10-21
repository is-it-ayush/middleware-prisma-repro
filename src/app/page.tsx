import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {

  return (
    <main className="flex min-h-screen">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      </div>
    </main>
  );
}
