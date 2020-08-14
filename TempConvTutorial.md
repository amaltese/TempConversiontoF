# Temperature Conversion Tutorial
The micro:bit is a great little tool. It includes a temperature sensor on the device. You won't see it as it is hidden within the chip on the backside (opposite from the buttons).

When you want to look at the temperature or use it in your code, you'll find that the values produced are in degrees Celsius.

The Celsius system is great, but it's less familiar to those in the U.S.

In this simple tutorial we will show you a way to make the conversion between degrees C and degrees F.

## Let's get started!

The first thing we will do is to create a new variable. One of the main blocks is called VARIABLES.

Select the VARIABLES block and then select MAKE A VARIABLE option.
[insert pictures]


```blocks
let TempF = 0
```

## Let's try out our full code

```blocks
let TempF = 0
basic.forever(function () {
    TempF = 9 / 5 * input.temperature() + 32
    basic.showNumber(TempF)
})
```
