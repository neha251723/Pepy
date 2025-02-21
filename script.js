let speech= new SpeechSynthesisUtterance();
let voi = [];
let voiselect= document.querySelector("select");

window.speechSynthesis.onvoiceschanged= () => {
    voi = window.speechSynthesis.getVoices();
    speech.voice= voi[0];

    voi.forEach((voice, i) => 
        (voiselect.options[i]= new Option(voice.name, i))
    );
};

voiselect.addEventListener("change", () => {
    speech.voice = voi[voiselect.value];
})

document.querySelector("button").addEventListener("click", () => {
    speech.text= document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});