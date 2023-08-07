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
          className="p-2 border-2 border-slate-800 rounded-3xl rounded-br-none"
        />
        <button type="submit">Add post</button>
      </form>
      <div className="basis-1/3">
        <h1 className="text-center font-bold text-3xl pb-4">Preview: </h1>
        <div className="border rounded-3xl w-full h-full">
          <div className="grid h-full place-items-center">
            <div className="border border-slate-900 w-[20rem] rounded-3xl">
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  className="w-full rounded-t-3xl h-36 object-cover"
                />
              )}
              <div className="p-2 flex flex-col gap-4">
                <h2 className="text-2xl text-center font-bold">{title}</h2>
                <h4 className="text-justify">{condensed}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
