import header from "/components/header.html?raw"
import footer from "/components/footer.html?raw"

console.log("global")

document.querySelector("header")!.innerHTML = header
document.querySelector("footer")!.innerHTML = footer

export default function DoSomething() {
    return 10
}