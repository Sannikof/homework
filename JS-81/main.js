const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 28, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

for(let i = 0; i < numbers.length; i++) {
    if(i % 2 === 0) {
        console.log(numbers[i] +1)
    }
}

const colorsRainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Light', 'Blue', ' Indigo', 'Purple']

for(let i = colorsRainbow.length - 1; i >= 0; i--) {
    console.log(colorsRainbow[i])
}