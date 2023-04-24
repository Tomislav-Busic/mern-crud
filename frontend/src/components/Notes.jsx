import React from "react";
import { noteStore } from "../stores/store";

export const Notes = () => {
  const store = noteStore();
  return <div>Notes</div>;
};
