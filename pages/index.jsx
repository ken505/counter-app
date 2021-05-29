import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { InfoModal } from "../components/InfoModal";
import { Minus } from "../components/Minus";
import { Pulus } from "../components/Pulus";
import { SnsShare } from "../components/SnsShare";
import { TaskItem } from "../components/TaskItem";
import { db } from "../utils/firebase";

export default function Home() {
  //     👇 配列の分割代入
  // const count = array[0]
  // const setCount = array[1] と同義
  const [count, setCount] = useState(0);
  //                                 👆 初期値

  const handleClickPulus = useCallback(
    (e) => {
      if (count < 9999) setCount((count) => count + 1);
    },
    [count]
  );

  const handleClickMinus = useCallback(
    (e) => {
      if (count > -9999) setCount((count) => count - 1);
    },
    [count]
  );

  const handleClickReset = useCallback(
    (e) => {
      setCount((count) => 0);
    },
    [count]
  );

  // firebase のデータ
  const [tasks, setTasks] = useState([{ id: "", title: "", count: "" }]);

  // 👇 app 読み込みは起動時の1回だけにしたいので第2引数は []
  useEffect(() => {
    //    👇 返り値を受け取る変数
    //               👇 firebase の collection データへアクセス
    //                                    👇 onSnapshot データベースの内容を取得
    //                                       データベース側に変化があった時に内容を取得
    //                                              👇 firestore から取得したデータを
    // snapshoto 引数に入れる。
    //  👇 firebase データベースの変化を監視
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      // 👇 取得した task オブジェクトの一覧を setTasks を使って tasks の state へ格納
      setTasks(
        // 👇 snapshot の中にドキュメントがあるので
        snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          count: doc.data().count,
        }))
      );
    });
    //  クリーンナップ関数
    return () => unSub();
  }, []);

  // 👇 ts の場合はを型指定してね。
  const newTask = (e) => {
    // 👇 firebase の 追加したい collection 指定。
    // ........................👇 追加したいオブジェクトを指定。 id は自動で取得してくれるらしく、記入する必要はないそうだ。なんでかはよくわからん。
    db.collection("tasks").add({ title: input });
    // 👇 input state の初期化
    setInput("");
  };

  // ユーザーが入力した文字列を保持する state 、初期値は空の文字列。
  const [input, setInput] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-green-400 dark:from-gray-900 to-blue-400 dark:to-purple-800">
      <Head>
        <title>Counter App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:url"
          content="https://counter-app-theta.vercel.app/"
        />
        <meta property="og:title" content="Count - App" />
        <meta
          property="og:description"
          content="This counter is beautiful and easy to use. ✨"
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/68226398/119667377-33870280-be71-11eb-96d2-a9c5d21437ca.jpg"
        />
      </Head>
      <InfoModal />

      <div>
        <h1>Todo App by Next/Firebase</h1>
        <input
          // 👇 素の input だと label は無い。とりあえず今はスルー。
          // useState に初期値設定は可能だが、 label と違ってユーザーが消去する必要が出てくる。
          label="New task ?"
          value={input}
          // typescript にする場合は e に型をつけましょう！
          onChange={(e) => setInput(e.target.value)}
        />
        {/* 👇 空配列で入力ボタンを押せないようにする。 */}
        <button disabled={!input} onClick={newTask}>
          Add
        </button>
        {tasks.map((task) => (
          <h3 key={task.id}>
            {task.title}
            {task.count}
          </h3>
        ))}
      </div>

      <h1 className="text-4xl text-white dark:text-gray-400 font-bold select-none">
        Count - App
      </h1>
      {/* <TaskItem /> */}
      <h1
        onClick={handleClickReset}
        className="h-16 w-40 bg-gradient-to-tr from-green-300 dark:from-indigo-700 to-blue-300 dark:to-purple-500 shadow-2xl flex hover:opacity-70 cursor-pointer justify-center items-center rounded-2xl mt-14 text-4xl text-white dark:text-gray-400 font-bold select-none"
      >
        Clear
      </h1>
      <h1 className="h-30 w-40 m-28 text-8xl text-white dark:text-gray-400 text-center font-bolditems-center select-none">
        {count}
      </h1>
      <div className="flex">
        <div onClick={handleClickMinus}>
          <Minus />
        </div>
        <div onClick={handleClickPulus}>
          <Pulus />
        </div>
      </div>
      <div className="fixed bottom-4">
        <SnsShare
          url={"https://counter-app-theta.vercel.app/"}
          title={"Counter - App"}
        />
      </div>
    </div>
  );
}

// text-center align-middle
// <p className="h-55 w-40 text-gray-700 flex justify-center items-center"></p>
