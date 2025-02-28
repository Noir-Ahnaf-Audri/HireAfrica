import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <nav className="px-4 py-4 flex justify-between items-center">
        <Link>
          <img src="./compLogo.png" className="h-10" />
        </Link>
        <Button>Sign In</Button>
        {/*<SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>*/}
      </nav>
    </>
  );
};

export default Header;
