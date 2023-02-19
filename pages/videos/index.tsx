import Footer from "@/components/Footer";
import Map from "@/components/Map";
import { useLoadScript } from "@react-google-maps/api";
import clientPromise from "@/lib/mongo";
import Link from "next/link";
import { useEffect } from "react";
import Header from "@/components/Header";

export default function Videos({ videos }) {
  const itemsWithCoords = [];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  const submissionItems = (itemData) => {
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
      <li key={itemData._id}>
        <Link
          href={itemData.video_url}
          className="flex flex-row mb-2 border-gray-400"
        >
          <div className="shadow border select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
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
              <div className="font-medium">
                {itemData.streets[0]} & {itemData.streets[1]}
              </div>
              <div className="text-xs font-medium text-gray-800">
                Date: {dateStr}
              </div>
            </div>
            <div className="text-xs text-gray-600 text-end">
              <span>{itemData.vehicles[0]}</span>
              <br />
              <span>{itemData.vehicles[1]}</span>
              <br />
            </div>
          </div>
        </Link>
      </li>
    );
  };

  return (
    <>
      <div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-5 mt-16 justify-center bg-white text-gray-800">
        <div className="flex">
          {isLoaded ? (
            <Map coordsList={itemsWithCoords} />
          ) : (
            <div>Loading...</div>
          )}

          <div className="container flex flex-col items-center justify-center w-full mx-auto px-4">
            <ul className="flex flex-col">
              <li>
                <div className="w-full p-4 mb-2 bg-white border rounded-md shadow sm:px-4 ">
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
              </li>
              {videos.map((item) => {
                return submissionItems(item);
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("videos");

    const videos = await db
      .collection("houston")
      .find({})
      // .sort({})
      .limit(20)
      .toArray();

    return {
      props: { videos: JSON.parse(JSON.stringify(videos)) },
    };
  } catch (e) {
    console.error(e);
  }
}
