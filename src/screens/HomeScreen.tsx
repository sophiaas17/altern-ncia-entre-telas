
import React from "react";
import { View,Text,Button} from 'react-native';

export default function HomeScreen({navigation}:any) {
    return (
        <View style={{flex:1,backgroundColor:'lightblue',alignItems:'center',justifyContent:'center'}}>
            <Text>Home</Text>
            <Button title="Go to Gallery" onPress={() => navigation.navigate('Gallery')} />
            <Button title="Go to Game" onPress={() => navigation.navigate('Game')} />
        </View>
    );
}
