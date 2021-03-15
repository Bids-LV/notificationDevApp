import React, { useState, useEffect, useRef } from "react";

import { config } from "./templateConfigs/config";

import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Scenes from "./scenes/index";
import GetForegroundListiner from "./bids-notification-package";
const Tab = createBottomTabNavigator();
import { navigationRef } from "./rootnavigation";
import * as RootNavigation from "./rootnavigation.js";
export default function App() {
  return (
    <>
      <GetForegroundListiner navigation={RootNavigation} config={config} />
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Scenes.HomeScreen} />
          <Tab.Screen name="Second" component={Scenes.SecondScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
