import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import { Alert, Platform } from "react-native";
import Constants from "expo-constants";

async function getPushToken(config) {
  console.log("config: ", config);
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      // token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token, "NOT GRANTED");

      // Store.Store.dispatch({
      //   type: FIRST_LAUNCH,
      //   payload: false,
      // });
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
    // only send token in first load
    // if(Store.Store.getState().storage.firstLaunch){
    const url = config.notificationURL;

    const query =
      `
            mutation MyMutation {
              sendClientNotificationToken(platform: "` +
      Platform.OS +
      `",token:"` +
      token +
      `", partnerID: "kristapatest") {
                errorMessage
                success
              }
            }
        `;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/graphql",
        "x-api-key": config.notificationAPIKEY || "",
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    // }else{
    //   // not first launch
    // }

  //   Store.Store.dispatch({
  //     type: FIRST_LAUNCH,
  //     payload: false,
  //   });
  // } else {
  //   alert("Must use physical device for Push Notifications");

  //   Store.Store.dispatch({
  //     type: FIRST_LAUNCH,
  //     payload: false,
  //   });
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export default getPushToken;
