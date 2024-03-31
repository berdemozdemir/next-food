import ImageSlide from "@/components/image-slide/image-slide";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex flex-col md:flex-row gap-12 mx-auto w-11/12 max-w-6xl my-12">
        <div className="w-[40rem] h-[25rem]">
          <ImageSlide />
          {/* <Image width={512} height={512} src={"/burger.jpg"} alt="alt" /> */}
        </div>

        <div className="my-auto">
          <div className="text-ddd6cb text-xl space-y-8">
            <h1 className="text-4xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>

            <p className="text-white">
              Taste & share food from all over the world.
            </p>
          </div>

          <div className="flex gap-4 text-xl mt-4">
            <Link
              href="/community"
              className="block mt-4 py-2 px-4 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:-translate-y-0.5 hover:translate-x-0.5 duration-150 hover:opacity-75"
            >
              Join the Community
            </Link>

            <Link
              href="/meals"
              className="block mt-4 py-2 px-4 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:-translate-y-0.5 hover:translate-x-0.5 duration-150 hover:opacity-75"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-4">
        <section className="flex flex-col text-[#ddd6cb] text-xl mx-auto w-11/12 max-w-2xl my-8 text-center gap-6">
          <h2>How it works</h2>

          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It's a place to discover new dishes, and to
            connect with other food lovers.
          </p>

          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-xl mx-auto w-11/12 max-w-3xl my-8 text-center gap-6">
          <h2>Why NextLevel Food?</h2>

          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It's a place to discover new dishes, and to
            connect with other food lovers.
          </p>

          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
