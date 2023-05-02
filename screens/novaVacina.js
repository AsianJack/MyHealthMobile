import { View, Image, Text, TextInput, ImageBackground, TouchableOpacity, Button, InputAccessoryView, StyleSheet, SafeAreaView } from "react-native";
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'
import { useState } from "react";
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';


const criarConta = () => {
    const [value, setValue] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [imageUri, setImageUri] = useState(null);


    const chooseImage = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // You can do something with the selected image uri here
                setImageUri(response.assets[0].uri);
            }
        });
    };

    return (
        <View style={style.container}>
            <View style={{ ...style.container.header, alignItems: "center", flexDirection: "row" }}>
                <Image source={require("../assets/img/Vector.png")} style={{ marginLeft: 13 }} />
                <Text style={{ color: "#419ED7", fontSize: 34, marginLeft: 15 }}>Nova Conta</Text>
            </View>

            <View style={{ alignItems: "center", paddingLeft: 10 }}>
                <View style={{ flexDirection: "row", marginTop: 90, marginRight: 50 }}>
                    <Text style={{ marginTop: 5, color: "white", fontSize: 14, marginRight: 10 }}>Data nascimento</Text>
                    <TextInput style={{ backgroundColor: "white", height: 30, fontSize: 14, padding: 5, width: 150, marginRight: 55, color: "#3F92C5" }} defaultValue="11/08/2022" onPressIn={() => setOpen(true)} ></TextInput>
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


                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ marginTop: 5, color: "white", fontSize: 14, marginRight: 10, marginLeft: 10 }}>Vacina</Text>
                    <TextInput style={{ backgroundColor: "white", height: 30, fontSize: 14, padding: 5, width: 200, color: "#3F92C5" }} defaultValue="Jurandir.pereira@hotmail.com"></TextInput>
                </View>

                <View style={{ flexDirection: "row", marginTop: 5, flexWrap: "wrap" }}>
                    <Text style={{ marginTop: 5, color: "white", fontSize: 14, marginRight: 10, marginLeft: 43 }}>Dose</Text>
                    <View style={{ flexDirection: "column" }}>
                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}  >
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <RadioButton value="first" color="#419ED7" uncheckedColor="white" backgroundColor="#fff" size={10} width={15} height={15} marginTop={8} justifyContent={"center"} alignItems={"center"} marginLeft={5} />
                                    <Text style={{ marginLeft: 5, marginTop: 6, color: "#fff" }}>1ª Dose</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <RadioButton value="second" color="#419ED7" backgroundColor="#fff" uncheckedColor="white" size={10} width={15} height={15} marginLeft={10} marginTop={8} justifyContent={"center"} alignItems={"center"} />
                                    <Text style={{ marginLeft: 5, marginTop: 6, color: "#fff", marginRight: 10 }}>2ª Dose</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <RadioButton value="third" color="#419ED7" backgroundColor="#fff" uncheckedColor="white" size={10} width={15} height={15} marginTop={8} justifyContent={"center"} alignItems={"center"} />
                                    <Text style={{ marginLeft: 5, marginTop: 6, color: "#fff" }}>3ª Dose</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>

                                <View style={{ flexDirection: "row", right: 5 }}>
                                    <RadioButton value="single" color="#419ED7" backgroundColor="#fff" uncheckedColor="white" size={10} width={15} height={15} marginLeft={10} marginTop={8} justifyContent={"center"} alignItems={"center"} />
                                    <Text style={{ marginLeft: 5, marginTop: 6, color: "#fff" }}>Dose Única</Text>
                                </View>
                            </View>
                        </RadioButton.Group>
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: 5, marginRight: 130 }}>
                    <Text style={{ marginTop: 5, color: "white", fontSize: 14, marginRight: 15, marginLeft: 63.5 }}>Comprovante</Text>
                    <TouchableOpacity style={{ backgroundColor: "#419ED7", width: 165, height: 22, justifyContent: "center", alignItems: "center", marginTop: 10 }} onPress={chooseImage}>
                        <Text style={{ color: "white" }}>Selecionar Imagem...</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={imageUri!=null?{ uri: imageUri }:require("../assets/img/image-comprovante.png")} style={{ height: 100, width: 200, marginLeft: 68, marginTop: 8 }} />
                </View>

                <View style={{ flexDirection: "row", marginTop: 10, marginRight: 55 }}>
                    <Text style={{ marginTop: 5, color: "white", fontSize: 14, marginRight: 13 }}>Próxima vacinação</Text>
                    <TextInput style={{ backgroundColor: "white", height: 30, fontSize: 14, padding: 5, width: 150, marginRight: 55, color: "#3F92C5" }} defaultValue="11/08/2022" onPressIn={() => setOpen(true)} ></TextInput>
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
            </View>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", alignSelf: "center", top: 150, backgroundColor: "#49B976", borderColor: "#37BD6D", width: 155, height: 40 }}>
                <Text style={{ fontSize: 18, color: "white" }}>Cadastrar</Text>
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
export default criarConta;
