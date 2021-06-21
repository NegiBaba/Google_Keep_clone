import React from "react";
import Heading from "./Heading";
import notes from "../notes";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Heading />
      {notes.map((notes) => {
        return (
          <Note key={notes.key} title={notes.title} content={notes.content} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
