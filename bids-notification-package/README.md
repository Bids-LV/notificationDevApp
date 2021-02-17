# @bidslatvia/bids-notification-package

## Installation
````npm i @bidslatvia/bids-notification-package ````

## Set up

Create reference for Navigation Container
Follow this guide: https://reactnavigation.org/docs/navigating-without-navigation-prop/



RootNavigation is neccessary for recieving and opening notifications 
Config stores neccesary params for push token upload to Bids Latvia database



## Usage

````{js}<space>{
 //In App.js

import GetForegroundListiner from "@bidslatvia/bids-notification-package";
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';

return (

  <GetForegroundListiner
        navigation={RootNavigation}
        config={config}
        apiKey={"da2-gk7qy234y5clpgtjp6mpetvf5q"}
      />
)

}

````

#### Configuration Example
````{tsx}<space>{
import Constants from 'expo-constants';

export const config = {
    parentURL: "https://www.virsi.lv/",
    showLangugagePicker: true,
    dynamicColorsEnabled: false,
    fixedColorTheme: "light",
    notificationsEnabled: true,
    notificationURL: "https://sz67dgtuqra7xfnybudiwv6moy.appsync-api.eu-west-1.amazonaws.com/graphql",
    // notificationAPIKEY: Constants.manifest.extra.apiKey,
    // dark (FOR LIGHT THEMES), light (DARK THEMES), auto
    statusBar: "dark"
  }
````