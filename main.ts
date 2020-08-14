let Temp = 0
basic.forever(function () {
    Temp = 9 / 5 * input.temperature() + 32
    basic.showNumber(Temp)
})
