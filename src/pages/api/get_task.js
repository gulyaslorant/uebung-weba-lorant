/** @format */

import { connectMongoDB } from "@/libs/MongoConnect";
import Task from "@/models/taskModel";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET requests are allowed" });
    return;
  }
  const { task } = req.body;

  try {
    await connectMongoDB();
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "Something went wrong" });
  }
}
