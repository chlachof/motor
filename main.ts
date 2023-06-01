input.onButtonPressed(Button.A, function () {
    speed = speed + 50
    if (speed > 255) {
        speed = 255
    }
})
input.onButtonPressed(Button.B, function () {
    speed = speed - 50
    if (speed < 0) {
        speed = 0
    }
})
let ms = 0
let dir = 0
let motor = 0
let speed = 0
speed = 100
basic.forever(function () {
    motor = 0
    for (let index = 0; index < 4; index++) {
        dir = 1
        ms = speed * dir
        led.plotBrightness(motor, dir + 1, speed)
        basic.pause(500)
        ms = 0
        led.unplot(motor, dir + 1)
        basic.pause(100)
        dir = -1
        ms = speed * dir
        led.plotBrightness(motor, dir + 1, speed)
        basic.pause(500)
        ms = 0
        led.unplot(motor, dir + 1)
        basic.pause(100)
        motor = motor + 1
    }
})
