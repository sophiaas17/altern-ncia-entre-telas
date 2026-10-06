import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import GameScreen from "../screens/GameScreen";

export default function StackRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={HomeScreen}
        options={{headerShown:true,title:"Main Menu"}}/>
      <Screen name="Gallery" component={GalleryScreen}/>
      <Screen name="Game" component={GameScreen}/>
    </Navigator>
  )
}