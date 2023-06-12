import { View, Image, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { db } from '../src/config'
import { onSnapshot, query, collection, where } from 'firebase/firestore'
import { useSelector, useDispatch } from "react-redux";

const lista = (dados) => {
    const dadosFiltrados = dados.filter(item => item.dose !== "Dose Única");

    return (
        <FlatList
            data={dadosFiltrados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <SafeAreaView>
                    <TouchableOpacity>
                        <View style={{ backgroundColor: "white", width: 380, borderRadius: 5, paddingLeft: 10, paddingVertical: 5 }}>
                            <Text style={{ color: "#3F92C5", fontSize: 28 }}>{item.title}</Text>
                            <Text style={{ color: "#8B8B8B", fontSize: 18 }}>{item.prox}</Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
            )}
            extraData={focadin}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
    );
};

const Proximavacina = (props) => {
    focadin = useIsFocused();
    const [listaVacinas, setListaVacinas] = useState([])
    const uidd = useSelector((state) => state.auth.uid)


    useEffect(() => {
        const q = query(collection(db, "vacinas"), where("uidd", "==", uidd))

        onSnapshot(q, (snapshot) => {
            let vacinas = []

            snapshot.forEach((doc) => {
                vacinas.push({
                    id: doc.id,
                    title: doc.data().title,
                    dose: doc.data().dose,
                    data: doc.data().data,
                    prox: doc.data().prox,
                    imagem: doc.data().imagem,
                    uidd: doc.data().uidd
                })
                console.log("Documento: " + JSON.stringify(doc.data()))
            })

            setListaVacinas(vacinas)
        })
    }, [])
    return (
        <View style={style.container}>
            <View style={{ ...style.container.header, alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <Image source={require("../assets/img/hamburgerIcon.png")} style={{ marginLeft: 13, width: 50, height: 30 }} />
                </TouchableOpacity>
                <Text style={{ color: "#419ED7", fontSize: 34, marginLeft: 15 }}>Próximas vacinas</Text>
            </View>

            <View style={{ justifyContent: "space-between", alignItems: "center", marginTop: 30, height: 515 }}>
                {lista(listaVacinas)}
            </View>

            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", alignSelf: "center", top: 30, backgroundColor: "#49B976", borderColor: "#37BD6D", width: 155, height: 40 }} onPress={() => props.navigation.push('Novavacina', { data: items[items.length - 1].id })}>
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