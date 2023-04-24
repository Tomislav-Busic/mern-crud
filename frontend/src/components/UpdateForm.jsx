import React from "react";
import { noteStore } from "../stores/store";

export const UpdateForm = () => {
  const store = noteStore();

  if (!store.updateForm._id) return <></>;

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Update note</h2>
      <form
        onSubmit={store.onSubmitUpdate}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          name="title"
          value={store.updateForm.title}
          onChange={store.onChangeUpdate}
        />
        <textarea
          name="body"
          value={store.updateForm.body}
          onChange={store.onChangeUpdate}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
