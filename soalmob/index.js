import React from 'react';
import { View,AppRegistry } from 'react-native';
import { Header } from './src/Common/Header'
import { UserList } from './src/Components/userList'


const App = () => (
    <View>
    <Header headtxt= {'Users'} />
    <UserList/>
    </View>
);
AppRegistry.registerComponent('soalmob', () => App);