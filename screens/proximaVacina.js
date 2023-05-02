import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

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

const proximavacina = () => {
    return (
        <View style={style.container}>
            <View style={{ ...style.container.header, alignItems: "center", flexDirection: "row" }}>
                <Image source={require("../assets/img/Vector.png")} style={{ marginLeft: 13 }} />
                <Text style={{ color: "#419ED7", fontSize: 34, marginLeft: 15 }}>Próximas vacinas</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <View style={{backgroundColor:"white", width:"90%", borderRadius:5}}>  
                    <Text>BCG</Text>
                </View>
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
    }
});

export default proximavacina;