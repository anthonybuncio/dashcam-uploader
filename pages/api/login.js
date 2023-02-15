import clientPromise from '@/lib/mongo'

const login = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("users");
    const { email } = req.query;

    const user = await db.collection("credentials").findOne({
      email,
    });

    console.log('api call', user)

    res.json(user);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default login