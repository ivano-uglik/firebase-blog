import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase";

const db: any = getFirestore(app);

export async function makePost(title: string, condensed: string, post: string) {
  await addDoc(collection(db, "blogpost"), {
    title: title,
    condensed: condensed,
    post: post,
  });
}
