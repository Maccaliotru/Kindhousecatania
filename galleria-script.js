
const frecciasinistra = document.querySelector('.leftarrow');
const frecciadestra = document.querySelector('.rightarrow');

frecciasinistra.addEventListener('click',scorrigalleriasinistra);
frecciadestra.addEventListener('click',scorrigalleriadestra);

const containerGalleria = document.querySelector('.containergalleria');
const paragrafodescrizione = document.querySelector('.descrizione');

const INFOGALLERIA = [
    {path:'soggiorno1_nuovo.jpg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana.'},
    {path:'soggiorno2_nuovo.jpg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana.'},
    {path:'soggiorno3_nuovo.jpg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana.'},
    {path:'cameradaletto1_nuovo.jpg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'cameradaletto2_nuovo.jpg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'cameradaletto3_nuovo.jpg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'bagno1_nuovo.jpg',descrizione:'Il bagno è curato nei minimi dettagli. Luminoso e funzionale, è dotato di doccia, lavabo, WC e bidet. A disposizione degli ospiti ci sono asciugamani, phon e prodotti base per l’igiene.'},
    {path:'bagno2_nuovo.jpg',descrizione:'Il bagno è curato nei minimi dettagli. Luminoso e funzionale, è dotato di doccia, lavabo, WC e bidet. A disposizione degli ospiti ci sono asciugamani, phon e prodotti base per l’igiene.'},
    {path:'bagno3_nuovo.jpg',descrizione:'Il bagno è curato nei minimi dettagli. Luminoso e funzionale, è dotato di doccia, lavabo, WC e bidet. A disposizione degli ospiti ci sono asciugamani, phon e prodotti base per l’igiene.'}

    
];

let indiceCorrente = 0;

function aggiornaGalleria() {
    const elemento = INFOGALLERIA[indiceCorrente];
    containerGalleria.style.backgroundImage = `url(${elemento.path})`;
    const descrizioneElement = document.querySelector('.descrizione')
    if (descrizioneElement) {
        descrizioneElement.textContent = elemento.descrizione;
    }
}

function scorrigalleriasinistra() {
    indiceCorrente = (indiceCorrente - 1 + INFOGALLERIA.length) % INFOGALLERIA.length;
    aggiornaGalleria();
}

function scorrigalleriadestra() {
    indiceCorrente = (indiceCorrente + 1) % INFOGALLERIA.length;
    aggiornaGalleria();
}