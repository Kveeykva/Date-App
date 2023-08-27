
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    button:{
        backgroundColor: colors.gold,
        marginTop:20
    },
    line:{
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 2,
        marginBottom: 10,
        width: '20%',
        alignSelf: 'center',
    },
    modal:{
         
    },


    modalText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

export default styles;