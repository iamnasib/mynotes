import { useContext, useState } from "react";
import NoteContext from "./NoteContext";
import backendUrl from "../../config";
import AlertContext from "../alert/AlertContext";

const NoteState = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;
  let [notes, setnotes] = useState([]);

  //Function to get notes of a authenticated user
  const getNotes = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/notes/getnotes`, {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      });
      const data = await response.json();
      if (!response.ok) {
        showAlert(
          data.errors && data.errors.length > 0
            ? data.errors[0].msg
            : data.error,
          "danger"
        );
        return;
      }

      setnotes(data.notes);
    } catch (error) {
      showAlert(error.message, "danger");
      return;
    }
  };

  const getNote = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/api/notes/getnote/${id}`, {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      });
      const data = await response.json();
      if (!response.ok) {
        showAlert(
          data.errors && data.errors.length > 0
            ? data.errors[0].msg
            : data.error,
          "danger"
        );
        return;
      }

      return data.note;
    } catch (error) {
      showAlert(error.message, "danger");
      return;
    }
    // Api call
  };

  //Function to create note for a authenticated user
  const addNote = async (title, description, type) => {
    try {
      const response = await fetch(`${backendUrl}/api/notes/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken"),
        },
        body: JSON.stringify({ title, description, type }),
      });
      const data = await response.json();
      if (!response.ok) {
        showAlert(
          data.errors && data.errors.length > 0
            ? data.errors[0].msg
            : data.error,
          "danger"
        );
        return;
      }

      showAlert("Note Added", "success");
      setnotes([...notes, data.CreatedNote]);
    } catch (error) {
      showAlert(error.message, "danger");
      return;
    }
  };

  //Function to update a note for a authenticated user
  const updateNote = async (id, title, description, type) => {
    // Api call to update note in the database
    try {
      const response = await fetch(`${backendUrl}/api/notes/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken"),
        },
        body: JSON.stringify({ title, description, type }),
      });
      const data = await response.json();
      if (!response.ok) {
        showAlert(
          data.errors && data.errors.length > 0
            ? data.errors[0].msg
            : data.error,
          "danger"
        );
        return;
      }

      // Updating note in the state(client side);
      showAlert("Note updated", "success");
      setnotes((prevNotes) =>
        prevNotes.map((note) => (note._id === id ? data.note : note))
      );
    } catch (error) {
      showAlert(error.message, "danger");
      return;
    }
  };

  //Function to delete a note for a authenticated user
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/api/notes/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken"),
        },
      });
      const data = await response.json();
      if (!response.ok) {
        showAlert(
          data.errors && data.errors.length > 0
            ? data.errors[0].msg
            : data.error,
          "danger"
        );
        return;
      }
      setnotes(
        notes.filter((note) => {
          return note._id !== id;
        })
      );
    } catch (error) {
      showAlert(error.message, "danger");
      return;
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        getNotes,
        getNote,
        addNote,
        updateNote,
        deleteNote,
        alert,
      }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
