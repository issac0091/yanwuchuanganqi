let gas = 0
OLED.init(128, 64)
pins.digitalWritePin(DigitalPin.P5, 1)
basic.forever(function () {
    basic.showNumber(gas)
})
basic.forever(function () {
    gas = pins.digitalReadPin(DigitalPin.P1)
    if (gas == 0) {
        pins.digitalWritePin(DigitalPin.P5, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 1)
    }
})
basic.forever(function () {
    if (gas == 0) {
        OLED.writeString("Danger Gas!")
        basic.pause(100)
        OLED.clear()
    } else {
        OLED.writeString("Safe~")
        basic.pause(100)
        OLED.clear()
    }
})
