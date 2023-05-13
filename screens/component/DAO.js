export let listaVacinas = [];

export const cadastrarVacina = (title, data, dose, prox, props) => {

    listaVacinas.push({
        id: listaVacinas.length == 0 ? 0 : listaVacinas[listaVacinas.length - 1].id + 1,
        title: title,
        data: data,
        prox: prox,
        dose: dose,
    });

    props.navigation.pop();
}

export const editarVacina = (id, title, dose, data, prox, props) => {
    const index = listaVacinas.findIndex((vacinas) => vacinas.id === id);
    listaVacinas[index].title = title
    listaVacinas[index].data = data
    listaVacinas[index].prox = prox
    listaVacinas[index].dose = dose
    props.navigation.pop();
};

export const excluirVacina = (id, props) => {
    const index = listaVacinas.findIndex((v) => v.id === id);

    listaVacinas.splice(index, 1);

    props.navigation.pop();
};