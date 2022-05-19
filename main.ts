input.onButtonPressed(Button.A, function () {
    while (true) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showNumber(1)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.showNumber(2)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.showNumber(0)
        basic.pause(3000)
    }
})
