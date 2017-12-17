const imprimirPontoCadaSegundo = setInterval(() => console.log('.'), 1000)

const resolvo2Segs = new Promise((resolve, reject) => {
    console.log(`inicio 2s`)
    setTimeout(() => {
        console.log(`resolvido 2s`)
        resolve(2)
    }, 2000)
});

const resolvo3Segs = new Promise((resolve, reject) => {
    console.log(`inicio 3s`)
    setTimeout(() => {
        console.log(`resolvido 3s`)
        resolve(3)
    }, 3000)
});

// Sem Clojure, o lugar onde fica o await não importa.
// o await não vai travar.
// Sempre resolve em 3 segundos
(async () => {
    const tempo1 = await resolvo3Segs
    const tempo2 = await resolvo2Segs

    console.log(tempo1 + tempo2)
    clearInterval(imprimirPontoCadaSegundo)
})()
