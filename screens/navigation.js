import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./index.js";
import EditarVacina from "./Editarvacinas.js";
import NovaVacina from "./novaVacina.js";
import CriarConta from "./Criarconta.js";
import RecuperarSenha from "./recuperarSenha.js";
import DrawerPrincipal from "./component/drawerPrincipal.js";

const Stack = createStackNavigator()
const navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Index" component={Index}/>
                <Stack.Screen name="DrawerPrincipal" component={DrawerPrincipal}/>
                <Stack.Screen name="Criarconta" component={CriarConta}/>
                <Stack.Screen name="Recuperarsenha" component={RecuperarSenha}/>
                <Stack.Screen name="Novavacina" component={NovaVacina}/>
                <Stack.Screen name="Editarvacina" component={EditarVacina}/>
            </Stack.Navigator>
        </NavigationContainer>
    )


}

export default navigation;