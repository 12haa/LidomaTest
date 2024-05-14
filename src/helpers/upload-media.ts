import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import firebaseApp from "@/db/firebase";

export const UploadFilesAdnReturnUrls = async (files: any) => {
  try {
    const storage = getStorage(firebaseApp);
    const uploadedFilesResponses = await Promise.all(
      files.map((file: any) => {
        const storageRef = ref(storage, `images/${file.name}`);
        return uploadBytes(storageRef, file);
      }),
    );

    const uploadedFilesDownloadUrls = await Promise.all(
      uploadedFilesResponses.map((response: any) => {
        return getDownloadURL(response.ref);
      }),
    );
    return uploadedFilesDownloadUrls;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
