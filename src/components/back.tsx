"use client";

import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();

  return (
    <span
      onClick={() => router.push("/")}
      className="text-white cursor-pointer mr-2"
    >
      ←
    </span>
  );
};

export default Back;
