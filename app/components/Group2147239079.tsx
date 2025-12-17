import type { NextPage } from "next";
import Image from "next/image";

const Group2147239079: NextPage = () => {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl bg-darkslateblue text-white">
      <Image
        src="/Mask group.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex-1 max-w-2xl space-y-4">
          <div className="text-4xl leading-tight text-goldenrod sm:text-[50px] sm:leading-[60px]">
            <span>Ready</span>
            <br />
            <span className="text-white">to Get Started?</span>
          </div>
          <p className="text-base leading-6 text-whitesmoke sm:text-lg">
            Don’t wait to seek the justice you deserve. Contact us today to
            schedule your free case evaluation.
          </p>
          <button className="inline-flex w-full items-center justify-center rounded-[10px] bg-goldenrod px-6 py-3 text-center text-lg font-semibold uppercase tracking-[0.1em] text-darkslateblue transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-goldenrod focus-visible:ring-offset-2 focus-visible:ring-offset-darkslateblue sm:w-auto">
            Get A Free Case Review
          </button>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl">
            <Image
              src="/LastSection.png"
              alt="Attorneys ready to help"
              width={419}
              height={281}
              sizes="(min-width: 1024px) 420px, 100vw"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Group2147239079;


