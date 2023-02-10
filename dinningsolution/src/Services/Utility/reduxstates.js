import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Services/Firebase/FirebaseConfig";

const docRef = doc(db, "Restaurants", "Hard Rock Cafe");

async function readfirebase() {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {

      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  export default readfirebase