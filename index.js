//audio
const somethingofascientistAudio = new Audio('audio/s1/somethingofascientistmyself.mp3');
const bonesawisreadyAudio = new Audio('audio/s1/bonesaw-is-ready.mp3');
const missedthepartwhereAudio = new Audio('audio/s1/missedthepartwherethatsmyproblem.mp3');
const youknowhowmuchisacrificedAudio = new Audio('audio/s1/you-know-how-much-i-sacrificed.mp3');
const itsajungleoutthereAudio = new Audio('audio/s1/beatanoldladywithastick.mp3');
const canthespidermancomeoutAudio = new Audio('audio/s1/can-spiderman-come-out.mp3');
const godspeedspidermanAudio = new Audio('audio/s1/godspeed-spiderman.mp3');
const goAudio = new Audio('audio/s2/go.mp3');
const pizzatimeAudio = new Audio('audio/s2/pizzatime.mp3');
const jjlaughAudio = new Audio('audio/s2/j-jonah-jameson-laugh.mp3');
const sorrydoesntpayAudio = new Audio('audio/s2/sorry-doesnt-pay-the-rent.mp3');
const tryingtodobetterAudio = new Audio('audio/s2/tryingtodobetter.mp3');
const ishinedmyshoespressedmypantsAudio = new Audio('audio/s2/ishinedmyshoespressedmypants.mp3');
const mybackAudio = new Audio('audio/s2/my-back.mp3');
const iwantspidermanAudio = new Audio('audio/s2/i-want-spiderman.mp3');
const screamAudio = new Audio('audio/s2/spidey-scream.mp3');
const handinaAudio = new Audio('audio/s3/spiderman-with-his-hand-in-the-cookie-jar.mp3');
const jigsuppalAudio = new Audio('audio/s3/jigsuppal.mp3');
const blacksuitthemeAudio = new Audio('audio/s3/blacksuittheme.mp3');
const givemerentAudio = new Audio('audio/s3/spiderman-give-me-rent.mp3');
const freenotrentfreeAudio = new Audio('audio/s3/free-not-rent-free-country.mp3');
const fixthisdamndoorAudio = new Audio('audio/s3/youll-get-this-rent-when-you-fix-this-damn-door.mp3');
const yougoodwomanAudio = new Audio('audio/s3/yougoodwomanigoodman.mp3');
const drivethatfunkysoulAudio = new Audio('audio/s3/drivethatfunkysoul.mp3');
const somedirtinyoureyeAudio = new Audio('audio/s3/imgonnaputsomedirtinyoureye.mp3');
const ohdoctorconnorsAudio = new Audio('audio/s3/ohdoctorconnors.mp3');
const nowdigonthissAudio = new Audio('audio/s3/now-dig-on-this.mp3');

function playAudio(i) { 
    i.play();
    console.log('hi')
}

function keyboard(e) {
    if (e.key === "b") {
        playAudio(mybackAudio)
    } else if (e.key === "c") {
        playAudio(canthespidermancomeoutAudio)
    } else if (e.key === "d") {
        playAudio(somedirtinyoureyeAudio)
    } else if (e.key === "f") {
        playAudio(freenotrentfreeAudio)
    } else if (e.key === "g") {
        playAudio(godspeedspidermanAudio)
    } else if (e.key === "h") {
        playAudio(handinaAudio)
    } else if (e.key === "i") {
        playAudio(iwantspidermanAudio)
    } else if (e.key === "j") {
        playAudio(jigsuppalAudio)
    } else if (e.key === "m") {
        playAudio(missedthepartwhereAudio)
    } else if (e.key === "n") {
        playAudio(nowdigonthissAudio)
    } else if (e.key === "o") {
        playAudio(ohdoctorconnorsAudio)
    } else if (e.key === "p") {
        playAudio(pizzatimeAudio)
    } else if (e.key === "r") {
        playAudio(givemerentAudio)
    } else if (e.key === "s") {
        playAudio(somethingofascientistAudio)
    } else if (e.key === "t") {
        playAudio(tryingtodobetterAudio)
    } else if (e.key === "y") {
        playAudio(youknowhowmuchisacrificedAudio)
    }
}