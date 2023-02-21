import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";

export default function VideoModal({ data }) {
  console.log(data);
  return (
    <>
      <div className="p-8">
        <div className="flex items-start gap-4">
          <div className=" left-0 object-cover h-10 w-10">
            <Image
              alt="type"
              src="https://icons.veryicon.com/png/o/education-technology/road-supervision-construction-platform-icon/traffic-accident.png"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className=" justify-center w-full">
            <p className="font-medium text-gray-900">
              {data.streets[0]} & {data.streets[1]}
            </p>

            <p className="line-clamp-1 text-sm text-gray-500 mb-8">
              {data.vehicles[0]} & {data.vehicles[1]}
            </p>
          </div>
        </div>

        <ReactPlayer url={data.video_url} />

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="block w-full rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/register"
          >
            Send Request
          </Link>

          <Link
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/about"
          >
            More Info
          </Link>

          <Link
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/about"
          >
            Save Video
          </Link>
        </div>
      </div>
    </>
  );
}
