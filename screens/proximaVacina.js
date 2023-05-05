import { View, Image, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList } from "react-native";

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
        <FlatList
            data={dados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <SafeAreaView>
                    {item.dose != "Dose Única" ?
                        <TouchableOpacity>
                            <View style={{ backgroundColor: "white", width: 380, borderRadius: 5, paddingLeft: 10, paddingVertical: 5 }}>
                                <Text style={{ color: "#3F92C5", fontSize: 28 }}>{item.title}</Text>
                                <Text style={{ color: "#8B8B8B", fontSize: 18 }}>{item.datarenov}</Text>
                            </View>
                        </TouchableOpacity> : ""}
                </SafeAreaView>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }}

            />}
        />
    )
}

const Proximavacina = (props) => {
    return (
        <View style={style.container}>
            <View style={{ ...style.container.header, alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <Image source={require("../assets/img/hamburgerIcon.png")} style={{ marginLeft: 13, width: 50, height: 30 }} />
                </TouchableOpacity> 
                <Text style={{ color: "#419ED7", fontSize: 34, marginLeft: 15 }}>Próximas vacinas</Text>
            </View>

            <View style={{ justifyContent: "space-between", alignItems: "center", marginTop: 30, height: 515 }}>
                {lista(items)}
            </View>

            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", alignSelf: "center", top: 30, backgroundColor: "#49B976", borderColor: "#37BD6D", width: 155, height: 40 }} onPress={() => props.navigation.push('Novavacina')}>
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

export default Proximavacina;