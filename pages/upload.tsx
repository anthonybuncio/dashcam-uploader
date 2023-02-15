import Link from "next/link";

export default function Upload() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const getEpochDate =
      new Date(
        `${event.target.date.value}, ${event.target.time.value}`
      ).getTime() / 1000.0;
    const streetData = [
      event.target.street_1.value,
      event.target.street_2.value,
    ];
    const vehicleData = event.target.vehicles.value.split(",");

    // Get data from the form.
    const data = {
      date: getEpochDate,
      video_url: event.target.video_url.value,
      streets: streetData,
      vehicles: vehicleData,
      submitted_at: Math.floor(new Date().getTime() / 1000.0),
    };

    console.log(data);

    try {
      let response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: JSON.stringify({
          date: getEpochDate,
          video_url: event.target.video_url.value,
          streets: streetData,
          vehicles: vehicleData,
          submitted_at: Math.floor(new Date().getTime() / 1000.0),
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
  };

  return (
    <>
      <div className="flex flex-wrap w-full bg-gray-100">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex flex-col justify-center px-8 py-16 my-auto md:justify-start md:pt-0 md:px-6 lg:px-24">
            <p className="text-3xl text-center">Upload A Video</p>

            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col pt-4">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M16 3l0 4"></path>
                      <path d="M8 3l0 4"></path>
                      <path d="M4 11l16 0"></path>
                      <path d="M11 15l1 0"></path>
                      <path d="M12 15l0 3"></path>
                    </svg>
                  </span>
                  <input
                    type="date"
                    id="design-login-email"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    name="date"
                    placeholder="Date"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-clock"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                      <path d="M12 7l0 5l3 3"></path>
                    </svg>
                  </span>
                  <input
                    type="time"
                    id="design-login-password"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    name="time"
                    placeholder="Time"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4 ">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-link"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
                      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
                    </svg>
                  </span>
                  <input
                    type="url"
                    id="design-login-password"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    name="video_url"
                    placeholder="Google Drive URL"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4 ">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-circle-number-1"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                      <path d="M10 10l2 -2v8"></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="design-login-password"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    name="street_1"
                    placeholder="Street #1"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-circle-number-2"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                      <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="design-login-password"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    name="street_2"
                    placeholder="Street #2"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4 mb-12">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-car"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="design-login-password"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    name="vehicles"
                    placeholder="Vehicles"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2"
              >
                <span className="w-full">Submit</span>
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img
            className="hidden object-cover w-full h-screen md:block opacity-75"
            src="https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          />
        </div>
      </div>
    </>
  );
}
