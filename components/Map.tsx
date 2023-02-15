import { GoogleMap, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { useState } from "react";

const containerStyle = {
  width: "900px",
  height: "600px",
};

const center = {
  lat: 29.749907,
  lng: -95.358421,
};

const position = {
  lat: 29.731542,
  lng: -95.466664,
};

const position_2 = {
  lat: 29.725296,
  lng: -95.433327,
};

const Map = ({ videos }) => {
  const itemsWithCoords = [];
  function submissionItems(itemData) {
    if (itemData.coords.lat && itemData.coords.long) {
      itemsWithCoords.push({
        lat: itemData.coords.lat,
        long: itemData.coords.long,
      });
    }
    const dateStr = new Date(itemData.date * 1000).toLocaleString();
    const uploadStr = new Date(
      itemData.submitted_at * 1000
    ).toLocaleDateString();
    return (
      <li key={itemData._id} className="flex flex-row mb-2 border-gray-400">
        <Link href={itemData.video_url}>
          <div className="shadow border select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4 ">
            <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
              <div className="relative block">
                <img
                  alt="profil"
                  src="https://icons.veryicon.com/png/o/education-technology/road-supervision-construction-platform-icon/traffic-accident.png"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </div>
            </div>
            <div className="flex-1 pl-1 md:mr-16">
              <div className="font-medium ">
                {itemData.streets[0]} & {itemData.streets[1]}
              </div>
              <div className="text-sm text-gray-800 ">{dateStr}</div>
              <div className="text-xs font-light text-gray-800">
                Uploaded on: {uploadStr}
              </div>
            </div>
            <div className="text-xs text-gray-600  border-slate-700">
              <span>{itemData.vehicles[0]}</span>
              <br />
              <span>{itemData.vehicles[1]}</span>
              <br />
            </div>

            <button className="flex justify-end w-24 text-right">
              <svg
                width="12"
                fill="currentColor"
                height="12"
                className="text-gray-500 hover:text-gray-800"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </Link>
      </li>
    );
  }

  console.log(itemsWithCoords, "coords");

  return (
    <div className="flex">
      <div className="w-full">
        <GoogleMap zoom={11} center={center} mapContainerStyle={containerStyle}>
          {itemsWithCoords.length &&
            itemsWithCoords.map((coords, i) => {
              return <Marker position={coords} key={i} />;
            })}
        </GoogleMap>
      </div>
      <div className="px-2 w-full">
        <div className="container flex flex-col items-center justify-center w-full mx-auto">
          <div className="w-full px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6 ">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              User Submitted Videos in Houston, Texas
            </h3>
            <div className="mt-2 sm:flex sm:items-center sm:justify-between">
              <div className="block sm:hidden">
                <button className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600">
                  <span className="text-sm font-medium">
                    {" "}
                    Filters & Sorting{" "}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>

              <div className="hidden sm:flex sm:gap-4">
                <form className="mb-0 hidden lg:flex">
                  <div className="relative">
                    <input
                      className="h-10 rounded-lg border-gray-200 pr-16 text-sm placeholder-gray-300 focus:z-10"
                      placeholder="Search..."
                      type="text"
                    />

                    <button
                      type="submit"
                      className="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600"
                    >
                      <span className="sr-only">Submit Search</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="hidden sm:block">
                <label htmlFor="SortBy" className="sr-only">
                  SortBy
                </label>

                <select
                  id="SortBy"
                  className="h-10 text-sm border-gray-300 rounded"
                >
                  <option>Sort By</option>
                  <option value="Title, DESC">Title, DESC</option>
                  <option value="Title, ASC">Title, ASC</option>
                  <option value="Price, DESC">Price, DESC</option>
                  <option value="Price, ASC">Price, ASC</option>
                </select>
              </div>
            </div>
          </div>

          <ul className="flex flex-col">
            {videos.map((item) => {
              return submissionItems(item);
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Map;
