import { View, Image, Modal, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'
import { useState, useEffect } from "react";
import { editarVacina } from "./component/DAO";
import { excluirVacina } from "./component/DAO";
import { launchImageLibrary } from 'react-native-image-picker';
import { useSelector } from "react-redux";
import { db } from '../src/config'
import { onSnapshot, query, collection, where } from 'firebase/firestore'
let ajudaprox = "ajuda"
let lista = []
const EditarVacina = (props) => {

    const [prox, setprox] = useState(new Date());
    const id = useSelector((state) => state.idvac.idvac)
    let [day, month, year] = props.route.params.data.data.split('/');
    const [modalVisible, setModalVisible] = useState(false);
    const [vacina, setVacina] = useState(props.route.params.data.title);
    const [value, setValue] = useState(props.route.params.data.dose);
    const [date, setDate] = useState(new Date(year, month - 1, day));
    const [opendate, setOpendate] = useState(false);
    const [imageUri, setImageUri] = useState();
    const [foto, setFoto] = useState(null);
    const [openprox, setOpenprox] = useState(false);

    const listaVacinas = () => {
        setVacina(lista[0].title)
        setValue(lista[0].dose)
        setImageUri(lista[0].imagem)
        let [day, month, year] = lista[0].data.split('/')
        setDate(new Date(year, month - 1, day))
        console.log(lista)
        if (lista[0].prox == null) {
            setprox(new Date());
            ajudaprox = null
        }else{
            [day, month, year] = lista[0].prox.split('/');
            setprox(new Date(year, month - 1, day))
        }
    }


    useEffect(() => {
        console.log(id)
        lista = []
        const q = query(collection(db, "vacinas"), where("__name__", "==", id))
        onSnapshot(q, (snapshot) => {
            snapshot.forEach((doc) => {
                lista.push({
                    title: doc.data().title,
                    dose: doc.data().dose,
                    data: doc.data().data,
                    prox: doc.data().prox,
                    imagem: doc.data().imagem,
                })
                // console.log("Documento: " + JSON.stringify(doc.data()))
            })
            listaVacinas()
        })
    }, [])


    const formatDate = (date) => {
        const ano = date.getFullYear();
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const dia = date.getDate().toString().padStart(2, '0');
        return `${dia}/${mes}/${ano}`;
    }

    const data = () => {
        // [day, month, year] = lista[0].prox.split('/');
        // // props.route.params.data.prox.split('/');
        console.log(lista)
        setprox(new Date());
        ajudaprox = null
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
                setFoto(response.assets[0])
                setImageUri(response.assets[0].uri);
            }
        });
    };

    return (
        <View style={style.container}>

            <View style={{ ...style.container.header, alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => { props.navigation.pop(), ajudaprox = "ajuda" }}>
                    <Image source={require("../assets/img/Vector.png")} style={{ marginLeft: 13 }} />
                </TouchableOpacity>
                <Text style={{ color: "#419ED7", fontFamily: "AveriaLibre-Regular", fontSize: 34, marginLeft: 15 }}>Editar Vacina</Text>
            </View>

            <View style={{ alignItems: "center", paddingLeft: 10 }}>
                <View style={{ flexDirection: "row", marginTop: 90, marginRight: 57 }}>
                    <Text style={{ marginTop: 5, color: "white", fontFamily: "AveriaLibre-Regular", fontSize: 14, marginRight: 10 }}>Data de vacinação</Text>
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
                    <TextInput style={{ backgroundColor: "white", fontFamily: "AveriaLibre-Regular", height: 30, fontSize: 14, padding: 5, width: 200, color: "#3F92C5" }} defaultValue={vacina} onChangeText={(vacina) => setVacina(vacina)}></TextInput>
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

                <View style={{ flexDirection: "row", marginTop: 10, marginRight: 58 }}>
                    <Text style={{ marginTop: 5, fontFamily: "AveriaLibre-Regular", color: "white", fontSize: 14, marginRight: 13 }}>Próxima vacinação</Text>
                    <TextInput editable={value != "Dose Única"} style={{ backgroundColor: "white", fontFamily: "AveriaLibre-Regular", height: 30, fontSize: 14, padding: 5, width: 150, marginRight: 55, color: "#3F92C5" }} defaultValue={value != "Dose Única" ? ajudaprox == null ? formatDate(prox) : data() : ""} onPressIn={() => setOpenprox(true)} ></TextInput>
                    <TouchableOpacity style={value != "Dose Única" ? { position: "absolute", right: 60, marginTop: 3 } : { display: "none" }} onPress={() => setOpenprox(true)}>
                        <Image source={require("../assets/img/iconcalendar.png")} />
                    </TouchableOpacity>
                    <DatePicker modal title="Confirmar Data" open={openprox} date={date} locale="pt-BR" mode='date' onConfirm={(date) => {
                        setOpenprox(false);
                        setprox(date);

                    }}

                        onCancel={() => {
                            setOpenprox(false)
                        }}
                    />
                </View>
            </View>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", alignSelf: "center", top: 50, backgroundColor: "#49B976", borderColor: "#37BD6D", width: 155, height: 40 }} onPress={() => { ajudaprox = "ajuda", editarVacina(id, vacina, value, formatDate(date), value != "Dose Única" ? formatDate(prox) : null, props, imageUri) }}>
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
                            <TouchableOpacity style={{ backgroundColor: "#FF8383", width: 140, height: 45, justifyContent: "center" }} onPress={() => { excluirVacina(id, props, foto) }}>
                                <Text style={{ textAlign: "center", fontFamily: "AveriaLibre-Regular", color: "white" }}>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "#3F92C5", width: 140, height: 45, justifyContent: "center" }} onPress={() => setModalVisible(false)}>
                                <Text style={{ textAlign: "center", fontFamily: "AveriaLibre-Regular", color: "white" }}>Não</Text>
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
