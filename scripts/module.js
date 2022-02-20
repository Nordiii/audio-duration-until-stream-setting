Hooks.once('init', async function() {
    game.settings.register('SoundTimeToStreamSettings', 'durationToStream', {
        name: "Time to Stream",
        hint: "The length of a song needed before streaming (default 600 seconds/10 min)",
        config: true,
        scope: "world",
        type: Number,
        default: 600,
        onChange: (data) => {
            AudioContainer.MAX_BUFFER_DURATION = data
        }
    });


    AudioContainer.MAX_BUFFER_DURATION = game.settings.get("sttss", "durationToStream")
});
