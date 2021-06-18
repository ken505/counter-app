// 👇 参照元url (1) https://qiita.com/centerfield77/items/49b029d4d1618dfeedb6
// @centerfield77 Next.jsでFirestoreのデータをSSGする よりコピペ
// env ファイルにはタイポがある。

// 参照元 url (2)
// https://blog.logrocket.com/implementing-authentication-in-next-js-with-firebase/


// ↓ firebase SDK のコアを import
import firebase from 'firebase/app';
import 'firebase/firestore';

// (2)
import 'firebase/auth';

// (1)
// const firebaseConfig = {
const firebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// if a Firebase instance doesn't exist, create one
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseCredentials)
}

export const db = firebase.firestore();

// (2)
// export default firebase;
export const auth = firebase.auth();

// (1)
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app();
// }

// 👇 (2)
// import Firebase from 'Firebase/app';
// import 'Firebase/auth';

// const FirebaseCredentials = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
// }

// // if a Firebase instance doesn't exist, create one
// if (!Firebase.apps.length) {
//   Firebase.initializeApp(FirebaseCredentials)
// }

// export default Firebase;


// 👇 参照元忘れた。 next firebase 的な検索で出てきた気がするけど。
// Next.js へ・・・って書いてある割に NEXT_PUBLIC じゃないのが謎だけど。
// 公式にそんなんでてないからどっちゃでもいいのかもしれんが。

// import firebase from 'firebase/app'
// import 'firebase/firestore'

// let db;
// try {
//   const config = {
//         apiKey: process.env.FIREBASE_API_KEY,
//         authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//         databaseURL: process.env.FIREBASE_DATABASE_URL,
//         projectId: process.env.FIREBASE_PROJECT_ID,
//         storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//         messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//         appId: process.env.FIREBASE_APP_ID
//     };
//     firebase.initializeApp(config);
//     // Firestoreインスタンスを作成
//     db = firebase.firestore();
//   } catch (error) {
//     console.log(error);
//   }

//   module.exports = {
//     // 本来、initializeAppによる初期化は一度きりのため、
//     // 初期化の結果のみを切り出してexportする
//     db
//   };


// 👇 Kaz-t の code (ts file)
// import "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// import firebase from "firebase/app";

// const firebaseApp = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,

//   // firebase でデプロイしない場合は👇は必要ない・・・のか？
//   // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

// export const db = firebaseApp.firestore();
// export const auth = firebase.auth();
