import Image from "next/image";
import Home from "@/components/home/home";

export default function Page() {
  // Renamed the default export
  return (
    <main>
      <div>
        <Home />
      </div>
    </main>
  );
}
