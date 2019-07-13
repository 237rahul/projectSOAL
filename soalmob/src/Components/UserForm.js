import React, { Component } from 'react';
import { View } from 'react-native'
import { CardSection } from './CardSection';
import { Input } from './Input';



class UserForm extends Component{
    render()
    {
        return(
            <View>
                <CardSection>
                    <Input label="Name" 
                    placeholder="rockey"
                    ></Input>
                </CardSection>

                
                <CardSection>
                    <Input label="phone" 
                    placeholder="123-456-789"
                    ></Input>
                </CardSection>

                <CardSection>
                    <Input label="Location" 
                    placeholder="India"
                    ></Input>
                </CardSection>

            </View>
        );
    }
}


export default UserForm; 