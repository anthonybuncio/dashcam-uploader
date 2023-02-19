import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = ({}) => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
      <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-car-crash mr-2 h-6 text-black sm:h-9"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M7 6l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-5m0 -6h8m-6 0v-5m2 0h-4"></path>
            <path d="M14 8v-2"></path>
            <path d="M19 12h2"></path>
            <path d="M17.5 15.5l1.5 1.5"></path>
            <path d="M17.5 8.5l1.5 -1.5"></path>
          </svg>
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            StreetLens
          </span>
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Houston
          </span>
        </Link>
        <div className="mt-2 sm:mt-0 sm:flex md:order-2">
          {/* <!-- Login Button --> */}
          {session ? (
            <HeaderUser user={session.user} />
          ) : (
            <>
              <button
                type="button"
                className="rounde mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none md:inline-block rounded-lg"
                onClick={() => signIn()}
              >
                Login
              </button>
              <button
                type="button"
                className="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none md:mr-0 md:inline-block rounded-lg"
                onClick={() => signIn()}
              >
                Register
              </button>
            </>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
            <li>
              <Link
                href="/"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/videos"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                href="/upload"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Upload
              </Link>
            </li>
            <li>
              <Link
                href="/request"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
              >
                Request
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const HeaderUser = ({ user }) => {
  const [userMenu, setUserMenu] = useState(false);
  return (
    <>
      <div
        className="inline-flex items-stretch bg-white"
        onClick={() => setUserMenu(!userMenu)}
      >
        <div className="relative">
          <button
            type="button"
            className="group flex shrink-0 items-center rounded-lg transition"
          >
            <span className="sr-only">Menu</span>
            <div className="h-10 w-10 object-cover">
              <Image
                src={user.image}
                alt="profile"
                height={100}
                width={100}
                className="rounded-full"
              />
            </div>

            <p className="ml-2 hidden text-left text-xs sm:block">
              <strong className="block font-medium">{user.name}</strong>

              <span className="text-gray-500"> {user.email} </span>
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          {userMenu && (
            <div
              className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
              role="menu"
            >
              <div className="p-2">
                <Link
                  href="/account"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Account
                </Link>

                <Link
                  href="/messages"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Messages
                </Link>

                <Link
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout
                </Link>

                <form method="POST" action="#">
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    role="menuitem"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete Account
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
