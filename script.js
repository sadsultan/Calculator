function createCalculator(){
    let container = document.getElementById('container');

    let screen = document.createElement('div');
    screen.id = 'screen';
    container.appendChild(screen);

    let bottom = document.createElement('div');
    bottom.id = 'bottom';
    container.appendChild(bottom);
}

function createButtons(){
    const screen = document.getElementById('screen');
    const bottom = document.getElementById('bottom');
    const buttons = ['1','2','3','C','4','5','6','+','7','8','9','*', '-','0','=','/'];

    for(let i = 0; i < buttons.length; i++){
        let button = document.createElement('button');
        button.innerHTML = buttons[i];
        bottom.appendChild(button);

        if(buttons[i] === 'C'){
            button.addEventListener('click', function(){
                screen.innerText = '';
            });
        }
        else if(buttons[i] === '='){
            button.addEventListener('click', function(){
                screen.innerText = eval(screen.innerHTML);
            });
        }
        else{
            button.addEventListener('click', function(){
                screen.innerText += buttons[i];
            });
        }
    }
}


createCalculator();
createButtons();