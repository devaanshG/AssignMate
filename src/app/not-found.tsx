import { Frown } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden">
        <Frown size={200} className="mb-10 stroke-ecstasy-500"></Frown>
        <h1 className="text-7xl font-semibold">Error 404</h1>
        <h2 className="text-3xl mt-5 font-thin">Page not found</h2>
        <Link href={"/"} className="mt-2 text-ecstasy-400">
          Go back home
        </Link>
      </section>
    </>
  );
}
