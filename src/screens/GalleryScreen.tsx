import React from "react";
import { View,Text,Button} from 'react-native';

export default function GalleryScreen({ navigation}:any) {
    return (
        <View style={{flex:1,backgroundColor:'lightpink',alignItems:'center',justifyContent:'center'}}>
            <Text>Gallery</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
            <Button title="Go to Game" onPress={() => navigation.navigate('Game')} />
        </View>
    );
}
