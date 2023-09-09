music.setVolume(64)
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.soundLevel() > 129) {
        strip.showBarGraph(input.soundLevel(), 100)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        music.stopAllSounds()
    }
})
