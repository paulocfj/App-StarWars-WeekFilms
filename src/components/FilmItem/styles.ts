import { StyleSheet }  from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: "#222",
        borderRadius: 8,
        marginBottom:16 ,
        marginTop: 10,
        width: 300,
        height: 500,
        alignItems: 'center',
        overflow: 'hidden'
    },

    banner: {
       flex: 1,
       width: "100%",
       resizeMode: "contain",
    },

    title: {
        fontFamily: 'NewsCycle_700Bold',
        fontSize: 18,
        margin: 5,
        color: '#FFD700',
    },

    footer: {
        backgroundColor: '#333',
        padding: 5,
        alignItems: 'center', 
        marginTop: 24,
    },

    

});

export default styles;