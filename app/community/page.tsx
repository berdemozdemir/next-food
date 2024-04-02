import Image from "next/image";

import mealIcon from "/public/meal.png";
import communityIcon from "/public/community.png";
import eventsIcon from "/public/events.png";

export default function CommunityPage() {
  return (
    <>
      <header className="space-y-12 mx-auto mt-12 mb-20 w-11/12 max-w-6xl text-2xl text-center">
        <h1 className="font-sans text-5xl font-bold m-0 text-[#ddd6cb]">
          One shared passion: <span className="text-highlight">Food</span>
        </h1>

        <p className="font-sans text-3xl font-bold m-0 text-[#ddd6cb]">
          Join our community and share your favorite recipes!
        </p>
      </header>

      <main className="w-11/12 max-w-2xl my-0 mx-auto text-center">
        <h2 className="font-sans text-2xl mb-12 text-[#ddd6cb]">
          Community Perks
        </h2>

        <ul className="my-12 mx-0 p-0">
          <li className="flex flex-col items-center gap-8">
            <Image
              className="w-32 h-32 object-contain"
              src={mealIcon}
              alt="A delicious meal"
            />

            <p className="font-sans text-2xl font-bold m-0 text-[#ddd6cb]">
              Share & discover recipes
            </p>
          </li>

          <li className="flex flex-col items-center gap-8">
            <Image
              className="w-32 h-32 object-contain"
              src={communityIcon}
              alt="A crowd of people, cooking"
            />

            <p className="font-sans text-2xl font-bold m-0 text-[#ddd6cb]">
              Find new friends & like-minded people
            </p>
          </li>

          <li className="flex flex-col items-center gap-8">
            <Image
              className="w-32 h-32 object-contain"
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />

            <p className="font-sans text-2xl font-bold m-0 text-[#ddd6cb]">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
