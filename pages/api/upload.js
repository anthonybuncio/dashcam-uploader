import clientPromise from '@/lib/mongo'

const uploadSubmission = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("videos");
    const { video_url, streets, vehicles, date, submitted_at } = req.body;

    const post = await db.collection("houston").insertOne({
      video_url, 
      streets, 
      vehicles, 
      date,
      submitted_at, 
      zip_code:"", 
      coords: {long:"", lat:""}
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default uploadSubmission