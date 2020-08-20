import React from 'react';
import { View, _ScrollView}  from 'react-native';
import FilmItem from '../../components/FilmItem';
import { ScrollView, RectButton} from 'react-native-gesture-handler';

import films from '../../database/films';


import PageHeader from '../../components/PageHeader';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface Films {
    title: string,
    name: string,
    id: number,
};

function Main() {
    const {navigate} = useNavigation();

    function navigationToMore(film:Films){
        navigate("More",film);
    }

    return (
        <>
        <PageHeader
        title="Films"
        />
    
        <View style={styles.container}>
        <ScrollView
            style={styles.scrollView}
        >
                {
                    films.map((filmItem:Films,index) =>{

                        return(
                            <RectButton 
                                onPress={() =>navigationToMore(filmItem)}
                            >
                                <FilmItem key={index} title={filmItem.title} name={filmItem.name}  />
                            </RectButton>
                        ) 
                    })
                }
                

            </ScrollView>
        </View>
        </>

    );
}

export default Main;

