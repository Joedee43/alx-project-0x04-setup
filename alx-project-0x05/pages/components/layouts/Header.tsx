// src/components/layout/Header.tsx

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";
import Button from "../common/Button";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { count } = useCount();

  return (
    // Add z-10 here to ensure the header stays on top
    <header className="fixed w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
        </Link>

        <div className="flex gap-4">
          
            <p className="font-semibold text-lg text-black">Header Count: {count}</p>
          
            <>
              <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
              <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
            </>

        </div>
      </div>
    </header>
  );
};

export default Header;