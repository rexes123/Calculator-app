const display = document.getElementById('display');
const button = Array.from(document.getElementsByClassName('btn'));

 button.map( button =>{
     button.addEventListener('click', (e) => {
     switch(e.target.innerText){
        case 'RESET':
            display.innerHTML= '';
            break;

        case 'DEL':
            display.innerHTML= display.innerText.slice(0,-1)
            break;
        case '=':
            try{
                display.innerHTML = eval(display.innerHTML);
            } catch{
                display.innerHTML = "Error!"
            }
            break;
         default:
             display.innerText += e.target.innerText;
     }
    //  console.log(display.innerText)
     })
 })




