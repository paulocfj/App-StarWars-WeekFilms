import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ImageBackground, Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backGround from '../../assets/images/starBackGround.png';
import styles from './styles';
import logo from '../../assets/images/starLogo.png';

function SplashScreen() {

    const {navigate} = useNavigation();
    setTimeout(() =>{
        navigate('Main');
    }, 2000);
    return (
        <View style={styles.container} >
            <ImageBackground style={styles.back} source={backGround} >
                <Image
                    style={styles.banner}
                    source={logo}
                    
                >
                </Image>    
            </ImageBackground>
        </View>
      
    );
}


export default SplashScreen;