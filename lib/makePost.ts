import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const db: any = getFirestore(app);

export async function makePost(
  title: string,
  condensed: string,
  post: string,
  imageName: string
) {
  await addDoc(collection(db, "blogpost"), {
    title: title,
    condensed: condensed,
    post: post,
    imageName: imageName,
  });
}

const storage: any = getStorage(app);

export async function makeImage(image: any) {
  const storageRef: any = ref(storage, `images/${image.name}`);
  uploadBytes(storageRef, image);
}
