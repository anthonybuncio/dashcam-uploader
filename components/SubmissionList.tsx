import Link from "next/link";
import Image from "next/image";

const SubmissionList = ({ itemData }) => {
  console.log(itemData);
  const dateStr = new Date(itemData.date * 1000).toLocaleString();
  const uploadStr = new Date(itemData.submitted_at * 1000).toLocaleDateString();
  return (
    <li key={itemData._id} className="flex flex-row mb-2 border-gray-400">
      {/* <Link
        href={itemData.video_url}        
      > */}
      <div className="shadow border select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
        <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
          <div className="relative block">
            <div className="mx-auto object-cover h-10 w-10 ">
              <Image
                alt="type"
                src="https://icons.veryicon.com/png/o/education-technology/road-supervision-construction-platform-icon/traffic-accident.png"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
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
          <span>{itemData.vehicles[0]} </span>
          <br />
          <span>{itemData.vehicles[1]} </span>
          <br />
        </div>
      </div>
      {/* </Link> */}
    </li>
  );
};

export default SubmissionList;
