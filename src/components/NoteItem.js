import React from "react";
import { Card } from "flowbite-react";
const NoteItem = (props) => {
  const { note } = props; // Destructuring props to get the note object
  return (
    <Card className="max-w-sm w-full">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {note.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {note.description}
      </p>
    </Card>
  );
};

export default NoteItem;
