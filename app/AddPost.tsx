"use client";

import { makeImage, makePost } from "@/lib/makePost";
import { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [condensed, setCondensed] = useState("");
  const [image, setImage]: any = useState();

  async function handleSubmit(e: any) {
    e.preventDefault();
    title && post && condensed && image
      ? (await makePost(title, condensed, post, image.name), makeImage(image))
      : alert("Please fill in all inputs.");
  }
  return (
    <div className="flex justify-around">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col basis-1/3 gap-2"
      >
        <label htmlFor="image">Upload an image for your blog post:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border-2 border-slate-800 rounded-3xl"
        />
        <label htmlFor="condensed">Condensed post: </label>
        <textarea
          rows={2}
          id="condensed"
          onChange={(e) => setCondensed(e.target.value)}
          className="p-2 border-2 border-slate-800 rounded-3xl"
        />
        <label htmlFor="post">Post: </label>
        <textarea
          id="post"
          rows={8}
          onChange={(e) => setPost(e.target.value)}
          className="p-2 border-2 border-slate-800 rounded-3xl"
        />
        <button type="submit">Add post</button>
      </form>
      <div className="flex flex-col basis-1/3 border rounded-2xl p-4 overflow break-words ">
        <h1 className="text-center font-bold te xt-xl">Preview: </h1>
        {image && <img src={URL.createObjectURL(image)} className="w-32" />}
        <h2>{title}</h2>
        <h4>{condensed}</h4>
        <p>{post}</p>
      </div>
    </div>
  );
}
