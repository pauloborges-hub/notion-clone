'use client'

import LoadingSpinner from "./LoadingSpinner";
import {
   ClientSideSuspense,
   RoomProvider as RoomProviderWraper,
} from "@liveblocks/react/suspense";

function RoomProvider({ roomId, children }: {
   roomId: string;
   children: React.ReactNode;
}) {
   return (
      <RoomProviderWraper
         id={roomId}
         initialPresence={{
            cursor: null
         }}
      >
         <ClientSideSuspense fallback={<LoadingSpinner />}>
            <LiveCursorProvider>
               {children}
            </LiveCursorProvider>
         </ClientSideSuspense>
      </RoomProviderWraper>
   )
}
export default RoomProvider