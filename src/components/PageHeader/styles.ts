import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#000',
    },

    topBar: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'NewsCycle_700Bold',
        color: '#FFD700',
        fontSize:  25,
        lineHeight: 30,
        marginBottom: 15,
    },

    logo: {
        width: 150 ,
        height: 40,
        resizeMode: "contain",
        marginBottom: 10,
    },

    icon: {
        color: '#FFD700',
        fontSize: 25, 
    }

});

export default styles;