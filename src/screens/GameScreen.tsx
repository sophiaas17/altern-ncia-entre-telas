import React from "react";
import { View,Text,Button} from 'react-native';

export default function HomeScreen({navigation}:any) {
    return (
        <View style={{flex:1,backgroundColor:'lightgreen',alignItems:'center',justifyContent:'center'}}>
            <Text>Game</Text>
            <Button title="Go to Gallery" onPress={() => navigation.navigate('Gallery')} />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}
