import { signIn, signOut, useSession } from "next-auth/react";

export default function Request() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="flex m-30">
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="mt-30">
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  );
}
