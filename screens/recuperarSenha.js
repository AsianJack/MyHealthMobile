import { View, Image, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { auth } from "../src/config";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
const RecuperarSenha = (props) => {
    const [email, setEmail] = useState('')
    const resetasenha = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                props.navigation.pop()
            })
            .catch((error)=>{
                console.log(error)
            })
        
    }
    return (
        <View style={style.container}>
            <View style={{ ...style.container.header, alignItems: "center", flexDirection: "row" }}>
                <Image source={require("../assets/img/iconvaccine.png")} style={{ marginLeft: 13, width: 35, height: 35 }} />
                <Text style={{ color: "#419ED7", fontFamily: "AveriaLibre-Regular", fontSize: 30, marginLeft: 10 }}>MyHealth</Text>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center", top: 230, alignItems: "center" }}>
                <Text style={{ marginRight: 7, fontFamily: "AveriaLibre-Regular", color: "white" }}>E-mail</Text>
                <TextInput style={{ backgroundColor: "white", fontFamily: "AveriaLibre-Regular", height: 30, fontSize: 14, padding: 5, width: 250, color: "#3F92C5" }} onChangeText={setEmail}></TextInput>
            </View>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", alignSelf: "center", top: 450, backgroundColor: "#49B976", borderColor: "#37BD6D", width: 150, height: 30 }} onPress={resetasenha}>
                <Text style={{ color: "white", fontFamily: "AveriaLibre-Regular", fontSize: 16 }}>Recuperar senha</Text>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#ADD4D0",
        header: {
            backgroundColor: "#C1E7E3",
            width: "100%",
            height: 77,
        },
    }
});
export default RecuperarSenha;