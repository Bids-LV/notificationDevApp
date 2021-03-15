import * as Notifications from "expo-notifications";
import React, { useRef } from "react";
import * as Analytics from "expo-firebase-analytics";

import getPushToken from "./registerForNotifications";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const GetForegroundListiner = React.forwardRef(
  ({ navigation, config }, ref) => {
    const notificationListener = useRef();
    const responseListener = useRef();

    React.useEffect(() => {
      if (config.subscription !== null) {
        getPushToken(config).then((token) => console.log(token));
        notificationListener.current = Notifications.addNotificationReceivedListener(
          (notification) => {
            responseListener.current = Notifications.addNotificationResponseReceivedListener(
              (response) => {
                // {   "data": [    {       "screen": "Second",       "id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"     }   ] }

                function isEmpty(obj) {
                  for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) return false;
                  }

                  return true;
                }

                if (config.subscription === "premium") {
                
                  (async function () {
                    try {
                      await Analytics.logEvent("pressedNotification", {
                        name: "notPressed",
                        screen: "none",
                        purpose: "usr_notifications",
                      });
                    } catch (e) {
                      console.log("error: ", e);
                    }
                  })();
                }

                if (!isEmpty(response.notification.request.content.data)) {
                  navigation.navigate(
                    response.notification.request.content.data.data[0].screen
                  );
                }
              }
            );

            return () => {
              Notifications.removeNotificationSubscription(
                notificationListener
              );
              Notifications.removeNotificationSubscription(responseListener);
            };
          }
        );
      }
    }, []);
  }
);

export default GetForegroundListiner;
