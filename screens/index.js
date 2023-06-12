import { View, Image, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/config";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch } from "react-redux";
import { reducerSetUID } from "../src/redux/geralSlice";
const Index = (props) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState(false)
    const [isloading, setIsloading] = useState(false)
    const dispach = useDispatch()
    const botao = () => {
        return (
            <TouchableOpacity style={styles.container.btentrar} onPress={logar}>
                <Text style={{ color: "white", fontSize: 18, fontFamily: "AveriaLibre-Regular" }}>Entrar</Text>
            </TouchableOpacity>
        )
    }

    const logar = () => {
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, senha)
            .then((userLogged) => {
                dispach(reducerSetUID({ uid: userLogged.user.uid, email: userLogged.user.email }))
                props.navigation.push('DrawerPrincipal')
            })
            .catch((error) => {
                console.log("Error on login: " + JSON.stringify(error))
                setError(true)
            })
            .finally(() => {
                setIsloading(false)
            })
    }

    return (
        <View>
            <ImageBackground source={require('../assets/img/inicial.png')} imageStyle={{ opacity: 0.2 }}>
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", flex: 0.6 }}>
                        <Image source={require('../assets/img/iconvaccine.png')} style={{ width: 60, height: 56, marginTop: 10, alignSelf: "center" }} />
                        <Text style={{ color: "#419ED7", fontSize: 54, alignSelf: "center", textDecorationLine: "underline", fontFamily: "AveriaLibre-Regular" }}>MyHealth</Text>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <Text style={{ color: "#419ED7", fontSize: 28, alignSelf: "center", fontFamily: "AveriaLibre-Regular" }}>Controle as suas vacinas</Text>
                        <Text style={{ color: "#419ED7", fontSize: 28, alignSelf: "center", fontFamily: "AveriaLibre-Regular" }}>e fique seguro</Text>
                    </View>
                    <View style={{ flex: 0.9, width: "100%", alignItems: "center" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "white", marginTop: 13, marginRight: 5, fontSize: 18, fontFamily: "AveriaLibre-Regular" }}>E-mail</Text>
                            <TextInput style={{ backgroundColor: 'white', color: "#419ED7", ...styles.container.inputs, fontFamily: "AveriaLibre-Regular", marginRight: 5 }} onChangeText={setEmail} />
                        </View>
                        <View>
                            <View style={{ flexDirection: "row", marginTop: 15 }}>
                                <Text style={{ color: "white", marginTop: 13, marginRight: 4.5, fontSize: 18, fontFamily: "AveriaLibre-Regular" }}>Senha</Text>
                                <TextInput style={{ backgroundColor: 'white', color: "#419ED7", ...styles.container.inputs, fontFamily: "AveriaLibre-Regular" }} onChangeText={setSenha} />
                            </View>

                            <Text style={error ? { color: "#FD7979", marginLeft: 54, fontFamily: "AveriaLibre-Regular" } : { display: "none" }}>E-mail e/ou senha inválidos.</Text>
                            {isloading ?
                                <ActivityIndicator color="black" size={30} style={{ marginTop: 55 }} />
                                :
                                botao()
                            }
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{ ...styles.container.btcriar, alignSelf: "center" }} onPress={() => props.navigation.push('Criarconta')}>
                            <Text style={{ color: "white", alignSelf: "center", fontFamily: "AveriaLibre-Regular" }}>Criar minha conta</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.4, marginTop: 60, alignSelf: "center", fontFamily: "AveriaLibre-Regular" }}>
                        <TouchableOpacity style={{ ...styles.container.btesqueci }} onPress={() => props.navigation.push('Recuperarsenha')}>
                            <Text style={{ color: "white", fontFamily: "AveriaLibre-Regular" }}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </View >

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        btentrar: {
            width: 150,
            height: 35,
            backgroundColor: "#49B976",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 50
        },
        inputs: {
            width: 300,
            height: 51,
            fontSize: 18,
        },
        btcriar: {
            height: 30,
            backgroundColor: "#419ED7",
            width: 200,
            justifyContent: "center",
        },
        btesqueci: {
            height: 25,
            width: 200,
            backgroundColor: "#B5C7D1",
            justifyContent: "center",
            alignItems: "center",
        }
    }
});

export default Index;