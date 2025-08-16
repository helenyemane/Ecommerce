'use client';

import Image from "next/image";

export default function Arrivals() {
  return (
    <main className="bg-white flex items-center justify-center py-8 px-2">
      <div className="grid grid-cols-2 gap-6 max-w-6xl w-full">
        { }
        <div className="relative rounded-lg overflow-hidden bg-black h-[640px]"> { }
          <Image
            src="/pictures/playstation5.png"
            alt="PlayStation 5"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute left-7 bottom-10 z-10 text-white">
            <h2 className="text-2xl font-semibold mb-2">PlayStation 5</h2>
            <p className="mb-5 text-base">
              Black and White version of the PS5<br />coming out on sale.
            </p>
            <button className="border-b border-white text-white text-lg font-medium pb-1 hover:opacity-80">
              Shop Now
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-5" />
        </div>

        { }
        <div className="flex flex-col gap-6 h-[640px]"> { }
          { }
          <div className="relative rounded-lg overflow-hidden bg-black flex-1 min-h-[310px]">
            <Image
              src="/pictures/girl.jpg"
              alt="Women's Collections"
              layout="fill"
              objectFit="cover"
              className="z-0"
              priority
            />
            <div className="absolute left-7 bottom-10 z-10 text-white">
              <h2 className="text-2xl font-semibold mb-2">Women’s Collections</h2>
              <p className="mb-5 text-base w-[280px]">
                Featured woman collections that<br />give you another vibe.
              </p>
              <button className="border-b border-white text-white text-lg font-medium pb-1 hover:opacity-80">
                Shop Now
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/30 to-transparent z-5" />
          </div>
          { }
          <div className="flex gap-6 flex-1 min-h-[310px]">
            { }
            <div className="relative rounded-lg overflow-hidden bg-black flex-1 min-w-0">
              <Image
                src="/pictures/speaker.png"
                alt="Speakers"
                layout="fill"
                objectFit="cover"
                className="z-0"
                priority
              />
              <div className="absolute left-7 bottom-10 z-10 text-white">
                <h2 className="text-2xl font-semibold mb-2">Speakers</h2>
                <p className="mb-5 text-base">Amazon wireless speakers</p>
                <button className="border-b border-white text-white text-lg font-medium pb-1 hover:opacity-80">
                  Shop Now
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-5" />
            </div>
            { }
            <div className="relative rounded-lg overflow-hidden bg-black flex-1 min-w-0">
              <Image
                src="/pictures/gucci.png"
                alt="Perfume"
                layout="fill"
                objectFit="cover"
                className="z-0"
                priority
              />
              <div className="absolute left-7 bottom-10 z-10 text-white">
                <h2 className="text-2xl font-semibold mb-2">Perfume</h2>
                <p className="mb-5 text-base">GUCCI INTENSE OUD EDP</p>
                <button className="border-b border-white text-white text-lg font-medium pb-1 hover:opacity-80">
                  Shop Now
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-5" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}