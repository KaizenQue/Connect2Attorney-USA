import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#162766]  flex items-center justify-center ">
      <Image
        src="/not-found.svg"
        alt="Page not found"
        width={1200}
        height={800}
        priority
        className="w-full h-full"
      />
    </div>
  );
}
