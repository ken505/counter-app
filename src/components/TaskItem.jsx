// import firebase from "firebase/app";
import { db } from "../utils/firebase";
import { useState } from "react";
import { ListItem, TextField } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

// tsx
// interface PROPS {
//   id: string;
//   title: string;
//   count: Number;
// }

// tsx
// export function TaskItem:React.FC<PROPS> = (props) {
export const TaskItem = (props) => {
  // 👇 編集中の title を格納する state
  // ...............................👇 state の初期値は props.title
  const [title, setTitle] = useState(props.title);

  const editTask = () => {
    db.collection("tasks").doc(props.id).set({ title: title }, { marge: true });
  };
  const deleteTask = () => {
    db.collection("tasks").doc(props.id).delete();
  };
  return (
    <div className="flex text-white dark:text-gray-400 ">
      {/* <h2>{props.title}</h2> */}
      <div className=" mx-10">
        <TextField
          // label="Edit task"
          value={title}
          InputLabelProps={{
            shrink: true,
          }}
          // .......👇 tsx は型を指定。e:React.ChangeEvent<HTMLInputElement>
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button onClick={editTask}>
        <EditOutlinedIcon className="text-white dark:text-gray-400 mx-1" />
      </button>
      <button onClick={deleteTask}>
        <DeleteForeverOutlinedIcon className="text-white dark:text-gray-400 mx-1" />
      </button>
    </div>
  );
};
