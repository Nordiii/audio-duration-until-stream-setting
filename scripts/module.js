Hooks.once('init', async function() {
    game.settings.register('audio-duration-until-stream-setting', 'durationToStream', {
        name: "Duration until stream (seconds)",
        hint: "The needed duration of an audio file before streaming instead of downloading (default 600 seconds -> 10 min)",
        config: true,
        scope: "world",
        type: Number,
        default: 600,
        onChange: (data) => {
            AudioContainer.MAX_BUFFER_DURATION = data
        }
    });


    AudioContainer.MAX_BUFFER_DURATION = game.settings.get("audio-duration-until-stream-setting", "durationToStream")
});
