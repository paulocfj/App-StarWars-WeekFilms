import React from 'react';
import { View }  from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';



import styles from './styles';

interface Films {
    title: string,
    name: string,
    id: number,
};


function Favoritos() {
    return (

        <>
        <PageHeader
        title="Films"
        />
    
        <View style={styles.container}>
        
        </View>
        </>



    );
}

export default Favoritos;

