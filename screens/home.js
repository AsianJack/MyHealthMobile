import { View, Image, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useState } from "react";
const home = () => {
    const [valor, setValue] = useState('');
    const handleTextChange = (text) => {
        setValue(text);
    };

    const pesquisar = () => {
        var pesquisa = {}
        if (valor == "") {
            return (lista(items))
        }


        else {
            for (let i = 0; i < items.length; i++) {
                if (items[i].title.toLowerCase() == valor.toLowerCase()) {
                    pesquisa = [{
                        id: items[i].id,
                        title: items[i].title,
                        dose: items[i].dose,
                        data: items[i].data,
                        img: require("../assets/img/image-comprovante.png"),
                        datarenov: items[i].datarenov
                    }]
                }
            }

        }
        if (Object.keys(pesquisa).length == 0) {
            return lista(items)

        } else {
            return lista(pesquisa)

        }

    }
    const items = [
        { id: "1", title: 'BCG', dose: "Dose Única", data: "11/06/2022", img: require("../assets/img/image-comprovante.png"), datarenov: "" },
        { id: "2", title: 'Influenza', dose: "2ª Dose", data: "01/08/2023", img: require("../assets/img/image-comprovante.png"), datarenov: "11/10/2022" },
        { id: "3", title: 'Hepatite B', dose: "3ª Dose", data: "05/12/2024", img: require("../assets/img/image-comprovante.png"), datarenov: "11/10/2022" },
        { id: "4", title: 'HPV', dose: "1ª Dose", data: "22/09/2022", img: require("../assets/img/image-comprovante.png"), datarenov: "11/10/2022" },
        { id: "5", title: 'Febre Amarela', dose: "Reforço", data: "02/02/2023", img: require("../assets/img/image-comprovante.png"), datarenov: "11/10/2022" },
        { id: "6", title: 'Tétano', dose: "2ª Dose", data: "21/05/2023", img: require("../assets/img/image-comprovante.png"), datarenov: "11/10/2022" },
        { id: "7", title: 'Poliomielite', dose: "1ª Dose", data: "03/11/2023", img: require("../assets/img/image-comprovante.png"), datarenov: "11/10/2022" },
        { id: "8", title: 'Difteria', dose: "2ª Dose", data: "12/07/2023", img: require("../assets/img/image-comprovante.png"), datarenov: "11/10/2022" },
        { id: "9", title: 'Covid-19', dose: "1ª Dose", data: "15/04/2022", img: require("../assets/img/image-comprovante.png"), datarenov: "11/10/2022" },
        { id: "10", title: 'Gripe', dose: "Dose Única", data: "28/07/2023", img: require("../assets/img/image-comprovante.png"), datarenov: "11/10/2022" }
    ];

    const lista = (dados) => {

        return (
            <ScrollView>
                <FlatList
                    data={dados}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) => (
                        <SafeAreaView>
                            <TouchableOpacity>
                                <View style={{ ...style.container.box }}>
                                    <Text style={{ color: "#3F92C5", fontSize: 24 }}>{item.title}</Text>
                                    <Text style={{ backgroundColor: "#3F92C5", color: "white", fontSize: 12, width: 70, textAlign: "center", marginBottom: 5 }}>{item.dose}</Text>
                                    <Text style={{ color: "#8B8B8B", fontSize: 10, marginBottom: 5 }}>{item.data}</Text>
                                    <Image source={item.img} style={{ width: 160, height: 80 }} />
                                    {item.datarenov != "" ? <Text style={{ color: "#FD7979", fontSize: 11, alignSelf: "flex-end", marginRight: 10 }}>Próxima Dose em: {item.datarenov}</Text> : <Text style={{ color: "#FD7979", fontSize: 11, alignSelf: "flex-end", marginRight: 10 }}>Não há próxima dose</Text>}

                                </View>
                            </TouchableOpacity>
                        </SafeAreaView>


                    )}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                />
            </ScrollView>
        )
    }


    return (
        <View style={style.container}>
            <View style={{ ...style.container.header, alignItems: "center", flexDirection: "row" }}>
                <Image source={require("../assets/img/Vector.png")} style={{ marginLeft: 13 }} />
                <Text style={{ color: "#419ED7", fontSize: 34, marginLeft: 15 }}>Minhas vacinas</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", top: 30, height: 30, zIndex: 999 }}>
                <TextInput style={{ ...style.container.inputpequisar }} placeholder="PESQUISAR VACINA..." value={valor} onChangeText={handleTextChange}></TextInput>
                <Image source={require("../assets/img/iconpesquisa.png")} style={{ position: "absolute", left: 15, marginTop: 4, height: 20, width: 20 }} />
            </View>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, top: 70, padding: 5, height: 415 }}>
                    {valor != "" ? pesquisar() : lista(items)}
                </View>
            </SafeAreaView>
            <View style={{ top: 130, alignItems: "center" }}>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: "#49B976", borderColor: "#37BD6D", width: 155, height: 40 }}>
                    <Text style={{ fontSize: 18, color: "white" }}>Nova vacina</Text>
                </TouchableOpacity>
            </View>

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
        box: {
            backgroundColor: "white",
            width: 186,
            height: 180,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
        },
        inputpequisar: {
            backgroundColor: "white",
            height: 30,
            fontSize: 18,
            padding: 3,
            width: "95%",
            color: "#3F92C5",
            paddingLeft: 32,
            justifyContent: "center",
        }
    }
});
export default home;