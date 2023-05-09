import { View, Image, Modal, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'
import { useState } from "react";
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';


const EditarVacina = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [vacina, setVacina] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState(new Date());
    const [opendate, setOpendate] = useState(false);
    const [imageUri, setImageUri] = useState(null);
    const [openprox, setOpenprox] = useState(false);
    const [prox, setprox] = useState(new Date());

    const formatDate = (date) => {
        const ano = date.getFullYear();
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const dia = date.getDate().toString().padStart(2, '0');
        return `${dia}/${mes}/${ano}`;
    }

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
                <TouchableOpacity onPress={()=>props.navigation.pop()}>
                    <Image source={require("../assets/img/Vector.png")} style={{ marginLeft: 13 }} />
                </TouchableOpacity>

                <Text style={{ color: "#419ED7", fontFamily: "AveriaLibre-Regular", fontSize: 34, marginLeft: 15 }}>Nova Vacina</Text>
            </View>

            <View style={{ alignItems: "center", paddingLeft: 10 }}>
                <View style={{ flexDirection: "row", marginTop: 90, marginRight: 50 }}>
                    <Text style={{ marginTop: 5, color: "white", fontFamily: "AveriaLibre-Regular", fontSize: 14, marginRight: 10 }}>Data nascimento</Text>
                    <TextInput style={{ backgroundColor: "white", fontFamily: "AveriaLibre-Regular", height: 30, fontSize: 14, padding: 5, width: 150, marginRight: 55, color: "#3F92C5" }} defaultValue={formatDate(date)} onPressIn={() => setOpendate(true)} ></TextInput>
                    <TouchableOpacity style={{ position: "absolute", right: 60, marginTop: 3 }} onPress={() => setOpendate(true)}>
                        <Image source={require("../assets/img/iconcalendar.png")} />
                    </TouchableOpacity>
                    <DatePicker modal title="Confirmar Data" open={opendate} date={date} locale="pt-BR" mode='date' onConfirm={(date) => {
                        setOpendate(false);
                        setDate(date);

                    }}

                        onCancel={() => {
                            setOpendate(false)
                        }}
                    />
                </View>


                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ marginTop: 5, color: "white", fontFamily: "AveriaLibre-Regular", fontSize: 14, marginRight: 10, marginLeft: 10 }}>Vacina</Text>
                    <TextInput style={{ backgroundColor: "white", fontFamily: "AveriaLibre-Regular", height: 30, fontSize: 14, padding: 5, width: 200, color: "#3F92C5" }} onChangeText={(vacina) => setVacina(vacina)}></TextInput>
                </View>

                <View style={{ flexDirection: "row", marginTop: 5, flexWrap: "wrap" }}>
                    <Text style={{ marginTop: 5, color: "white", fontFamily: "AveriaLibre-Regular", fontSize: 14, marginRight: 10, marginLeft: 43 }}>Dose</Text>
                    <View style={{ flexDirection: "column" }}>
                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}  >
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <RadioButton value="1a. Dose" color="#419ED7" uncheckedColor="white" backgroundColor="#fff" size={10} width={15} height={15} marginTop={8} justifyContent={"center"} alignItems={"center"} marginLeft={5} />
                                    <Text style={{ marginLeft: 5, fontFamily: "AveriaLibre-Regular", marginTop: 6, color: "#fff" }}>1ª Dose</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <RadioButton value="2a. Dose" color="#419ED7" backgroundColor="#fff" uncheckedColor="white" size={10} width={15} height={15} marginLeft={10} marginTop={8} justifyContent={"center"} alignItems={"center"} />
                                    <Text style={{ marginLeft: 5, fontFamily: "AveriaLibre-Regular", marginTop: 6, color: "#fff", marginRight: 10 }}>2ª Dose</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <RadioButton value="3a. Dose" color="#419ED7" backgroundColor="#fff" uncheckedColor="white" size={10} width={15} height={15} marginTop={8} justifyContent={"center"} alignItems={"center"} />
                                    <Text style={{ marginLeft: 5, fontFamily: "AveriaLibre-Regular", marginTop: 6, color: "#fff" }}>3ª Dose</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>

                                <View style={{ flexDirection: "row", right: 5 }}>
                                    <RadioButton value="Dose Única" color="#419ED7" backgroundColor="#fff" uncheckedColor="white" size={10} width={15} height={15} marginLeft={10} marginTop={8} justifyContent={"center"} alignItems={"center"} />
                                    <Text style={{ marginLeft: 5, fontFamily: "AveriaLibre-Regular", marginTop: 6, color: "#fff" }}>Dose Única</Text>
                                </View>
                            </View>
                        </RadioButton.Group>
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: 5, marginRight: 130 }}>
                    <Text style={{ marginTop: 5, fontFamily: "AveriaLibre-Regular", color: "white", fontSize: 14, marginRight: 15, marginLeft: 63.5 }}>Comprovante</Text>
                    <TouchableOpacity style={{ backgroundColor: "#419ED7", width: 165, height: 22, justifyContent: "center", alignItems: "center", marginTop: 10 }} onPress={chooseImage}>
                        <Text style={{ color: "white", fontFamily: "AveriaLibre-Regular" }}>Selecionar Imagem...</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={imageUri != null ? { uri: imageUri } : require("../assets/img/image-comprovante.png")} style={{ height: 100, width: 200, marginLeft: 68, marginTop: 8 }} />
                </View>

                <View style={{ flexDirection: "row", marginTop: 10, marginRight: 55 }}>
                    <Text style={{ marginTop: 5, fontFamily: "AveriaLibre-Regular", color: "white", fontSize: 14, marginRight: 13 }}>Próxima vacinação</Text>
                    <TextInput style={{ backgroundColor: "white", fontFamily: "AveriaLibre-Regular", height: 30, fontSize: 14, padding: 5, width: 150, marginRight: 55, color: "#3F92C5" }} defaultValue={formatDate(prox)} onPressIn={() => setOpenprox(true)} ></TextInput>
                    <TouchableOpacity style={{ position: "absolute", right: 60, marginTop: 3 }} onPress={() => setOpenprox(true)}>
                        <Image source={require("../assets/img/iconcalendar.png")} />
                    </TouchableOpacity>
                    <DatePicker modal title="Confirmar Data" open={openprox} date={date} locale="pt-BR" mode='date' onConfirm={(date) => {
                        setOpenprox(false);
                        setprox(date);
                        console.log(date.getDate());
                    }}

                        onCancel={() => {
                            setOpenprox(false)
                        }}
                    />
                </View>
            </View>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", alignSelf: "center", top: 50, backgroundColor: "#49B976", borderColor: "#37BD6D", width: 155, height: 40 }} onPress={() => props.navigation.pop()}>
                <Text style={{ fontSize: 18, fontFamily: "AveriaLibre-Regular", color: "white" }}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", alignSelf: "center", top: 150, backgroundColor: "#FD7979", borderColor: "#37BD6D", width: 105, height: 30 }} onPress={() => setModalVisible(true)}>
                <Image source={require("../assets/img/trash.png")} style={{ width: 20, height: 20, marginRight: 5 }} />
                <Text style={{ fontSize: 16, fontFamily: "AveriaLibre-Regular", color: "white", marginRight: 10 }}>Excluir</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                style={{}}
            >
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: "100%", height: "100%" }}>
                    <View style={{ backgroundColor: "white", justifyContent: "center", alignItems: "center", height: 150, width: 350, alignSelf: "center", top: 250, borderColor: "#B9DFDB", borderWidth: 2 }}>
                        <Text style={{ marginBottom: 10, fontFamily: "AveriaLibre-Regular", fontSize: 18, color: "#FD7979" }}>Tem certeza que deseja{'\n'}  remover essa vacina?</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 10, marginTop: 10 }}>
                            <TouchableOpacity style={{ backgroundColor: "#FF8383", width: 140, height: 45, justifyContent: "center" }} onPress={() => props.navigation.pop()}>
                                <Text style={{ textAlign: "center", fontFamily: "AveriaLibre-Regular", color:"white" }}>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "#3F92C5", width: 140, height: 45, justifyContent: "center" }} onPress={() => setModalVisible(false)}>
                                <Text style={{ textAlign: "center", fontFamily: "AveriaLibre-Regular", color:"white" }}>Não</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
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
export default EditarVacina;
