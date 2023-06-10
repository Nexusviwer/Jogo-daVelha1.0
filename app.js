var objclickadoplayer1 = []
var objclickadoplayer2 = []
var player = ""






function passaid(id){
 var home = document.getElementById(id)
 home.innerHTML = player
  verificaplayer(id)
    verificavitoria()
   
}
function verificaplayer(id){
   
    if(player == "X"){
        objclickadoplayer1.push(id)
    }else if(player == "O"){
        objclickadoplayer2.push(id)
    }
    if(player == "X"){
        player = "O"
    }else{
        player = "X"
    }
    
    
}



function verificavitoria(){
    
    
    possiveisganhos.forEach(element => {
        if(element == objclickadoplayer1){
           var pop = document.getElementById("pop")
           pop.setAttribute("class", "pop-up")
           pop.innerHTML = "O VENCEDOR FOI X"

           
        }
    });
    possiveisganhos.forEach(element => {
        if(element == objclickadoplayer2){
            var pop = document.getElementById("pop")
            pop.setAttribute("class", "pop-up")
            pop.innerHTML = "O VENCEDOR FOI BOLINHA"
        }
    });
}
function passplayer(id){
     player = id
     
      
  
}


const possiveisganhos = [
   "1,2,3",
   "2,1,3",
   "2,3,1",
   "3,2,1",
   "4,5,6",
   "5,4,6",
   "5,6,4",
   "6,5,4",
   "7,8,9",
   "8,7,9",
   "8,9,7",
   "9,7,8",
   "1,4,7",
   "4,1,7",
   "4,7,1",
   "2,5,8",
   "5,2,8",
   "5,8,2",
   "8,5,2",
   "3,6,9",
   "6,3,9",
   "6,9,3",
   "9,6,3",
   "1,5,9",
   "5,9,1",
   "5,1,9",
   "9,5,1",
   "3,5,7",
   "5,3,7",
   "5,7,3",
   "7,5,3"
]
