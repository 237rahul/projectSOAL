import React from 'react';
import { View, AppRegistry } from 'react-native';
import { Header } from './src/Components/Header';
import { UserList } from './src/Components/userList';

const App = () => (
    <View
    style = {{flex:1}}>
    <Header headtxt= {'Users'} />
    <UserList/>
    </View>
);
AppRegistry.registerComponent('soalmob', () => App);