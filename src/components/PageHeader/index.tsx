import React from 'react';
import { View, Image, Text } from 'react-native';
import logoIcon  from '../../assets/icons/logoIcon.png';
import  {AntDesign, Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native';
import styles from './styles';





interface PageHeaderProps {
    title: string;
    op?: boolean;
}
     

const PageHeader: React.FC<PageHeaderProps> = ({title, op}) => {
    const { goBack}  = useNavigation(); 

    function handleToBack(){
        goBack();
    }

    return (
        <View style={styles.container}>
            
            {
                op
                ?<View  style={[styles.topBar, {justifyContent: 'space-between'}]}  >
                {   op 
                    &&<TouchableOpacity 
                        onPress = {handleToBack}
                    >
                        <AntDesign style={styles.icon} name='back' />
                    </TouchableOpacity> 
                }
                <Image style={styles.logo} source={logoIcon} />
                <Ionicons name="md-heart-empty" style={{color:"#000"}} />
                    
                </View>
                :<View  style={[styles.topBar, {justifyContent: 'center'}]}  >
                    <Image style={styles.logo} source={logoIcon} />
                </View>
            }
            
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
      
    
}

export default PageHeader;