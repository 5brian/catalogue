import React from "react";
import { useRouter } from "next/navigation";

const Back: React.FC = () => {
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
