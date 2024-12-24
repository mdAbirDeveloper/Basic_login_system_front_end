import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Navber = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  // Check user status on mount
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.reload();
  };

  return (
    <div>
      <div className="flex justify-between">
        <ul className="flex w-1/2 justify-around h-16">
          <li className="my-auto uppercase font-serif text-2xl hover:bg-black hover:text-blue-700">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="my-auto uppercase font-serif text-2xl hover:bg-black hover:text-blue-700">
            <Link href={"/"}>Fashion</Link>
          </li>
          <li className="my-auto uppercase font-serif text-2xl hover:bg-black hover:text-blue-700">
            <Link href={"/"}>Beauty</Link>
          </li>
          <li className="my-auto uppercase font-serif text-2xl hover:bg-black hover:text-blue-700">
            <Link href={"/"}>About</Link>
          </li>
        </ul>
        <div>
          <ul className="h-16">
            {isLoggedIn ? (
              <li
                onClick={handleLogout}
                className="pt-4 uppercase font-serif text-2xl hover:bg-black text-red-600 cursor-pointer"
              >
                Logout
              </li>
            ) : (
              <li className="pt-4 uppercase font-serif text-2xl hover:bg-black text-blue-600">
                <Link href={"/components/login"}>Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
