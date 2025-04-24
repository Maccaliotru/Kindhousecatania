
const frecciasinistra = document.querySelector('.leftarrow');
const frecciadestra = document.querySelector('.rightarrow');

frecciasinistra.addEventListener('click',scorrigalleriasinistra);
frecciadestra.addEventListener('click',scorrigalleriadestra);

const containerGalleria = document.querySelector('.containergalleria');
const paragrafodescrizione = document.querySelector('.descrizione');

const INFOGALLERIA = [
    {path:'bagno1.jpg',descrizione:'Il bagno è curato nei minimi dettagli. Luminoso e funzionale, è dotato di doccia, lavabo, WC e bidet. A disposizione degli ospiti ci sono asciugamani, phon e prodotti base per l’igiene. L’ambiente è pensato per offrire comfort e praticità, mantenendo un tocco di autenticità e calore tipico delle case dell’isola.'},
    {path:'bagno2.jpg',descrizione:'Il bagno è curato nei minimi dettagli. Luminoso e funzionale, è dotato di doccia, lavabo, WC e bidet. A disposizione degli ospiti ci sono asciugamani, phon e prodotti base per l’igiene. L’ambiente è pensato per offrire comfort e praticità, mantenendo un tocco di autenticità e calore tipico delle case dell’isola.'},
    {path:'bagno3.jpg',descrizione:'Il bagno è curato nei minimi dettagli. Luminoso e funzionale, è dotato di doccia, lavabo, WC e bidet. A disposizione degli ospiti ci sono asciugamani, phon e prodotti base per l’igiene. L’ambiente è pensato per offrire comfort e praticità, mantenendo un tocco di autenticità e calore tipico delle case dell’isola.'},
    {path:'cameradaletto1.jpg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'cameradaletto2.jpg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'cameradaletto3.jpg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'cameradaletto4.jpg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'soggiorno1.jpg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana. Le pareti dai toni caldi creano un’atmosfera accogliente e familiare. La cucina è completamente attrezzata, ideale per preparare piatti tipici con ingredienti locali. Il tavolo da pranzo è perfetto per cene in compagnia, mentre la zona soggiorno offre un comodo divano letto dove rilassarsi, leggere o guardare la TV dopo una giornata di esplorazioni.'},
    {path:'soggiorno2.jpg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana. Le pareti dai toni caldi creano un’atmosfera accogliente e familiare. La cucina è completamente attrezzata, ideale per preparare piatti tipici con ingredienti locali. Il tavolo da pranzo è perfetto per cene in compagnia, mentre la zona soggiorno offre un comodo divano letto dove rilassarsi, leggere o guardare la TV dopo una giornata di esplorazioni.'},
    {path:'soggiorno3.jpg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana. Le pareti dai toni caldi creano un’atmosfera accogliente e familiare. La cucina è completamente attrezzata, ideale per preparare piatti tipici con ingredienti locali. Il tavolo da pranzo è perfetto per cene in compagnia, mentre la zona soggiorno offre un comodo divano letto dove rilassarsi, leggere o guardare la TV dopo una giornata di esplorazioni.'}
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