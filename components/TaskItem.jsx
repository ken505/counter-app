import firebase from "firebase/app";
import { db } from "../utils/firebase";
import { useState } from "react";
import { ListItem, TextField } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

// ts 型指定
// interface PROPS {
//   id: string;
//   title: string;
//   count: Number;
// }

// tsx
// export function TaskItem:React.FC<PROPS> = (props) {
export function TaskItem(props) {
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
    <ListItem className="text-white dark:text-gray-400">
      <h2>{props.title}</h2>
      <TextField
        label="Edit task"
        value={title}
        InputLabelProps={{
          shrink: true,
        }}
        // .......👇 tsx は型を指定。e:React.ChangeEvent<HTMLInputElement>
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={editTask}>
        <EditOutlinedIcon className="text-white dark:text-gray-400 mx-1" />
      </button>
      <button onClick={deleteTask}>
        <DeleteForeverOutlinedIcon className="text-white dark:text-gray-400 mx-1" />
      </button>
    </ListItem>
  );
}

// tailwind
// export function TaskItem(props) {
//   return (
//     <div className="grid grid-cols-3 gap-6">
//       <div className="col-span-3 sm:col-span-2">
//         <label
//           htmlFor="company_website"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Website
//         </label>
//         <div className="mt-1 flex rounded-md shadow-sm">
//           <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
//             http://
//           </span>
//           <input
//             type="text"
//             name="company_website"
//             id="company_website"
//             className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
//             placeholder="www.example.com"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
