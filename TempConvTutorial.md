# Temperature Conversion Tutorial
The micro:bit is a great little tool. It includes a temperature sensor on the device. You won't see it as it is hidden within the chip on the backside (opposite from the buttons).

When you want to look at the temperature or use it in your code, you'll find that the values produced are in degrees Celsius.

The Celsius system is great, but it's less familiar to those in the U.S.

In this simple tutorial we will show you a way to make the conversion between degrees C and degrees F.

## Let's get started!

The first thing we will do is to create a new variable. One of the main blocks is called VARIABLES.

Select the VARIABLES block and then select MAKE A VARIABLE option.
[insert pictures]

When the option comes up to name your variable, use a name that will be meaningful to you. In this case we use "TempF" and select OK.
[insert pictures]

Once you create the variable you will then see that the VARIABLES block is now populated with more options. 

For now, we're interested in the SET [VARIABLE] TO [VALUE]. For our purpposes we want it to say SET TempF to 0, which we can drop into the ON START or FOREVER blocks, as below. 

```blocks
let TempF = 0
```
## Let's add in some basic math

The basic conversion from degrees C to degrees F follows:
Temperature (F) = 9/5(Temperature C) + 32

If we go into the MATH block you'll see there are a number blocks that have two values and an operator (+, -, x, /).

You can pick any of those blocks and drop it into the workspace. Click inside the first space in the block and type 9. Click inside the second space and type 5. Finally, change the operator between them by using the dropdown menu to the division symbol.
[insert pictures]

Now repeat that procedure and grab another similar block from the MATH block. This time we're going to take the block we just created and drag that to fit that entire block within the first space of the new block. 
Then go to the VARIABLE block and drag out the TempF block and drop it into the second space. Finally, change the operator to be an X for multiplying. It should look like below.  
[insert pictures]

Now we need to repeat this same procedure a third (and final!) time.  

## Let's try out our full code

```blocks
let TempF = 0
basic.forever(function () {
    TempF = 9 / 5 * input.temperature() + 32
    basic.showNumber(TempF)
})
```
