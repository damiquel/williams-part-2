


//I included an alert for the aesthetic.

let playerName = prompt('Welcome to GC mini golf! What is your name?')
let holes = prompt('Hi ' + playerName+ '! Would you like to play 3 or 6 holes?')

if (holes==3) {
       
    var hole1 = +(prompt ('How many putts for hole 1? (par: 3)'))
    var hole2 = +(prompt ('How many putts for hole 2? (par: 3)'))
    var hole3 = +(prompt ('How many putts for hole 3? (par: 3)'))

}

let totalputts3 = hole1 + hole2 + hole3
let totalpar3 = totalputts3 - 9 

if (totalpar3 > 0) {
 
    console.log('Nice try, ' +playerName+ '... Your total par was: +' +totalpar3)
    alert('Nice try, ' +playerName+ '... Your total par was: +' +totalpar3)
    

}else if (totalpar3 < 0) {

    console.log('Great job, ' +playerName+ '. Your total par was: ' +totalpar3)
    alert('Great job, ' +playerName+ '. Your total par was: ' +totalpar3)
    

}else if (totalpar3 == 0) {

    console.log('Good job, ' +playerName+ '. Your total par was: ' +totalpar3)
    alert('Good job, ' +playerName+ '. Your total par was: ' +totalpar3)
   
}

if (holes==6) {
    
 var hole1 = +(prompt ('How many putts for hole 1? (par: 3)'))
 var hole2 = +(prompt ('How many putts for hole 2? (par: 3)'))
 var hole3 = +(prompt ('How many putts for hole 3? (par: 3)'))
 var hole4 = +(prompt ('How many putts for hole 4? (par: 3)'))
 var hole5 = +(prompt ('How many putts for hole 5? (par: 3)'))
 var hole6 = +(prompt ('How many putts for hole 6? (par: 3)'))

}

let totalputts6 = hole1 + hole2 + hole3 + hole4 + hole5 + hole6
let totalpar6 = totalputts6 - 18 

if (totalpar6 > 0) {

    console.log('Nice try, ' +playerName+ '... Your total par was: +' +totalpar6)
    alert('Nice try, ' +playerName+ '... Your total par was: +' +totalpar6)

}else if (totalpar6 < 0) {

    console.log('Nice try, ' +playerName+ '... Your total par was: +' +totalpar6)
    alert('Great job, ' +playerName+ '. Your total par was: ' +totalpar6)

}else if (totalpar6 == 0) {

    console.log('Good job, ' +playerName+ '. Your total par was: ' +totalpar6)
    alert('Good job, ' +playerName+ '. Your total par was: ' +totalpar6)

}




