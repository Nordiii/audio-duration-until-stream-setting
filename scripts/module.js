Hooks.once('init', async function() {
    game.settings.register('audio-duration-until-stream-setting', 'durationToStream', {
        name: "Time to Stream (seconds)",
        hint: "The length of a song needed before streaming (default 600 seconds -> 10 min)",
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
