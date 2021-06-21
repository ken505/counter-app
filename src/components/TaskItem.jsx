// import firebase from "firebase/app";
import { db } from "../utils/firebase";
import { useState } from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import SaveAltRoundedIcon from "@material-ui/icons/SaveAltRounded";

// tsx
// interface PROPS {
//   id: string;
//   title: string;
// }

// tsx
// export const TaskItem:React.FC<PROPS> = (props) {
// ↓ logeged_in tasks.map(task) の値を ( key id title ) props で受け取る
export const TaskItem = (props) => {
  // ↓ 編集中の title を state で保持 初期値 (props.title)
  const [title, setTitle] = useState(props.title);
  const editTask = () => {
    // ................................ ↓ 上書き ( title のみ )
    db.collection("tasks").doc(props.id).set({ title: title }, { marge: true });
  };
  const deleteTask = () => {
    db.collection("tasks").doc(props.id).delete();
  };
  return (
    <div className="flex font-mono text-white dark:text-gray-400 mt-10">
      {/* <h2>{props.title}</h2> */}
      <div>
        <input
          className=" w-44 sm:w-96 p-3 border-b-2 focus:outline-none focus:ring rounded-t-md 
          bg-transparent  dark:border-gray-400"
          value={title}
          // ts (e:React.ChangeEvent<HTMLInputElement>)
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button
        className="focus:outline-none focus:ring rounded-md"
        onClick={editTask}
      >
        {/* ↓ onClick の機能があれば、ボタンがなくても
        なくてもフォーカスを外せば保存できるので省いた。 */}
        <SaveAltRoundedIcon className="text-white dark:text-gray-400 mx-1 " />
      </button>
      <button
        className="focus:outline-none focus:ring rounded-md"
        onClick={deleteTask}
      >
        <DeleteForeverOutlinedIcon className="text-white dark:text-gray-400 mx-1" />
      </button>
    </div>
  );
};
