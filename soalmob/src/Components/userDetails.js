import React from 'react';
import { Image,Text,View } from 'react-native';
import { Card } from './Card';
import { CardSection } from './CardSection';
import { ClickButton } from './ClickButton';

const UserDetails = (props) => {
return (
    <Card>
        <View>
            </View>
        <CardSection>
            <View
            style = {styles.thumbnailContainerStyle}>
            <Image 
            source={{uri: props.user.thumbnail_image} }
            style = {styles.thumbnailStyle} />
            </View>
            <View style = {styles.headerContentStyle}>
                <Text
                style={styles.headerTextStyle}>
                    {props.user.username}
                </Text>
                <Text>
                    {props.user.mobile}
                </Text>
            </View>

        </CardSection>
    </Card>
    );
};

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 30
    },
    thumbnailStyle: {
      height: 80,
      width: 80
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
  };
  
export default UserDetails;