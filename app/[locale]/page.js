import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/26/f7/54/caption.jpg"
        }
        alt="soxom mehdiya"
        width={100}
        height={20}
      />
    </main>
  );
}
