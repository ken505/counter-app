// import firebase from "firebase/app";
import { db } from "../utils/firebase";
import { useState } from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import SaveAltRoundedIcon from '@material-ui/icons/SaveAltRounded';

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
    <div className="flex font-mono text-white dark:text-gray-400 mt-10">
      {/* <h2>{props.title}</h2> */}
      <div >
        <input
        className=" w-44 sm:w-96 p-3 bg-transparent border-b-2 dark:border-gray-400"
          value={title}
          // .......👇 tsx は型を指定。e:React.ChangeEvent<HTMLInputElement>
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button onClick={editTask}>
        <SaveAltRoundedIcon className="text-white dark:text-gray-400 mx-1" />
      </button>
      <button onClick={deleteTask}>
        <DeleteForeverOutlinedIcon className="text-white dark:text-gray-400 mx-1" />
      </button>
    </div>
  );
};
