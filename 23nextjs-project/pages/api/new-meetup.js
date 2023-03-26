import { MongoClient } from "mongodb";

// the code in the api routes will only run on the server, never on the client side
//these functions are triggered whenever a request is sent to the route

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    //store that in a database or in a file
    const client = await MongoClient.connect(
      "mongodb+srv://bryanguner:lVjEqV6QbEBhEx4l@cluster0.mdh4edk.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log("result(should be the automatically generated id):", result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
