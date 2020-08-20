import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppLoading} from 'expo';
import {PollerOne_400Regular, useFonts} from '@expo-google-fonts/poller-one';
import {NewsCycle_400Regular, NewsCycle_700Bold} from '@expo-google-fonts/news-cycle';

import AppStack from './src/routes/AppStack';



export default function App() {
  let [fontsLoaded] = useFonts({
    PollerOne_400Regular,
    NewsCycle_400Regular,
    NewsCycle_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
       <>
          <AppStack />
          <StatusBar style="light" />
       </>
    );

  }
  
}

