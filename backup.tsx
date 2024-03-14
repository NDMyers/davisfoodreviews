import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 lg:p-20">

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="left-0 flex h-38 w-full items-end justify-center rounded-lg border border-transparent transition-colors hover:bg-gray-100 dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            rel="noreferrer"
          >
            <Image
              src="/frog.png"
              alt="My Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            <a className="text-lg pl-2 pr-5">Eden Winniford</a>
          </a>
        </div>

        <div className="left-0 top-0 flex flex-row border items-center w-full justify-center bg-gradient-to-b pb-6 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:w-auto lg:rounded-xl lg:dark:bg-zinc-800/30">
          <div className="mb-32 flex text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group px-4 py-5 rounded-lg border border-transparent flex justify-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`text-2xl font-semi transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none`}>
                About{""}
              </h2>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group px-4 py-5 rounded-lg border border-transparent flex transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`text-2xl font-semi transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none`}>
                Work{" "}
              </h2>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group px-4 py-5 rounded-lg border border-transparent flex justify-center transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`text-2xl font-semi transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none`}>
                Resume{" "}
              </h2>
            </a>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="font-semi text-5xl">
          Super Professional Person 
        </h1>
      </div>


    </main>
  );
}
