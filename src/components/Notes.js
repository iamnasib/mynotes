import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import { Link } from "react-router-dom";

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes, getNotes } = noteContext;
  useEffect(() => {
    const auth = async () => {
      getNotes();
    };
    auth(); // eslint-disable-next-line
  }, []);

  return (
    <>
      {notes.length > 0 ? (
        <div
          className="max-w-screen-xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 
    mx-auto p-4 justify-items-center">
          {notes.map((note) => {
            return <NoteItem key={note._id} note={note} />;
          })}
        </div>
      ) : (
        <div className="text-center text-2xl text-gray-500">
          <img
            src="https://img.icons8.com/ios/452/empty-box.png"
            alt="empty-box"
            className="w-24 mx-auto"
          />
          No Notes to display
        </div>
      )}
      <div className="h-12"></div>
      <Link
        to="/add-note"
        className="fixed bottom-0 border-2 border-cyan-800 hover:bg-cyan-100 transition duration-500 transition border-dashed rounded-full w-10 h-10 right-0 items-center justify-center flex my-4 mr-4">
        <i className="fa-solid fa-plus cursor-pointer text-cyan-800 text-2xl"></i>
      </Link>
    </>
  );
};

export default Notes;
