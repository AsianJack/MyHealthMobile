import { View, Image, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";


index = () => {
    return (
        <View>
            <ImageBackground source={require('../assets/img/inicial.png')} imageStyle={{ opacity: 0.2 }}>
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", flex: 0.6 }}>
                        <Image source={require('../assets/img/iconvaccine.png')} style={{ width: 60, height: 56, marginTop: 10, alignSelf: "center" }} />
                        <Text style={{ color: "#419ED7", fontSize: 54, alignSelf: "center", textDecorationLine:"underline" }}>MyHealth</Text>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <Text style={{ color: "#419ED7", fontSize: 28, alignSelf: "center" }}>Controle as suas vacinas</Text>
                        <Text style={{ color: "#419ED7", fontSize: 28, alignSelf: "center" }}>e fique seguro</Text>
                    </View>
                    <View style={{ flex: 0.9 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "white", marginTop: 13, marginRight: 5, fontSize: 18 }}>E-mail</Text>
                            <TextInput style={{ backgroundColor: 'white', color: "#419ED7", ...styles.container.inputs }} defaultValue="jurandir.pereira@hotmail.com" />
                        </View>
                        <View>
                            <View style={{ flexDirection: "row", marginTop: 15 }}>
                                <Text style={{ color: "white", marginTop: 13, marginRight: 4.5, fontSize: 18 }}>Senha</Text>
                                <TextInput style={{ backgroundColor: 'white', color: "#419ED7", ...styles.container.inputs }} defaultValue="*********" />
                            </View>

                            <Text style={{ color: "#FD7979", marginLeft: 54 }}>E-mail e/ou senha inválidos.</Text>
                            <TouchableOpacity style={styles.container.btentrar}>
                                <Text style={{ color: "white", fontSize: 18 }}>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{ ...styles.container.btcriar, alignSelf:"center" }}>
                            <Text style={{ color: "white", alignSelf: "center" }}>Criar minha conta</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.4, marginTop:60, alignSelf:"center" }}>
                        <TouchableOpacity style={{...styles.container.btesqueci}}>
                            <Text style={{ color: "white" }}>Esqueci minha senha</Text>
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
        btesqueci:{
            height:25,
            width:200,
            backgroundColor:"#B5C7D1",
            justifyContent:"center",
            alignItems:"center",
        }
    }
});

export default index;