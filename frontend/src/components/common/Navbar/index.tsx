"use client";

import React, { useState } from "react";

// Next
import Link from "next/link";
import { useRouter } from "next/navigation";

// Clerk
import { useClerk } from "@clerk/nextjs";

// React Icons
import { FaGears } from "react-icons/fa6";
import { MdAccountCircle, MdDynamicForm } from "react-icons/md";
import { LogOut, User } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import { FaSearch, FaTools } from "react-icons/fa";
import { TbSettingsCog } from "react-icons/tb";

// Cookie
import cookies from "js-cookie";

// Components
import Input from "@/components/FormElements/Input/ControlledInput";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/FormElements/DropdownMenu";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/FormElements/Select";
import Button from "../Button";

type NavbarProps = {
  listingOptions?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ listingOptions = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { signOut } = useClerk();
  const { push } = useRouter();

  const handleSignOut = () => {
    cookies.set("__client_uat", "0");
    cookies.remove("__session");
    signOut({ redirectUrl: "/login" });
    push("/login");
  };

  return (
    <section className="flex items-center justify-center border-b-[1px] border-gray-300">
      <div className="max-w-[1900px] w-full mx-auto flex items-center justify-between px-5 py-7">
        <article className="flex items-center gap-2 ">
          <div className="flex items-center gap-3">
            <Link href="/">
              <h1 className="text-2xl font-bold text-green-500 flex items-center gap-2">
                AV{" "}
                <span className="text-gray-600 flex items-center gap-2">
                  Gear
                </span>
                <i>
                  <FaGears />
                </i>
              </h1>
            </Link>
          </div>
        </article>

        <article className="flex items-center gap-4">
          {listingOptions && (
            <div>
              <DropdownMenu
                onOpenChange={(isOpen) => setIsOpen(isOpen)}
                open={isOpen}
              >
                <DropdownMenuTrigger asChild>
                  <span>
                    <Button
                      variant="grey"
                      size="sm"
                      iconEnd={<IoIosArrowDown />}
                      iconStart={<FaTools />}
                      className="rounded-full"
                    >
                      Tools
                    </Button>
                  </span>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className={`bg-white shadow-lg rounded-lg mt-1 w-32 flex gap-2 flex-col overflow-hidden ${
                    isOpen ? "visible" : "hidden"
                  }`}
                >
                  <DropdownMenuItem className="hover:bg-gray-300 cursor-pointer px-3 py-1 outline-none border-none">
                    <Link
                      href="/?modal=quick-add"
                      className="flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <SlEnergy className="h-4 w-4" />
                      <span>Quick</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-300 cursor-pointer px-3 py-1 outline-none border-none">
                    <Link
                      href="/detailed-add"
                      className="flex items-center gap-2"
                    >
                      <MdDynamicForm className="h-4 w-4" />
                      <span>Detailed</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-300 cursor-pointer px-3 py-1 outline-none border-none">
                    <Link
                      href="/customer-location-updater"
                      className="flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <TbSettingsCog className="h-4 w-4" />
                      <span>Manage</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="text-gray-600 cursor-pointer flex items-center justify-center">
                <MdAccountCircle fontSize={40} />
              </span>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white shadow-lg rounded-lg mt-1 w-32 flex gap-2 flex-col overflow-hidden">
              {/* <DropdownMenuItem className="hover:bg-gray-300 cursor-pointer px-3 py-1 outline-none border-none flex items-center gap-2">
                <User className=" h-4 w-4" />

                <span>Profile</span>
              </DropdownMenuItem> */}
              <DropdownMenuItem className="hover:bg-gray-300 cursor-pointer px-3 py-1 outline-none border-none flex items-center gap-2">
                <LogOut className=" h-4 w-4" />

                <button onClick={handleSignOut}>Sign Out</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </article>
      </div>
    </section>
  );
};

export default Navbar;
