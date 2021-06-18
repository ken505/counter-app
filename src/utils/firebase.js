// ↓ firebase SDK のコアを import
import firebase from 'firebase/app';
// ↓ auth と firestore を import
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
// Firebaseのインスタンスが存在しない場合は、インスタンスを作成します
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export const auth = firebase.auth();
export const db = firebase.firestore();

// 参照元url (1) https://qiita.com/centerfield77/items/49b029d4d1618dfeedb6
// @centerfield77 Next.jsでFirestoreのデータをSSGする よりコピペ
// env ファイルにはタイポがあるので注意 !
// 参照元 url (2)
// https://blog.logrocket.com/implementing-authentication-in-next-js-with-firebase/