let a = [
    [1, 2, 3, 4],
    [5, 6, 7, [8, 9, 10]],
    [11, 12, 13, 14]
]
//console.log(a[1][3][2])

for (let i of a) {
    //console.log(i)
    for (let j of i) {
        if (typeof (j) == "number") {
            console.log(j)
        } else {
            for (let k of j) {
                console.log(k)
            }
        }

    }
}
