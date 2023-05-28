/** @format */

import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/api/set_task`, { task: input })
      .then(() => {
        console.log(res);
        setInput("");
      })

      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get(`/api/get_task`).then((res) => {
      setTask(res.data);
      console.log(res.data);
    });
  });
  return (
    <>
      <Head>
        <title>Todo Liste für Web Architekturen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
        <ul>
          {task.map((t) => (
            <li key={t._id}>{t.task}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
