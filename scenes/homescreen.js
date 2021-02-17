import React, { useContext, useEffect, useMemo, useState, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { useNavigation } from "@react-navigation/native";



export default function HomeScreen() {
  const navigation = useNavigation();
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  var notificationListener = useRef();
  const responseListener = useRef();

 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 250,
      }}
    >
      {/* <GetForegroundListiner /> */}
      <Text style={{ fontSize: 50 }}> firstscreem</Text>
    </View>
  );
}

// <View
// style={{
//   flex: 1,
//   alignItems: "center",
//   justifyContent: "space-around",
// }}
// >
// <Text>Your expo push token: {expoPushToken}</Text>
// <View style={{ alignItems: "center", justifyContent: "center" }}>
//   <Text>
//     Title: {notification && notification.request.content.title}{" "}
//   </Text>
//   <Text>Body: {notification && notification.request.content.body}</Text>
//   <Text>
//     Data:{" "}
//     {notification && JSON.stringify(notification.request.content.data)}
//   </Text>
// </View>
// </View>
