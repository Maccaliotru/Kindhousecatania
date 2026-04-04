
const frecciasinistra = document.querySelector('.leftarrow');
const frecciadestra = document.querySelector('.rightarrow');

frecciasinistra.addEventListener('click',scorrigalleriasinistra);
frecciadestra.addEventListener('click',scorrigalleriadestra);

const containerGalleria = document.querySelector('.containergalleria');
const paragrafodescrizione = document.querySelector('.descrizione');

const INFOGALLERIA = [
    {path:'salone.jpeg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana.'},
    {path:'salone2.jpeg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana.'},
    {path:'divano.jpeg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana.'},
    {path:'bar.jpeg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana.'},
    {path:'cucina.jpeg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana.'},
    {path:'cucina2.jpeg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana.'},
    {path:'cucina3.jpeg',descrizione:'Il soggiorno e la cucina si trovano in un ambiente unico, spazioso e luminoso, arredato con richiami alla tradizione siciliana.'},
    {path:'cameradaletto.jpeg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'cameradaletto2.jpeg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'cameradaletto3.jpeg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'cameradaletto4.jpeg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'cameradaletto5.jpeg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'cameradaletto6.jpeg',descrizione:'La camera da letto è stata ispirata dalla tradizione siciliana, è perfetta per rilassarsi dopo una giornata di mare o di escursioni. Arredata con gusto, unisce elementi tipici come i tessuti naturali e piccoli dettagli locali.'},
    {path:'bagno.jpeg',descrizione:'Il bagno è curato nei minimi dettagli. Luminoso e funzionale, è dotato di doccia, lavabo, WC e bidet. A disposizione degli ospiti ci sono asciugamani, phon e prodotti base per l’igiene.'},
    {path:'bagno2.jpeg',descrizione:'Il bagno è curato nei minimi dettagli. Luminoso e funzionale, è dotato di doccia, lavabo, WC e bidet. A disposizione degli ospiti ci sono asciugamani, phon e prodotti base per l’igiene.'},
    {path:'cancellocasa.jpeg',descrizione:'Ingresso con porta blindata per garantire la sicurezza tua e dei tuoi cari.'},
    {path:'cancelloingresso.jpeg',descrizione:'Ingresso con porta blindata per garantire la sicurezza tua e dei tuoi cari.'},
    
    
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
