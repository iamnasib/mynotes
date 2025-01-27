import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "678f92e7ffb94bb5cc49cbc0",
      user: "678ea746f8785ae475f3653a",
      title: "Note 1",
      description: "Description Of note 1",
      type: "general",
      createdOn: "2025-01-21T12:28:23.921Z",
      __v: 0,
    },
    {
      _id: "6790f86ad3d9f372ccfbb72698",
      user: "678ea746f8785ae475f3653a",
      title: "Note to be deleted",
      description: "Description Of note o delete",
      type: "delete",
      createdOn: "2025-01-22T13:53:46.319Z",
      __v: 0,
    },
    {
      _id: "678f92e7ffb94bb5cc49csabc0",
      user: "678ea746f8785ae475f3653a",
      title: "Note 1",
      description: "Description Of note 1",
      type: "general",
      createdOn: "2025-01-21T12:28:23.921Z",
      __v: 0,
    },
    {
      _id: "6790f86ad3d9f372fbb7269as8",
      user: "678ea746f8785ae475f3653a",
      title: "Note to be deleted",
      description: "Description Of note o delete",
      type: "delete",
      createdOn: "2025-01-22T13:53:46.319Z",
      __v: 0,
    },
    {
      _id: "678f92e7ffb94bb5cc49cbc0",
      user: "678ea746f8785ae475f3653a",
      title: "Note 1",
      description: "Description Of note 1",
      type: "general",
      createdOn: "2025-01-21T12:28:23.921Z",
      __v: 0,
    },
    {
      _id: "6790f86ad3d9f372ccfbb72698",
      user: "678ea746f8785ae475f3653a",
      title: "Note to be deleted",
      description: "Description Of note o delete",
      type: "delete",
      createdOn: "2025-01-22T13:53:46.319Z",
      __v: 0,
    },
    {
      _id: "678f92e7ffb94bb5cc49csabc0",
      user: "678ea746f8785ae475f3653a",
      title: "Note 1",
      description: "Description Of note 1",
      type: "general",
      createdOn: "2025-01-21T12:28:23.921Z",
      __v: 0,
    },
    {
      _id: "6790f86ad3d9f372fbb7269as8",
      user: "678ea746f8785ae475f3653a",
      title: "Note to be deleted",
      description: "Description Of note o delete",
      type: "delete",
      createdOn: "2025-01-22T13:53:46.319Z",
      __v: 0,
    },
  ];
  const [notes, setnotes] = useState(initialNotes);
  return (
    <NoteContext.Provider value={{ notes, setnotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
