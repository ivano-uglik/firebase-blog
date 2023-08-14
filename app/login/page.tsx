"use client";

import { app } from "@/lib/firebase";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

export default function Login() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [name, setName]: any = useState("");
  const [imageURL, setImageURL]: any = useState("");

  async function GoogleLogin() {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
    setName(result.user.displayName);
    setImageURL(result.user.photoURL);
    console.log(name);
    console.log(imageURL);
  }

  return (
    <div className="w-screen h-screen grid place-items-center">
      <div>
        <button
          className="bg-slate-800 text-white p-4 text-2xl font-bold rounded-2xl"
          onClick={GoogleLogin}
        >
          Log-In via Google
        </button>
        <div>
          {name && <p>{name}</p>}
          {imageURL && <img src={imageURL} />}
        </div>
      </div>
    </div>
  );
}
