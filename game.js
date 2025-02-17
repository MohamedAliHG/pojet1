function getRandomValue(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}


function startTheGame(min,max,nb)
{
    let randomValue=getRandomValue(min,max);
    let won=false;
    let k=nb;
    for(let i=0;i<nb;i++)
        {
            
            let userChoice=prompt(`try to guess the number between ${min} and ${max}. you have ${k} attempts`);
            if(randomValue==userChoice)
            {
                alert(`correct!`);
                won=true;
                break;
            }
            else{
                alert(`Wrong :(`);
                k--;
            }
    
        }
        if(!won)
        {
            alert(`Game Over! The correct number was ${randomValue}`);
        }
       
        let newGame=prompt("start a new game? y/n");
        if(newGame.toLowerCase()==='y'){ setGameParameters();}

}


function getGameLevel(){
 
    let game_level;
    do{
        game_level=prompt("enter game level: e (easy) i (intermediate) h (hard)");

    }while(game_level!='e' && game_level!='i' && game_level!='h');

    return game_level;
}


function setGameParameters()
{
    
    let min,max,nb;
    let level=getGameLevel();
        
    if(level==='e'){
            min=0;
            max=10;
            nb=5;
        }
    else if(level==='i'){

            min=0;
            max=30;
            nb=7;     
        }
    else {
            min=0;
            max=100;
            nb=3;
        }
        
    startTheGame(min,max,nb);
           
        
}


setTimeout(function() {
    setGameParameters();
}, 2);

