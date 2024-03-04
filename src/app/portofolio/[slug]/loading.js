import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-full">
      <Image
        src="/logo.png"
        className="size-24 object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse "
        width={200}
        height={300}
        alt=""
        style={{ width: "300", height: "300" }}
      />
    </div>
  );
}
