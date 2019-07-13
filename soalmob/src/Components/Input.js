import React from 'react';
import {TextInput, View, Text} from 'react-native';


const Input =({label, value, onChangeText, placeholder,secureTextEntry}) =>
{
    const {inputStyle, labelStyle, containerStyle }= styles;
    return(
    <View style={containerStyle}>
        <Text style={ labelStyle}>
            {label}
        </Text>
        <TextInput 
        secureTextEntry={secureTextEntry}//if left empty will pass it as true
        autoCorrect={false}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        style={{height:20, width:100}}
        />
    </View>
    );
};
const styles ={
   inputStyle:{
       color:'#000',
       fontSize:18,
       lineHeight:25,
       flex:1
       
       
   },
   labelStyle:{
       fontSize:18,
       flex:2

   },
   containerStyle:{
       height:40,
       flex:1,
       flexDirection:'row', 
   } 
};
export {Input};