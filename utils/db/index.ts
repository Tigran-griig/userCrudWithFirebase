import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({// @ts-ignore
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://react-auth-firebas.firebaseio.com"
    });
  } catch ({ stack }) {
    console.log('Firebase admin initialization error', stack);
  }
}

export default admin.firestore();