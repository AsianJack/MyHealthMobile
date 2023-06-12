import { deleteObject, getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { storage, db } from "../../src/config";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
export let listaVacinas = [];

export const cadastrarVacina = async (title, data, dose, prox, props, image, uidd) => {
    const uid = () => {
        const id = Date.now().toString(16) + Math.random().toString(16);
        return id.replace('.', '').replace('0', '');
    };

    const imagem = "image/" + uid(); // Invoca a função uid() para obter o valor retornado
    const imageref = ref(storage, imagem)
    const colecao = collection(db, "vacinas")
    const file = await fetch(image)
    const blob = await file.blob()
    uploadBytes(imageref, blob, { contentType: 'image/jpeg' })
        .then((result) => {
            getDownloadURL(imageref)
                .then((url) => {
                    const vacDoc = {
                        title: title,
                        data: data,
                        imagem: url,
                        prox: prox,
                        dose: dose,
                        uidd:uidd
                    }
                    addDoc(colecao, vacDoc)
                        .then((refDoc) => {
                            props.navigation.pop();
                        })
                        .catch((error) => {
                            console.log("Erro ao cadastrar vacina" + JSON.stringify(error))
                        })
                })
                .catch((error) => {
                    console.log("Erro ao fazer dowload " + JSON.stringify(error))
                })
        })
        .catch((error) => {
            console.log("Erro ao fazer bytes " + JSON.stringify(error))
        })

}

export const editarVacina = async (id, title, dose, data, prox, props, image) => {
    const uid = () => {
        const id = Date.now().toString(16) + Math.random().toString(16);
        return id.replace('.', '').replace('0', '');
    };
    const imagem = "image/" + uid();
    const refDoc = doc(db, "vacinas", id)
    const imageref = ref(storage, imagem)
    const file = await fetch(image)
    const blob = await file.blob()
    uploadBytes(imageref, blob, { contentType: 'image/jpeg' })
        .then((result) => {
            getDownloadURL(imageref)
                .then((url) => {
                    const vacDoc = {
                        title: title,
                        data: data,
                        imagem: url,
                        prox: prox,
                        dose: dose,
                    }
                    updateDoc(refDoc, vacDoc)
                        .then(() => {
                            props.navigation.pop();
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                })
                .catch((error) => {
                    console.log(error)
                })
        })
        .catch((error) => {
            console.log(error)
        })
};

export const excluirVacina = async (id, props, url) => {
    const refDoc = doc(db, "vacinas", id)
            deleteDoc(refDoc)
                .then(() => {
                    props.navigation.pop();
                })
                .catch((error) => {
                    console.log("erro ao excluir doc: " + error)
                })
};
