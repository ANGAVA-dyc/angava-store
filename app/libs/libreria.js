export const pedidoDeDatos = (url) => {
    return fetch (url).then((res) => res.json());
}

export const pedidoDinamico = (url) => {
    return fetch (url, { cache: "no-store"}).then((res) => res.json());
}