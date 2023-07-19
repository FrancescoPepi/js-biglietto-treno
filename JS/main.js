// DICHIARAZIONI VARIABILI
const CostoXkm = 0.21;
const Minorenne = 18;
const Over = 65;
let EtaUtente = 0;
let Discount = 0;

// Chiedere all'utente ChilometriDaPercorrere
const ChilometriDaPercorrere = parseInt(
  prompt(
    "Benvenuto/a\nPer acquistare il tuo biglietto inserisci quanti Kilometri devi percorrere"
  )
);
console.log(ChilometriDaPercorrere);

// Chiedere all'utente ChilometriDaPercorrere
if (isNaN(ChilometriDaPercorrere)) {
  alert(
    "QUALCOSA E' ANDATO STORTO\n\nForse non hai inserito dei numeri.\nProva a ricaricare la pagina e tentare di nuovo l'acquisto"
  );
} else {
  // Chiedere all'utente Eta
  let Eta = parseInt(
    prompt(
      `
        Kilometri da percorrere : ${ChilometriDaPercorrere}
    
        Scopri se sei idoneo per ricevere uno sconto sul tuo biglietto!
        INSERISCI LA TUA ETA'`
    )
  );
  console.log(Eta);
  if (isNaN(Eta)) {
    alert(
      "QUALCOSA E' ANDATO STORTO\n\nForse non hai inserito dei numeri.\nProva a ricaricare la pagina e tentare di nuovo l'acquisto"
    );
  } else {
    EtaUtente = Eta;
    console.log(EtaUtente);
  }
}

// Calcolare TicketItero -> ChilometriDaPercorrere * CostoXkm;
let TicketItero = ChilometriDaPercorrere * CostoXkm;
console.log(TicketItero + " €");

// Calcolo sconto
if (EtaUtente < Minorenne) {
  TicketItero = TicketItero - (TicketItero * 20) / 100;
  Discount = 20;
  console.log(TicketItero);
} else if (EtaUtente > Over) {
  TicketItero = TicketItero - (TicketItero * 40) / 100;
  Discount = 40;
  console.log(TicketItero);
}
//  Stampa su schermo il biglietto.
document.getElementById("km").innerHTML =
  "Kilometri da fare : " + ChilometriDaPercorrere + " Km";
document.getElementById("age").innerHTML = "Età : " + EtaUtente + " Anni";
document.getElementById("discount").innerHTML =
  "Sconto applicato : " + Discount + " %";
document.getElementById("price").innerHTML =
  "Prezzo del Ticket : " + TicketItero.toFixed(2) + " €";
