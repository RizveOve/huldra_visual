#!/bin/sh

touch .env
{
  printf "REACT_APP_FIREBASE_API_KEY=%sREACT_APP_FIREBASE_APP_ID=%sREACT_APP_FIREBASE_AUTH_DOMAIN=%sREACT_APP_FIREBASE_MESSAGING_SENDER_ID=%sREACT_APP_FIREBASE_PROJECT_ID=%sREACT_APP_FIREBASE_STORAGE_BUCKET=%sREACT_APP_FIREBASE_ROOT_DIRECTORY=%s" "$REACT_APP_FIREBASE_API_KEY" "$REACT_APP_FIREBASE_APP_ID" "$REACT_APP_FIREBASE_AUTH_DOMAIN" "$REACT_APP_FIREBASE_MESSAGING_SENDER_ID" "$REACT_APP_FIREBASE_PROJECT_ID" "$REACT_APP_FIREBASE_STORAGE_BUCKET" "$REACT_APP_FIREBASE_ROOT_DIRECTORY" "$"
} >> .env