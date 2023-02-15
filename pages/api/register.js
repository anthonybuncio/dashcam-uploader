import clientPromise from '@/lib/mongo'

const mongoObjectId = function () {
  const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
      return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
};

const registerUser = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("users");
    const { email, password, firstName, lastName } = req.body;
    const userId = mongoObjectId()

    const new_user = await db.collection("credentials").insertOne({
      email,
      password,
      userId
    });

    const profile = await db.collection("profile").insertOne({
      email,
      first_name: firstName,
      last_name: lastName,
      userId
    });

    res.json({new_user, profile});
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default registerUser