const f = new Function("v1", "v2", "v3", "return v1 + v2 + v3") // Função construtor anonima

console.log(f(10, 5, 15))