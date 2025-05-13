import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://arthurkbecker:ROjUn7EHi6jL4KCU@cluster0.fr80osj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
