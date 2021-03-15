import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import { Alert, Platform } from "react-native";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function getPushToken(config) {
  // console.log("config: ", config);
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
      console.log(token, "NOT GRANTED");

      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);

    (async function () {
      const storedToken = await AsyncStorage.getItem("notificationToken");

      if (storedToken !== null && config.uploadAllNotifications === false) {
        console.log("token is not needed to be sent");
      } else {
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
            AsyncStorage.setItem("notificationToken", JSON.stringify(data));
       
          });
      }
    })();
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
