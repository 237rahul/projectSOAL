// import libraries for making a component
import React,{Component}from 'react';
import { Text,View } from 'react-native';
import { ClickButton }  from './ClickButton';

//make component
class Header extends Component {
  render_register(){
    console.log('am here to get registered');
  }
  render(){
  const {textStyle,viewStyle,ButtonviewStyle}=styles;
    return (
    <View>
      <View style={ButtonviewStyle}>
        <ClickButton onClick = {() => this.render_register()}>+Add User</ClickButton>
      </View>
      <View style={viewStyle}>
        <Text style={textStyle} >Users</Text>
      </View>
    </View>
    );
  }
};

const styles = {
  viewStyle:{
    backgroundColor:'#b3ffff',
    flexDirection: 'row',
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
  ButtonviewStyle:{
    backgroundColor:'white',
    flexDirection: 'row',
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