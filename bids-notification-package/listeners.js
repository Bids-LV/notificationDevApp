import * as Notifications from "expo-notifications";
import React, { useRef } from "react";
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
    console.log("configmain: ", config);
 
    const notificationListener = useRef();
    const responseListener = useRef();

    console.log("navigation: ", navigation);
    React.useEffect(() => {
      console.log("recieved notification through package");
      if (config) {
        getPushToken(config).then((token) => console.log(token));
      }
      notificationListener.current = Notifications.addNotificationReceivedListener(
        (notification) => {
          console.log("notification: ", notification);

          responseListener.current = Notifications.addNotificationResponseReceivedListener(
            (response) => {
              // {   "data": [    {       "screen": "Second",       "id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"     }   ] }

              function isEmpty(obj) {
                for (var prop in obj) {
                  if (obj.hasOwnProperty(prop)) return false;
                }

                return true;
              }

              if (!isEmpty(response.notification.request.content.data)) {
                console.log(
                  "there is extra data (screen name: ) ",
                  response.notification.request.content.data.data[0].screen
                );
                navigation.navigate(
                  response.notification.request.content.data.data[0].screen
                );
              }
            }
          );

          return () => {
            Notifications.removeNotificationSubscription(notificationListener);
            Notifications.removeNotificationSubscription(responseListener);
          };
        }
      );
    }, []);
  }
);

export default GetForegroundListiner;
