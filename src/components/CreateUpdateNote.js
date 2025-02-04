import React, { useState, useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import { Label, TextInput, Button } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom";
import Alert from "./Alert";

const CreateUpdateNote = () => {
  const noteContext = useContext(NoteContext);
  const { getNote, addNote, updateNote, alert } = noteContext;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const params = useParams();
  const noteId = params.id;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchNote = async () => {
      if (noteId) {
        try {
          const note = await getNote(noteId);
          if (note) {
            setTitle(note.title);
            setDescription(note.description);
            setType(note.type);
          } else {
            navigate("/add-note");
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        setTitle("");
        setDescription("");
        setType("");
      }
    };
    fetchNote(); // eslint-disable-next-line
  }, [noteId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (noteId) {
      updateNote(noteId, title, description, type);
    } else {
      await addNote(title, description, type);
      setTitle("");
      setDescription("");
      setType("");
    }
  };

  return (
    <>
      <Alert alert={alert} />
      <div className="flex flex-col items-center p-4">
        <div className="text-2xl font-medium mb-4">
          {noteId ? "Update Note" : "Add Note"}
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput
              id="title"
              type="text"
              placeholder="Note Title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              minLength={5}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <TextInput
              id="description"
              type="text"
              placeholder="This is a description"
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              minLength={5}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="type" value="Type" />
            </div>
            <TextInput
              id="type"
              type="text"
              placeholder="Personal"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <Button
            disabled={title.length < 5 || description.length < 5}
            type="submit">
            {noteId ? "Update" : "Add"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateUpdateNote;
