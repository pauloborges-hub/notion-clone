'use client'

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Breadcrumbs from "./Breadcrumbs";

function Header() {
   const { user } = useUser();

   return (
      <div className="flex items-center justify-between p-5">
         {/* If the user exists, render the following: */}
         {user && (
            <h1 className="text-2xl">
               {user?.firstName}
               {`'s`} Space
            </h1>
         )}

         {/* Breadcrumbs */}
         <Breadcrumbs />

         <div>
            {/* Wrapper components from Clerk, for signed in/off status */}
            <SignedOut>
               <SignInButton />
            </SignedOut>

            <SignedIn>
               <UserButton />
            </SignedIn>
         </div>
      </div>
   )
}
export default Header;