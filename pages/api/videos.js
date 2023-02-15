import clientPromise from "../../lib/mongo"

const getVideos = async (req, res) => {
  try {
      const client = await clientPromise;
      const db = client.db("videos");

      const movies = await db
          .collection("houston")
          .find({})
          .sort({ metacritic: -1 })
          .limit(10)
          .toArray();

      res.json(movies);
  } catch (e) {
      console.error(e);
  }
};

export default getVideos