const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

const config = {
  apiKey: "AIzaSyCzCW0onfs504HYrzFD3T1NjzDYut9qipY",
  authDomain: "netflix-b1aad.firebaseapp.com",
  projectId: "netflix-b1aad",
  storageBucket: "netflix-b1aad.appspot.com",
  messagingSenderId: "592950664201",
  appId: "1:592950664201:web:dbfc69bec9242b063b2cd8",
  measurementId: "G-QDLG9SLD1P",
};

const firebaseApp = initializeApp(config);
const firestore = getFirestore(firebaseApp);

function getUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const piece = (Math.random() * 16) | 0;
    const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
    return elem.toString(16);
  });
}

async function seedDatabase() {
  try {
    // Series - Documentaries
    await addDoc(collection(firestore, "series"), {
      id: getUUID(),
      title: "Tiger King",
      description:
        "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
      genre: "documentaries",
      maturity: "18",
      slug: "tiger-king",
    });

    await addDoc(collection(firestore, "series"), {
      id: getUUID(),
      title: "Amanda Knox",
      description:
        "Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.",
      genre: "documentaries",
      maturity: "12",
      slug: "amanda-knox",
    });

    await addDoc(collection(firestore, "series"), {
      id: getUUID(),
      title: "Citizenfour",
      description:
        "Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.",
      genre: "documentaries",
      maturity: "12",
      slug: "citizenfour",
    });

    await addDoc(collection(firestore, "series"), {
      id: getUUID(),
      title: "Super Size Me",
      description:
        "Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from McDonalds.",
      genre: "documentaries",
      maturity: "12",
      slug: "super-size-me",
    });

    await addDoc(collection(firestore, "series"), {
      id: getUUID(),
      title: "Man on Wire",
      description:
        "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
      genre: "documentaries",
      maturity: "12",
      slug: "man-on-wire",
    });

    // Comedies
    await addDoc(collection(firestore, "series"), {
      id: getUUID(),
      title: "The Office",
      description:
        "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.",
      genre: "comedies",
      maturity: "15",
      slug: "the-office",
    });

    await addDoc(collection(firestore, "series"), {
      id: getUUID(),
      title: "Arrested Development",
      description:
        "The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.",
      genre: "comedies",
      maturity: "15",
      slug: "arrested-development",
    });

    await addDoc(collection(firestore, "series"), {
      id: getUUID(),
      title: "Curb Your Enthusiasm",
      description:
        "Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.",
      genre: "comedies",
      maturity: "15",
      slug: "curb-your-enthusiasm",
    });

    await addDoc(collection(firestore, "series"), {
      id: getUUID(),
      title: "Family Guy",
      description:
        "Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.",
      genre: "comedies",
      maturity: "15",
      slug: "family-guy",
    });

    await addDoc(collection(firestore, "series"), {
      id: getUUID(),
      title: "South Park",
      description:
        "Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.",
      genre: "comedies",
      maturity: "15",
      slug: "south-park",
    });

    // Crime
    await addDoc(collection(firestore, "series"), {
      id: getUUID(),
      title: "Making a Murderer",
      description:
        "Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.",
      genre: "crime",
      maturity: "18",
      slug: "making-a-murderer",
    });

    await addDoc(collection(firestore, "series"), {
      id: getUUID(),
      title: "Long Shot",
      description:
        "An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.",
      genre: "crime",
      maturity: "18",
      slug: "long-shot",
    });

    // Films
    await addDoc(collection(firestore, "films"), {
      id: getUUID(),
      title: "The Prestige",
      description:
        "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",
      genre: "drama",
      maturity: "15",
      slug: "the-prestige",
    });

    await addDoc(collection(firestore, "films"), {
      id: getUUID(),
      title: "Fight Club",
      description:
        "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
      genre: "drama",
      maturity: "15",
      slug: "fight-club",
    });

    await addDoc(collection(firestore, "films"), {
      id: getUUID(),
      title: "Shutter Island",
      description:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
      genre: "suspense",
      maturity: "15",
      slug: "shutter-island",
    });

    await addDoc(collection(firestore, "films"), {
      id: getUUID(),
      title: "Zodiac",
      description:
        "Robert Graysmith, a cartoonist by profession, finds himself obsessively thinking about the Zodiac killer. He uses his puzzle-solving abilities to get closer to revealing the identity of the killer.",
      genre: "suspense",
      maturity: "15",
      slug: "zodiac",
    });

    await addDoc(collection(firestore, "films"), {
      id: getUUID(),
      title: "Frozen",
      description:
        "Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa.",
      genre: "children",
      maturity: "0",
      slug: "frozen",
    });

    await addDoc(collection(firestore, "films"), {
      id: getUUID(),
      title: "Despicable Me",
      description:
        "Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.",
      genre: "children",
      maturity: "0",
      slug: "despicable-me",
    });

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database: ", error);
  }
}

seedDatabase();
