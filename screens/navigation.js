import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./index.js";
import EditarVacina from "./Editarvacinas.js";
import NovaVacina from "./novaVacina.js";
import CriarConta from "./criarConta.js";
import RecuperarSenha from "./recuperarSenha.js";
import DrawerPrincipal from "./component/drawerPrincipal.js";
import { Provider } from "react-redux";
import { store } from "../src/redux/store.js";

const Stack = createStackNavigator()
const navigation = () => {
    return (
        <Provider store={store}>
            <NavigationContainer >
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Index" component={Index} />
                    <Stack.Screen name="DrawerPrincipal" component={DrawerPrincipal} />
                    <Stack.Screen name="Criarconta" component={CriarConta} />
                    <Stack.Screen name="Recuperarsenha" component={RecuperarSenha} />
                    <Stack.Screen name="Novavacina" component={NovaVacina} />
                    <Stack.Screen name="Editarvacina" component={EditarVacina} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )


}

export default navigation;