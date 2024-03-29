import React from 'react';
import { View,Image } from 'react-native';

const Card = (props) =>
{
    return (
        <View style={styles.container}>
        {props.children}
        </View>
    );
};

const styles ={
    container:{
        borderWidth:1,
        borderRadius: 2,
        borderColor:'#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset:{ width:0 ,height: 2},
        shadowRadius:2,
        elevation: 1,
        marginLeft:5,
        marginRight:5,
        marginTop:10
    }
};
 export  {Card};