const imprimirPontoCadaSegundo = setInterval(() => console.log('.'), 1000)

const resolvoSeg = tempo => new Promise((resolve, reject) => {
    console.log(`inicio ${tempo}s`)
    setTimeout(() => {
        console.log(`resolvido ${tempo}s`)
        resolve(tempo)
    }, tempo * 1000)
});

// Com Clojure, o lugar onde fica o await importa.
// o await vai travar.
// Na clojure, resolve em 5segs.
// No response, resolve em 3segs.
(async () => {
    const tempo1 = await resolvoSeg(3)
    const tempo2 = await resolvoSeg(2)

    console.log(tempo1 + tempo2)
    clearInterval(imprimirPontoCadaSegundo)
})()
