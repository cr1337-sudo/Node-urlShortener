const frases = ["A", "B", "C", "D", "E", "F"]
let time = 3000

for (let i = 0; i <= (frases.length-1); i++) {
   setTimeout(() => console.log(frases[i]), time)
   time += 3000
}