import {NavigationContainer} from "@react-navigation/native";
import StackRoutes from "./stackroutes";
//import {BottomTabsRoutes} from "./bottom-tabs.routes";
//import {MaterialCommunityIcons} from "@expo/vector-icons";
//import {DrawerRoutes} from "./drawer.routes";

export default function Routes() {
    return (
        <NavigationContainer>
           <StackRoutes/>
        </NavigationContainer>
    )
}