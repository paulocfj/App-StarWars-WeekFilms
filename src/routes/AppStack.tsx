import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'

import SplashScreen from '../pages/SplashScreen';
import More from '../pages/More'
import Main from '../pages/Main';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="SplashScreen" component={SplashScreen}/>
                <Screen name="Main" component={Main} />
                <Screen name="More" component={More} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;