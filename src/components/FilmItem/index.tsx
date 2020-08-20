import React from 'react';
import { View, Text, Image} from 'react-native';

import EpisodeI from '../../assets/images/EpisodeI.jpg';
import EpisodeII from '../../assets/images/EpisodeII.jpg';
import EpisodeIII from '../../assets/images/EpisodeIII.jpg';
import EpisodeIV from '../../assets/images/EpisodeIV.jpg';
import EpisodeV from '../../assets/images/EpisodeV.jpg';
import EpisodeVI from '../../assets/images/EpisodeVI.jpg';



import styles from './styles';

interface FilmItemProps{
    title: string;
    name: string;
}


const FilmItem: React.FC<FilmItemProps> = ({title, name}) =>{

    return (

            <View style={styles.container}>
                    <Text style={styles.title}>{title} </Text>
                    {   name == "I"
                        ? <Image  style={styles.banner} source={EpisodeI}/>
                        : name == "II" 
                        ? <Image  style={styles.banner} source={EpisodeII}/>
                        : name == "III"
                        ? <Image  style={styles.banner} source={EpisodeIII}/>
                        : name == "IV"
                        ? <Image  style={styles.banner} source={EpisodeIV}/>
                        : name == "V"
                        ? <Image  style={styles.banner} source={EpisodeV}/>
                        : <Image  style={styles.banner} source={EpisodeVI}/>

                    }
            </View>
    );
}

export default FilmItem;