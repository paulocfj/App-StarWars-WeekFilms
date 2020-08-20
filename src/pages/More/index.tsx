import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {  useRoute } from '@react-navigation/native';
import FilmItem from '../../components/FilmItem';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

interface Film {
    title: string,
    name: string,
    id: number,
};

interface FilmProps{
    title: string;
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    episode_id: number,

};

function More(){
    const [isFilmFavorite, setFavoriteFilm] = useState(Boolean);
    const [filmProps, setFilmProps] = useState<FilmProps>();
    const route = useRoute();
    const film:Film = route.params;
    

    function favoriteFilm(){
        const filmJson =  JSON.stringify(filmProps);
        AsyncStorage.setItem(film.name, filmJson).then(() =>{
            setFavoriteFilm(true);
        }).catch((err) =>{
            console.log(err);
        })
    }

    function disFavoriteFilm(){
        AsyncStorage.removeItem(film.name).then(() =>{
            setFavoriteFilm(false);
            console.log("Filme removido com sucesso!");
        }).catch((err) =>{
            console.log(err.message);
        })
    }


    function loadFilm(){
        AsyncStorage.getItem(film.name)
            .then((response) => {
                if(response){
                    const filmJson = JSON.parse(response);
                    setFavoriteFilm(true);
                    setFilmProps(filmJson);
                    
                }else{
                    setFavoriteFilm(false);
                    fetchFilm();
                }
            }).catch((err) =>{
                console.log(err.message);
            })
    }

    async function fetchFilm(){
        const response = await fetch(`https://swapi.dev/api/films/${film.id}/`);
        const data =  await response.json();
        delete data['characters'];
        delete data['planets'];
        delete data['starships'];
        delete data['vehicles'];
        delete data['created'];
        delete data['edited'];
        delete data['url'];
        delete data['species'];
        setFilmProps(data);
    }

    useEffect(() =>{
       loadFilm();
    },[]);

    return(
        <>
            <PageHeader title="More"  op={true} />

            <View style={styles.container}>
                <ScrollView >
                    <View style={styles.ajusteCenter}>
                        {   isFilmFavorite
                            ?<TouchableOpacity onPress={disFavoriteFilm}>
                                  <Ionicons name="md-heart"  style={{fontSize: 40, color: '#FFD700', margin:5}}/> 
                             </TouchableOpacity>
                            :<TouchableOpacity onPress={favoriteFilm}>
                                <Ionicons name="md-heart-dislike"  style={{fontSize: 40, color: '#FFD700', margin:5}}/> 
                            </TouchableOpacity>
                        }
                        <FilmItem title={film.title} name={film.name}/>
                    </View>
                    
                    {
                        filmProps
                        ?<View style={styles.ajusteCenter}> 
                            <Text style={styles.text}>
                                <Text style={{fontWeight: 'bold'}}>{filmProps.title}</Text>
                            </Text>
                            <Text style={styles.text}>
                                <Text style={{fontWeight: 'bold'}}>Episode: </Text>{filmProps.episode_id}
                            </Text>
                            <Text style={styles.text}>{filmProps.opening_crawl}</Text>
                            <Text style={styles.text}>
                                <Text style={{fontWeight: 'bold'}}>Director: </Text> {filmProps.director}
                            </Text>
                            <Text style={styles.text}>
                                <Text style={{fontWeight: 'bold'}}>Producer: </Text> {filmProps.producer}
                            </Text>
                            <Text style={styles.text}>
                                <Text style={{fontWeight: 'bold'}}>Date: </Text> {filmProps.release_date}{'\n'}
                            </Text>
                            <Text>{'\n'}</Text>

                        </View>

                        :<Text>Houve um erro de conexão.
                            {'\n'}
                            Assim que a conexão for restabelecida você poderá vizualizar todo o conteúdo.
                        </Text>
                    }
                </ScrollView>
                
                
            </View>
        </>

    );

}


export default More;