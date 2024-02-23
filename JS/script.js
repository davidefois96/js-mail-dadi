

const userList = ['user1@user.com','user2@user.com','user3@user.com'];
const user1 = userList[0];
const user2 = userList[1];
const user3 = userList[2];

const userProof = prompt('Inserisci la tua mail!');


if(userProof===userList[0] || userProof===userList[1] || userProof===userList[2]){

  alert('BENVENUTO!');

  
}else{

  alert('ACCESSO NEGATO!');



}






