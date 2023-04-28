import { View, Image, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

const criarConta = () =>{
    return(
        <View style={style.container}>
            <View style={{...style.container.header, alignItems:"center",flexDirection:"row"}}>
                <Image source={require("../assets/img/Vector.png")} style={{marginLeft:13}}/>
                <Text style={{color:"#419ED7", fontSize:34, marginLeft:15 }}>Nova Conta</Text>
            </View>
            <View style={{alignItems:"center"}}>
                <View style={{flexDirection:"row", marginTop:90}}>
                    <Text style={{marginTop:5, color:"white", fontSize:14, marginRight:10}}>Nome Completo</Text>
                    <TextInput style={{backgroundColor:"white", height:30, fontSize:14, padding:1, width:250}} defaultValue="Jurandir Pereira"></TextInput>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={{marginTop:5, color:"white", fontSize:14}}>Nome Completo</Text>
                    <TextInput style={{backgroundColor:"white", height:30, fontSize:14, padding:1, marginRight:10}} defaultValue="Jurandir Pereira"></TextInput>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={{marginTop:5, color:"white", fontSize:14}}>Data nascimento</Text>
                    <TextInput style={{backgroundColor:"white", height:30, fontSize:14, padding:1, marginRight:10, width:200}} autoComplete="birthdate-full"></TextInput>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={{marginTop:5, color:"white", fontSize:14}}>E-mail</Text>
                    <TextInput style={{backgroundColor:"white", height:30, fontSize:14, padding:1, marginRight:10}} defaultValue="Jurandir Pereira"></TextInput>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={{marginTop:5, color:"white", fontSize:14}}>Senha</Text>
                    <TextInput style={{backgroundColor:"white", height:30, fontSize:14, padding:1, marginRight:10}} defaultValue="Jurandir Pereira"></TextInput>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={{marginTop:5, color:"white", fontSize:14}}>Repetir senha</Text>
                    <TextInput style={{backgroundColor:"white", height:30, fontSize:14, padding:1, marginRight:10}} defaultValue="Jurandir Pereira"></TextInput>
                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"#ADD4D0",
        header:{
            backgroundColor:"#C1E7E3",
            width:"100%",
            height:77,
        },
    }
});
export default criarConta;
