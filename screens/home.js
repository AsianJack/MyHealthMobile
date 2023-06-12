import { View, Image, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { db } from '../src/config'
import { onSnapshot, query, collection, where } from 'firebase/firestore'
import { useSelector, useDispatch } from "react-redux";
import { reducerSetvac } from "../src/redux/idvacSlice";
const Home = (props) => {
    focadin = useIsFocused();
    const [valor, setValue] = useState('');
    const handleTextChange = (text) => {
        setValue(text);
    };
    
    const [listaVacinas, setListaVacinas] = useState([])
    const uidd = useSelector((state)=>state.auth.uid)


    useEffect(() => {
        const q = query(collection(db, "vacinas"), where ("uidd", "==", uidd))

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

    const pesquisar = () => {
        var pesquisa = {}
        if (valor == "") {
            return (lista(listaVacinas))
        }


        else {
            for (let i = 0; i < listaVacinas.length; i++) {
                if (listaVacinas[i].title.toLowerCase() == valor.toLowerCase()) {
                    pesquisa = [{
                        id: listaVacinas[i].id,
                        title: listaVacinas[i].title,
                        dose: listaVacinas[i].dose,
                        data: listaVacinas[i].data,
                        imagem: listaVacinas[i].imagem,
                        prox: listaVacinas[i].prox
                    }]
                }
            }

        }
        if (Object.keys(pesquisa).length == 0) {
            return lista(listaVacinas)

        } else {
            return lista(pesquisa)

        }

    }
    const dispach = useDispatch()
    const lista = (dados) => {
        
        return (

            <FlatList
                data={dados}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => (
                    <SafeAreaView>
                        <TouchableOpacity onPress={() => props.navigation.push('Editarvacina', { data: item }, dispach(reducerSetvac({ idvac:item.id })))}>
                            <View style={{ ...style.container.box }}>
                                <Text style={{ color: "#3F92C5", fontSize: 24, fontFamily: "AveriaLibre-Regular" }}>{item.title}</Text>
                                <Text style={{ backgroundColor: "#3F92C5", color: "white", fontFamily: "AveriaLibre-Regular", fontSize: 12, width: 70, textAlign: "center", marginBottom: 5 }}>{item.dose}</Text>
                                <Text style={{ color: "#8B8B8B", fontSize: 10, marginBottom: 5, fontFamily: "AveriaLibre-Regular" }}>{item.data}</Text>
                                <Image source={{ uri: item.imagem }} style={{ width: 160, height: 80 }} />
                                {item.prox != null ? <Text style={{ color: "#FD7979", fontSize: 11, alignSelf: "flex-end", marginRight: 10 }}>Próxima Dose em: {item.prox}</Text> : <Text style={{ color: "#FD7979", fontSize: 11, alignSelf: "flex-end", marginRight: 10 }}>Não há próxima dose</Text>}
                            </View>
                        </TouchableOpacity>
                    </SafeAreaView>
                )}
                extraData={focadin}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />

        )
    }


    return (
        <View style={style.container}>
            <View style={{ ...style.container.header, alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <Image source={require("../assets/img/hamburgerIcon.png")} style={{ marginLeft: 13, width: 50, height: 30 }} />
                </TouchableOpacity>

                <Text style={{ color: "#419ED7", fontSize: 34, marginLeft: 15, fontFamily: "AveriaLibre-Regular" }}>Minhas vacinas</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", top: 30, height: 30, zIndex: 999 }}>
                <TextInput style={{ ...style.container.inputpequisar, fontFamily: "AveriaLibre-Regular" }} placeholder="PESQUISAR VACINA..." value={valor} onChangeText={handleTextChange}></TextInput>
                <Image source={require("../assets/img/iconpesquisa.png")} style={{ position: "absolute", left: 15, marginTop: 4, height: 20, width: 20 }} />
            </View>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, top: 70, padding: 5, height: 415 }}>
                    {valor != "" ? pesquisar() : lista(listaVacinas)}
                </View>
            </SafeAreaView>
            <View style={{ top: 130, alignItems: "center" }}>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: "#49B976", borderColor: "#37BD6D", width: 155, height: 40 }} onPress={() => props.navigation.push('Novavacina')}>
                    <Text style={{ fontSize: 18, color: "white", fontFamily: "AveriaLibre-Regular" }}>Nova vacina</Text>
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
export default Home;