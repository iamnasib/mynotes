import React, { useContext } from "react";
import { Card } from "flowbite-react";
import AlertContext from "../context/alert/AlertContext";
import Alert from "./Alert";
import { Link } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
const NoteItem = (props) => {
  const { note } = props; // Destructuring props to get the note object
  const noteContext = useContext(NoteContext);
  const { deleteNote } = noteContext;
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;
  const deleteNoteClient = async (id) => {
    showAlert(`Note Deleted ${id}`, "danger");
    await deleteNote(id);
  };

  return (
    <>
      <Alert alert={alert} />
      <Card className="max-w-sm w-full relative">
        {note.type && (
          <div className="absolute top-0 right-0 bg-cyan-100 p-1 rounded-bl-lg text-xs">
            {note.type}
          </div>
        )}
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {note.title}
        </h5>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          {note.description}
        </p>
        <div className="flex flex-row justify-end items-center space-x-2">
          <i
            onClick={() => {
              deleteNoteClient(note._id);
            }}
            className="fa-solid fa-trash cursor-pointer text-red-500"></i>{" "}
          <Link to={`/update-note/${note._id}`}>
            <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default NoteItem;
