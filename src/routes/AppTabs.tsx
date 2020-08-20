import React from 'react';
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';
import {Ionicons, FontAwesome5} from  '@expo/vector-icons';


import Main from '../pages/Main';
import Favorites from '../pages/Favorites';

const {Navigator, Screen} = createBottomTabNavigator();

function AppTabs() {
    return (

        <Navigator
           
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'NewsCycle_700Bold',
                    fontSize: 14,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#111',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#FFD700',

            }}
        
        
        
        
        
        >
             <Screen 
                name="Main"
                component={Main}
                options={{
                    tabBarLabel: 'Films',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <FontAwesome5 name='film' size={size}  color={focused ? '#FFD700' : color}/>
                        );
                    }
                }}
             />
            <Screen 
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Ionicons name='ios-heart' size={size} color={focused ? '#FFD700' : color}/>
                        );
                    }
                }}
            />


        </Navigator>
    );
}

export default AppTabs;