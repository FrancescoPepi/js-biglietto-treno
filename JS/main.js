// DICHIARAZIONI VARIABILI
const CostoXkm = 0.21;
const Minorenne = 18;
const Over = 65;

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
  const Eta = parseInt(
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
  }
}

// Calcolare TicketItero -> ChilometriDaPercorrere * CostoXkm;
let TicketItero = ChilometriDaPercorrere * CostoXkm;
console.log(TicketItero + " €");
