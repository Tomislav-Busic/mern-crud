import React from "react";
import { noteStore } from "../stores/store";

export const CreateForm = () => {
  const store = noteStore();

  if (store.updateForm._id) return <></>;

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Create note</h2>
      <form
        onSubmit={store.createNote}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          name="title"
          value={store.createForm.title}
          onChange={store.updateCreateFormField}
        />
        <textarea
          name="body"
          value={store.createForm.body}
          onChange={store.updateCreateFormField}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
