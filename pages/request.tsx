import { signIn, signOut, useSession } from "next-auth/react";

export default function Request() {
  return (
    <>
      <div className="mt-16 py-12 bg-gray-100 min-h-screen">
        <h1>request form</h1>
      </div>
    </>
  );
}
