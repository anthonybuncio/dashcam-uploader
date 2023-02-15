import Footer from "@/components/Footer";
import Map from "@/components/Map";
import { useLoadScript } from "@react-google-maps/api";
import clientPromise from "@/lib/mongo";

export default function Videos({ videos }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });

  return (
    <>
      <div className="">
        {/* <h1 className="text-center text-2xl font-bold text-gray-800">
          User Submitted Videos in Houston, Texas
        </h1> */}

        <div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-5 justify-center bg-white text-gray-800">
          {isLoaded ? <Map videos={videos} /> : <div>Loading...</div>}
        </div>
      </div>

      <Footer />
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
