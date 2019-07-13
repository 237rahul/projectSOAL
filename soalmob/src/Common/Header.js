// import libraries for making a component
import React from 'react';
import {Text,View} from 'react-native';


//make component
const Header = (props)  =>
{
  const {textStyle,viewStyle}=styles;
    return (
    <View style={viewStyle}>
      <Text style={textStyle} >{props.headtxt}</Text>
    </View>
    );
};

const styles = {
  viewStyle:{
    backgroundColor:'#b3ffff',
    justifyContent:'center',
    alignItems:'center',
    height:100,
    paddingTop:20,
    shadowColor:'#3333ff',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.2,
    elevation:2,
    position:'relative'

  },  
  textStyle:{
      fontSize:50,
      
      
    }
  }
//make the componenet available to other parts of the app
export {Header} ;