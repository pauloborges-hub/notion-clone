import { App, cert, getApp, getApps, initializeApp } from "firebase-admin/app";

import { getFirestore } from "firebase-admin/firestore";

// Loads your service account credentials from a JSON file located at @/service_key.json.
// The service key is typically a JSON file generated in your Firebase console containing sensitive information (like private_key and client_email) used for server-side authentication.
// Use this only in secure server environments, not in client-side code, to avoid exposing sensitive keys.
const serviceKey = require("@/service_key.json");

let app: App;

if (getApps().length === 0) {
   app = initializeApp({
      credential: cert(serviceKey)
   });
} else {
   app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };