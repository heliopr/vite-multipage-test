import DoSomething from "../global.ts"

const res = document.getElementById("res")

let s = ""
let c = ""
for (let i = 0; i < 50; i++) {
    c += i + " "
    s += c + "<br>"
}
res!.innerHTML = s

console.log(DoSomething())