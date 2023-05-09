import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, View, Text, Image } from "react-native";
import Home from "../home.js"
import Proximavacina from "../proximaVacina.js";
import CustomDrawer from "./customDrawer.js";

const drawer = createDrawerNavigator()

const imagemvacina = () =>{
  return(
    <Image source={require("../../assets/img/iconvaccine.png")} style={{width:30, height:30}}/>
  )
}

const proximavac = () =>{
  return(
    <Image source={require("../../assets/img/iconcalendar.png")} style={{width:30, height:30}}/>
  )
}

const DrawerPrincipal = (props) =>{ 
    return(   
        <drawer.Navigator  screenOptions={{headerShown:false, drawerLabelStyle: {fontSize: 22, color:"#419ED7", justifyContent:"flex-start"}}} drawerContent={(props) => <CustomDrawer {...props} />}>
            <drawer.Screen name="Home" component={Home} options={{drawerIcon:imagemvacina}}/>
            <drawer.Screen name="Proximavacina" component={Proximavacina} options={{drawerIcon:proximavac}}/>  
        </drawer.Navigator>
    )
}

export default DrawerPrincipal;
