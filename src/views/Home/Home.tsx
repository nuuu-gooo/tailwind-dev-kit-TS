import { useEffect } from "react";
import { axiosInstance } from "@src/utils/publicAxios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-[blue]">GENERAL DEV KIT-TS</h1>
    </div>
  );
}
