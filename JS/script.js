
const es1 = 'mail';
const es2 = 'dadi';
const choice = prompt(' Ciao che esercizio vuoi visualizzare? digita: mail oppure: dadi');

if (choice===es1) {

  
  const userList = ['user1@user.com','user2@user.com','user3@user.com'];
  const userProof = prompt('Inserisci la tua mail!');
  let tried = false;
  
  for (let i= 0; i < userList.length; i++) {

    
   
    

    if(userProof===userList[i]){

      
      tried = true;
    
      
    }

    
    
  }

  if (tried==true) {

    alert('Benvenuto')
    
    
  } else{

    alert('Accesso negato')

  }

  
} else if(choice===es2) {


  const utente = Math.round(Math.random()*5)+1;
  
  alert('Giocherai a dadi contro il pc sei pronto?');

  alert(`hai fatto ` + utente + ' ora tocca al pc!' );

  const pc =  Math.round(Math.random()*5)+1;
 
  if (pc>utente) {

    alert('il pc ha fatto ' + pc + ' ritenta sarai più fortunato' );
    
  } else if(pc<utente){

    alert('il pc ha fatto ' + pc + ' complimenti sei tu il vincitore!');
    
    
  } else{

    alert('il pc ha fatto ' + pc +  ' il risultato è pari! ritenta sarai più fortunato');



  }
 
  
} else{

  alert('nessun esercizio è stato selezionato!')


}








