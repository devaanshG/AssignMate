import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
  },
});

export async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged deployment. Successfully connected to MongoDB");
  } finally {
    await client.close();
  }
}
