import { Rock_Salt } from "next/font/google";
import clsx from "clsx";
import Header from "./components/ui/Header";

const rockSalt = Rock_Salt({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <section className="cover h-screen pt-[30vh]">
          <div className="center-text mx-auto w-[90vw]">
            <h1 className="text-9xl mb-2">
              Your{" "}
              <span className={clsx(rockSalt.className, "ml-4")}>Study</span>{" "}
              Companion
            </h1>
            <h3 className="text-3xl">
              Supercharge your productivity with the power of AI. Get instant
              feedback on your work so you can get the grades you want.
            </h3>
            <button className="text-2xl border-y-2 mt-10 py-2 px-6 rounded-md bg-gradient-to-r from-ecstasy-500 from-50% to-50% to-white-50 bg-right bg-fill transition-all hover:bg-left self-start">
              Try now
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
