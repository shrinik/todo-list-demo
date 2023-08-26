/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

initializeApp();

const db = getFirestore();


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.todos = onRequest((request, response) => {
    logger.info("Send static todo list", {structuredData: true});
    db.collection('todos').get().then(snapshot => {
        snapshot.forEach((doc) => {            
            console.log(doc.id, '=>', doc.data());
            response.send(doc.data())
          });
    })

    
})
