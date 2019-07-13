import React from 'react';
import { Text, TouchableOpacity } from  'react-native';


const ClickButton = ({onClick,children}) =>
{
    const { buttonStyle , textStyle} =styles;
    // console.log('rgu in the clickButton');
    return (
        <TouchableOpacity
            style={ buttonStyle }
            onPress={ onClick } >
            <Text style={ textStyle}>
                {children}
            </Text>
            </TouchableOpacity>

    );

};

const styles ={
    buttonStyle:{
        alignSelf:'center',
        // backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,
        width:30,
        height:50,
        flex:2  

    },
    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:30,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom: 10
    },
}
export {ClickButton} ;