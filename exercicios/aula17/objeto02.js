// Objeto

let pessoa = {
    nome: "jonatas",
    idade: 35,
    feliz: true,
    pets: ["cachorro", "gato"],
    carros: {
        camaro: {
            placa: "123456",
            cor: "verde"
        },
        uno: {
            placa: "9876543",
            cor: "branco"
        }
    },
    andar: function(km) {
        console.log(`${pessoa.nome} andou ${km}Km`)
    }
}

pessoa.andar(20)
console.log(pessoa.carros.uno.placa)