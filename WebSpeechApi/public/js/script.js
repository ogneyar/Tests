const utterance = new SpeechSynthesisUtterance()

let voices = speechSynthesis.getVoices()
speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices()
    populateVoices(voices)
}

function populateVoices(voices) {
    voices.forEach((voice, index) => {
        select.options[index] = new Option(voice.name, index)
    })
    let defaultVoiceIndex = voices.findIndex(
        (voice) => voice.name === "Google русский" || voice.name === "русский Россия" || voice.lang === "ru-RU"
        // (voice) => voice.lang === "ru-RU"
    )
    if (defaultVoiceIndex === -1) {
        defaultVoiceIndex = 0
        // textarea.value = "Hello world!"
        textarea.placeholder = "Hello world!"
    }

    select.selectedIndex = defaultVoiceIndex
    initializeHandlers()
}
/*
SpeechSynthesisVoice {
    default: true
    lang: "ru-RU"
    localService: false
    name: "Google русский"
    voiceURI: "Google русский"
}
*/
function initializeHandlers() {
    utterance.onstart = () => console.log("Started")
    utterance.onend = () => console.log("Finished")
    utterance.onerror = (err) => console.error(err)
    utterance.onpause = () => console.log("Paused")
    utterance.onresume = () => console.log("Resumed")
    wrapper.onchange = ({ target }) => {
        if (target.type !== "range") return
        handleChange(target)
    };
    buttons.addEventListener("click", ({ target: { className } }) => {
        switch (className) {
        case "speak":
            if (!speechSynthesis.speaking) {
            convertTextToSpeech()
            }
            break;
        case "cancel":
            return speechSynthesis.cancel()
        case "pause":
            return speechSynthesis.pause()
        case "resume":
            return speechSynthesis.resume()
        default:
            return
        }
    })
}

function handleChange(el) {
    el.nextElementSibling.textContent = el.value
}

function convertTextToSpeech() {
    let trimmed = textarea.value.trim()
    // if (!trimmed) return
    if (!trimmed) trimmed = textarea.placeholder
    utterance.text = trimmed
    const voice = voices[select.value]
    utterance.voice = voice
    utterance.lang = voice.lang
    utterance.volume = volume.value
    utterance.rate = rate.value
    utterance.pitch = pitch.value
    // console.log("utterance",utterance)
    speechSynthesis.speak(utterance)
}

window.onkeydown = ({ key }) => {
    switch (key.toLowerCase()) {
        case "s":
        if (!speechSynthesis.speaking) {
            convertTextToSpeech()
        }
        break
        case "c":
        return speechSynthesis.cancel()
        case "p":
        return speechSynthesis.pause()
        case "r":
        return speechSynthesis.resume()
        default:
        return
    }
};
/*
SpeechSynthesisUtterance {
    lang: "ru-RU"
    onboundary: null
    onend: () => console.log('Finished')
    onerror: (err) => console.error(err)
    onmark: null
    onpause: () => console.log('Paused')
    onresume: () => console.log('Resumed')
    onstart: () => console.log('Started')
    pitch: 1
    rate: 1
    text: "Привет! Как дела?"
    voice: SpeechSynthesisVoice {
        voiceURI: "Google русский", 
        name: "Google русский", 
        lang: "ru-RU", 
        localService: false, 
        default: false
    }
    volume: 1
}
*/