const email = ["email1@gmail.com","email2@gmail.com","email3@gmail.com","email4@gmail.com","email5@gmail.com","email6@gmail.com","email7@gmail.com","email8@gmail.com","email9@gmail.com","email10@gmail.com",]
console.log(email)
let richiesta_email= prompt("inserisci la tua email")
let flag = false ;

for(let i=0; i<email.length ;i++){
    if( email[i].toLowerCase() === richiesta_email.toLowerCase()){
        flag = true;
        
    }
    
}

if(flag === true){
    console.log('email trovata')
    
}
else{
console.log('email non trovata')

}