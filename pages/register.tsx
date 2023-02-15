import Footer from "@/components/Footer";
import Link from "next/link";

export default function Register() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    console.log(data);

    try {
      let response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify({
          email: event.target.email.value,
          password: event.target.password.value,
          firstName: event.target.first.value,
          lastName: event.target.last.value,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      response = await response.json();

      console.log(response);
    } catch (errorMessage: any) {
      console.log(errorMessage);
    }
    // // Send the data to the server in JSON format.
    // const JSONdata = JSON.stringify(data)

    // // API endpoint where we send form data.
    // const endpoint = '/api/form'

    // // Form the request for sending data to the server.
    // const options = {
    //   // The method is POST because we are sending data.
    //   method: 'POST',
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // Body of the request is the JSON data we created above.
    //   body: JSONdata,
    // }

    // // Send the form data to our forms API on Vercel and get a response.
    // const response = await fetch(endpoint, options)

    // // Get the response data from server as JSON.
    // // If server returns the name submitted, that means the form works.
    // const result = await response.json()
    // alert(`Is this your full name: ${result.data}`)
  };

  return (
    <>
      <section className=" py-20 bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
              <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                Create a new account
              </div>
              <div className="flex items-center justify-center mt-2">
                <Link
                  href="/login"
                  className="inline-flex items-center text-sm text-center text-gray-400 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
                >
                  <span>Already have an account? Sign in.</span>
                </Link>
              </div>
              <div className="p-6 mt-8">
                <form onSubmit={handleSubmit}>
                  <div className="flex gap-4 mb-2">
                    <div className=" relative ">
                      <input
                        type="text"
                        id="create-account-first-name"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="first"
                        placeholder="First name"
                      />
                    </div>
                    <div className=" relative ">
                      <input
                        type="text"
                        id="create-account-last-name"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="last"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-2">
                    <div className=" relative ">
                      <input
                        type="text"
                        id="create-account-email"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-2">
                    <div className=" relative ">
                      <input
                        type="password"
                        id="create-account-password"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-2">
                    <div className=" relative ">
                      <input
                        type="password"
                        id="create-account-password2"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="password_confirm"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>
                  <div className="flex w-full my-4">
                    <button
                      type="submit"
                      className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
