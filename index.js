//---------
//fenetre contact
//---------
const contact = document.querySelector(".contact");
const btnpopup = document.querySelector(".btncontact-popup");
const iconClose = document.querySelector(".icon-close");

btnpopup.addEventListener("click", () => {
  contact.classList.add("active-popup");
});
iconClose.addEventListener("click", () => {
  contact.classList.remove("active-popup");
});

//-----------
//apparition texte
//-----------
const texte = document.getElementById("texte");
let array = [
  "Je suis maintenant développeur web autodidacte après 5 années d’expérience dans le domaine de la pharmaceutique où j'ai pu développer mon sens de l'organisation et ma rigueur, mais aussi mon esprit d'équipe et toutes les compétences lié telle que la communication ou l'entre aide .De nature curieux et patient, je pourrai répondre à vos besoins par ma créativité mon autonomie et mon professionalisme .Ce changement de profession est due au fait que je pense avoir fait le tour de ce que je voulais voir en pharmaceutique et que le développement web m'intéresse depuis un certain moment plus précisément l’aspect technique et fonctionnel du back end.J'entretiens ma créativité et mon imagination avec la lecture de roman fantastique,SF et des manga. De plus, je suis passionné de randonnée et de nature ce qui m'a donné un goût prononcé pour la liberté.J'ai comme projet personnel de faire le GR 30 et le 5.",
];
let paragrapheindex = 0;
let letterindex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  texte.appendChild(letter);
  letter.textContent = array[paragrapheindex][letterindex];
};
createLetter();
setInterval(() => {
  letterindex++;
  createLetter();
}, 40);
