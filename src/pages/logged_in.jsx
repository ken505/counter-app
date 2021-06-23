import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AddToPhotosRounded } from "@material-ui/icons";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { db } from "../utils/firebase";
import firebase from "firebase/app";
import { useAuth } from "../context/AuthUserContext";
import { LocalHead } from "../components/LacalHead";
import { TaskItem } from "../components/TaskItem";

const LoggedIn = () => {
  // firestore から取得したデータを保持する state と初期値
  const [tasks, setTasks] = useState([
    {
      id: "",
      title: "",
      // ❶
      // userId: "",
    },
  ]);
  // ↓ ユーザーが入力した文字列を保持する state 、初期値は空の文字列
  const [input, setInput] = useState("");
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();
  // ↓ loading と authUser の変更を監視し、必要に応じて sign/up page へ遷移
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);

  // ↓ マウント時にのみ firestore のデータを読み込む
  // データ読み込みは起動時の1回だけにしたいので第2引数は []
  useEffect(() => {
    //   ↓unSub (返り値を受け取る)
    //          ..  ↓ firestore の collection へアクセス
    //                                  ↓ onSnapshot 内容を取得
    //                                  ............↓ snapshot 引数に取得内容を格納
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      // ↓ snapshot 引数内の object 一覧を setTasks を使って tasks の state へ格納
      setTasks(
        // 👇 snapshot 内の docs を map で展開し、 doc に格納
        snapshot.docs.map((doc) => ({
          // ... ↓ doc の id
          id: doc.id,
          title: doc.data().title,
          // ❷
          // userId: doc.data().uid,
        }))
      );
    });
    // ↓ アンマウント時のクリーンナップ関数
    return () => unSub();
  }, []);

  // ts (e:React.ChangeEvent<HTMLImputElement>)
  // ここの e ってどこで使うのでしょう❓
  const newTask = () => {
    // const user = firebase.auth().currentUser;
    // if (user != null) {
    //   user.providerData.forEach(function (profile) {
    //     profile.uid;
    //   });
    // }
    // console.log(user);

    // ↓ フィールドが title の doc に input の値を collection に add
    db.collection("tasks").add({
      title: input,
      // userId: user.uid,
      // ❸ ここへ uid を読み込んで task に add したい
    });
    // ↓ 次の入力に備えて input state の初期化
    setInput("");
  };
  return (
    <div
      className="min-h-screen px-5 py-16 
      font-mono text-gray-100 dark:text-gray-400
      bg-gradient-to-tr 
    from-green-400 dark:from-gray-900 to-blue-400 dark:to-purple-800"
    >
      <LocalHead />

      <div className="flex justify-center">
        <button
          className="mr-2 hover:opacity-60 dark:hover:opacity-50
          focus:outline-none focus:ring rounded-md"
          onClick={signOut}
        >
          <ExitToAppRoundedIcon />
        </button>
        <input
          className="text-gray-500 dark:text-gray-300 
          w-48 sm:w-96 p-3 rounded-md focus:outline-none focus:ring
        dark:bg-gray-700"
          placeholder=" New task?"
          value={input}
          // ts (e:React.ChangeEvent<HTMLImputElement>)
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="focus:outline-none focus:ring rounded-md"
          disabled={!input}
          onClick={newTask}
        >
          <AddToPhotosRounded className="text-white dark:text-gray-400 mx-2" />
        </button>
      </div>
      <div className="grid justify-center ">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            // ❹
            // userId={task.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default LoggedIn;
