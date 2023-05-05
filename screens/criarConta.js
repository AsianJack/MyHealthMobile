import { View, Image, Text, TextInput, ImageBackground, TouchableOpacity, Button, InputAccessoryView, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'
import { useState } from "react";


const Criarconta = (props) => {
    const [value, setValue] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const formatadate = () => {
        
    }

    return (
        <View style={style.container}>
            <View style={{ ...style.container.header, alignItems: "center", flexDirection: "row" }}>
                <Image source={require("../assets/img/Vector.png")} style={{ marginLeft: 13 }} />
                <Text style={{ color: "#419ED7", fontSize: 34, marginLeft: 15 }}>Nova Conta</Text>
            </View>

            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: "row", marginTop: 90 }}>
                    <Text style={{ marginTop: 5, color: "white", fontSize: 14, marginRight: 10 }}>Nome Completo</Text>
                    <TextInput style={{ backgroundColor: "white", color:"#3F92C5", height: 30, fontSize: 14, padding:5 , width: 250 }} defaultValue="Jurandir Pereira"></TextInput>
                </View>

                <View style={{ flexDirection: "row", marginTop:20 }}>
                    <Text style={{ marginTop: 8, color: "white", fontSize: 14, marginRight: 10, marginLeft: 19.5 }}>Sexo</Text>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "row" }}>
                                <RadioButton value="first" color="#419ED7" uncheckedColor="white" backgroundColor="#fff" width={20} height={20} justifyContent={"center"} alignItems={"center"} marginTop={8} />
                                <Text style={{ marginLeft: 5, marginTop: 8, color: "#fff" }}>Masculino</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <RadioButton value="second" color="#419ED7" backgroundColor="#fff" uncheckedColor="white" width={20} height={20} justifyContent={"center"} alignItems={"center"} marginTop={8} marginLeft={20} />
                                <Text style={{ marginLeft: 5, marginTop: 8, color: "#fff" }}>Masculino</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", marginTop:20 }}>
                    <Text style={{ marginTop: 5, color: "white", fontSize: 14, marginRight: 10 }}>Data nascimento</Text>
                    <TextInput style={{ backgroundColor: "white", height: 30, fontSize: 14, padding:5, width: 200, marginRight:55, color:"#3F92C5" }} defaultValue="11/08/2022" ></TextInput>
                    <TouchableOpacity style={{ position: "absolute", right: 60, marginTop: 3 }} onPress={() => setOpen(true)}>
                        <Image source={require("../assets/img/iconcalendar.png")} />
                    </TouchableOpacity>
                    <DatePicker modal open={open} date={date} locale="pt-BR" mode='date' onConfirm={(date) => {
                        setOpen(false);
                        setDate(date);
                        console.log(date.getDate());
                    }}

                        onCancel={() => {
                            setOpen(false)
                        }}
                    />

                </View>

                <View style={{ flexDirection: "row", marginTop:20 }}>
                    <Text style={{ marginTop: 5, color: "white", fontSize: 14, marginRight: 10, marginLeft:63.7 }}>E-mail</Text>
                    <TextInput style={{ backgroundColor: "white", height: 30, fontSize: 14, padding:5, width: 250, color:"#3F92C5" }} defaultValue="Jurandir.pereira@hotmail.com"></TextInput>
                </View>

                <View style={{ flexDirection: "row", marginTop:20 }}>
                    <Text style={{ marginTop: 5, color: "white", fontSize: 14, marginRight: 10, marginLeft:63.5 }}>Senha</Text>
                    <TextInput style={{ backgroundColor: "white", height: 30, fontSize: 14, padding:5, width: 250, color:"#3F92C5" }} defaultValue="Jurandir Pereira"></TextInput>
                </View>

                <View style={{ flexDirection: "row", marginTop:20 }}>
                    <Text style={{ marginTop: 5, color: "white", fontSize: 14, marginRight: 10, marginLeft:15.8 }}>Repetir senha</Text>
                    <TextInput style={{ backgroundColor: "white", height: 30, fontSize: 14, padding:5, width: 250, color:"#3F92C5" }} defaultValue="Jurandir Pereira"></TextInput>   
                </View>
                <Text style={{right:9, color:"#FD7979"}}>Senha não confere!</Text>
            </View>
            <TouchableOpacity style={{justifyContent:"center",alignItems:"center",alignSelf:"center", top:150, backgroundColor:"#49B976", borderColor:"#37BD6D", width:155, height:40}} onPress={()=>props.navigation.pop()}>
                <Text style={{fontSize:18, color:"white"}}>Cadastrar</Text>
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
export default Criarconta;
