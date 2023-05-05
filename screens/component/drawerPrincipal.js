import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Home.js"
import Proximavacina from "../proximaVacina.js";
import Login from "../index.js"
const drawer = createDrawerNavigator()
const DrawerPrincipal = () =>{
    return(
        <drawer.Navigator screenOptions={{headerShown:false, drawerActiveBackgroundColor:"#ADD5D0"}}>
            <drawer.Screen name="Home" component={Home}/>
            <drawer.Screen name="Proximavacina" component={Proximavacina}/>
            
        </drawer.Navigator>
    )
}

export default DrawerPrincipal;