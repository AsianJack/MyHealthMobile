import { View, Image, Text, TextInput, ImageBackground, TouchableOpacity, Button, InputAccessoryView, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/config";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../src/config";


const Criarconta = (props) => {
    const [value, setValue] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senharep, setSenharep] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [confere, setConfere] = useState(false)

    const formatDate = (date) => {
        const ano = date.getFullYear();
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const dia = date.getDate().toString().padStart(2, '0');
        return `${dia}/${mes}/${ano}`;
    }

    const criar = () => {
        if (senha === senharep) {
            const colecao = collection(db, "Usuario")
            const userdoc = {
                nome: nome,
                sexo: value,
                nascimento: date
            }
            addDoc(colecao, userdoc)
                .then((refDoc) => {
                    createUserWithEmailAndPassword(auth, email, senha)
                        .then((user) => {
                            props.navigation.pop()
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                })
                .catch((error) => {
                    console.log(error)
                })

        } else {
            setConfere(true)
        }

    }

    return (
        <View style={style.container}>
            <View style={{ ...style.container.header, alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => props.navigation.pop()}>
                    <Image source={require("../assets/img/Vector.png")} style={{ marginLeft: 13 }} />
                </TouchableOpacity>
                <Text style={{ color: "#419ED7", fontSize: 34, marginLeft: 15, fontFamily: "AveriaLibre-Regular" }}>Nova Conta</Text>
            </View>

            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: "row", marginTop: 90 }}>
                    <Text style={{ marginTop: 5, fontFamily: "AveriaLibre-Regular", color: "white", fontSize: 14, marginRight: 10, fontFamily: "AveriaLibre-Regular" }}>Nome Completo</Text>
                    <TextInput style={{ backgroundColor: "white", color: "#3F92C5", height: 30, fontFamily: "AveriaLibre-Regular", fontSize: 14, padding: 5, width: 250 }} onChangeText={setNome} ></TextInput>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text style={{ marginTop: 8, fontFamily: "AveriaLibre-Regular", color: "white", fontSize: 14, marginRight: 10, marginLeft: 19.5 }}>Sexo</Text>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "row" }}>
                                <RadioButton value="masculino" color="#419ED7" backgroundColor="#fff" uncheckedColor="white" size={10} width={15} height={15} marginLeft={10} marginTop={8} justifyContent={"center"} alignItems={"center"} />
                                <Text style={{ marginLeft: 5, fontFamily: "AveriaLibre-Regular", marginTop: 7, color: "#fff" }}>Masculino</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <RadioButton value="feminino" color="#419ED7" backgroundColor="#fff" uncheckedColor="white" size={10} width={15} height={15} marginLeft={10} marginTop={8} justifyContent={"center"} alignItems={"center"} />
                                <Text style={{ marginLeft: 5, fontFamily: "AveriaLibre-Regular", marginTop: 7, color: "#fff" }}>Masculino</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                    <Text style={{ marginTop: 5, fontFamily: "AveriaLibre-Regular", color: "white", fontSize: 14, marginRight: 10 }}>Data nascimento</Text>
                    <TextInput style={{ backgroundColor: "white", fontFamily: "AveriaLibre-Regular", height: 30, fontSize: 14, padding: 5, width: 200, marginRight: 55, color: "#3F92C5" }} defaultValue={formatDate(date)} onPressIn={() => setOpen(true)} ></TextInput>
                    <TouchableOpacity style={{ position: "absolute", right: 60, marginTop: 3 }} onPress={() => setOpen(true)}>
                        <Image source={require("../assets/img/iconcalendar.png")} />
                    </TouchableOpacity>
                    <DatePicker modal open={open} date={date} locale="pt-BR" mode='date' onConfirm={(date) => {
                        setOpen(false);
                        setDate(date);
                    }}

                        onCancel={() => {
                            setOpen(false)
                        }}
                    />

                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text style={{ marginTop: 5, fontFamily: "AveriaLibre-Regular", color: "white", fontSize: 14, marginRight: 10, marginLeft: 63.7 }}>E-mail</Text>
                    <TextInput style={{ backgroundColor: "white", fontFamily: "AveriaLibre-Regular", height: 30, fontSize: 14, padding: 5, width: 250, color: "#3F92C5" }} onChangeText={setEmail}></TextInput>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text style={{ marginTop: 5, fontFamily: "AveriaLibre-Regular", color: "white", fontSize: 14, marginRight: 10, marginLeft: 63.5 }}>Senha</Text>
                    <TextInput style={{ backgroundColor: "white", fontFamily: "AveriaLibre-Regular", height: 30, fontSize: 14, padding: 5, width: 250, color: "#3F92C5" }} onChangeText={setSenha}></TextInput>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text style={{ marginTop: 5, color: "white", fontFamily: "AveriaLibre-Regular", fontSize: 14, marginRight: 10, marginLeft: 15.8 }}>Repetir senha</Text>
                    <TextInput style={{ backgroundColor: "white", fontFamily: "AveriaLibre-Regular", height: 30, fontSize: 14, padding: 5, width: 250, color: "#3F92C5" }} onChangeText={setSenharep}></TextInput>
                </View>
                <Text style={confere ? { right: 9, fontFamily: "AveriaLibre-Regular", color: "#FD7979" } : { display: "none" }}>Senha não confere!</Text>
            </View>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", alignSelf: "center", top: 150, backgroundColor: "#49B976", borderColor: "#37BD6D", width: 155, height: 40 }} onPress={criar}>
                <Text style={{ fontSize: 18, color: "white", fontFamily: "AveriaLibre-Regular" }}>Cadastrar</Text>
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
