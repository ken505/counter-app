import { useCallback, useEffect, useState } from "react";
import { FormControl, List, TextField } from "@material-ui/core";
import { AddToPhotosRounded } from "@material-ui/icons";
import { db } from "../utils/firebase";
import { InfoModal } from "../components/InfoModal";
import { SnsShare } from "../components/SnsShare";
import { TaskItem } from "../components/TaskItem";
import { LocalHead } from "../components/LacalHead";

import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserContext";
import { Container, Row, Col, Button } from "reactstrap";

const LoggedIn = () => {
  // firebase のデータ
  const [tasks, setTasks] = useState([{ id: "", title: "", count: "" }]);

  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);

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
      <LocalHead />
      <InfoModal />

      <div>
        <FormControl>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Newtask?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></TextField>
        </FormControl>
        <button disabled={!input} onClick={newTask}>
          <AddToPhotosRounded className="text-white dark:text-gray-400 mx-2" />
        </button>

        {/* 👇 material ui List components については未調査 */}
        {/* 枠線やテキストが黒なので、変更できるか調査必要 */}
        <List>
          {tasks.map((task) => (
            <TaskItem key={task.id} id={task.id} title={task.title} />
          ))}
        </List>
      </div>
      <Button onClick={signOut}>Sign out</Button>

      {/* <div className="fixed bottom-4"> */}
      <SnsShare
        url={"https://counter-app-theta.vercel.app/"}
        title={"Counter - App"}
      />
    </div>
    // </div>
  );
};
export default LoggedIn;
