window.addEventListener('load',init);

// function init(){
//     var expression = document.querySelector('#expr');
//     let buttons = document.querySelectorAll('.num');
//     // console.log(buttons);
//     attachEvent(buttons,expression);
// }

// function attachEvent(buttons,expression){
//     for(let item of buttons){
//         // console.log(item);
//         item.addEventListener('click',()=>{
//             // expression.value = item.innerHTML;
//             expression.value += item.value;
//             // expression.value = item.innerText;
//         });
//     }
// }





function init(){
    let expression = document.querySelector('#expr');
    // expression.addEventListener('change',()=>{
    //     checkOperator(expression);
    // });

    let btns = document.querySelector('#btns');
    createButton(btns,expression);

}

function checkOperator(expression){
    
    let operators = ['+','-','*','/'];
    let characters = expression.value.split('');
    let length = characters.length;

    let last1 = false;
    let last2 = false;
    let last3 = false;
    let lastCharacter;
    let temp3;

    for(let item of operators){
        if(characters[length-1] == item){
            last1 = true;
        }
        if(characters[length-2] == item){

            if(characters[length-2] == '*' && characters[length-1]=='-'){

            }
            else{
                last2 = true;
                
            }
            
        }

        if(characters[length-3]=='*' && characters[length-2] =='-' && characters[length-1]==item){
            last3 = true;
        }


    }

    if(last3){
        // console.log('inside the last 3');
        temp3 = characters.pop();
        characters.pop();
        characters.pop();
        characters.push(temp3);
    }

    else if(last1 && last2){
        // console.log('inside the last 1 and 2');
        lastCharacter = characters.pop();
        characters.pop();
        characters.push(lastCharacter);
    }
    
    expression.value = "";
    for(let item of characters){
        expression.value += item;
    }
    
    // console.log('CheckOperator Finished.....');
}


function createButton(btns,expression){
    let arr=['+','-','*','=','C','/'];
    let k=0;
    for( let i=9 ; i>=0 ; i-- ){
        
        if(i==6 || i==3 || i==0){
            let btn = document.createElement('button'); 
            let br = document.createElement('br');
            btn.className = "btn btn-warning m-2 p-3";
            btn.value = arr[k];
            btn.innerText = arr[k];
            k++;
            btn.addEventListener('click',function(){
                expression.value += btn.value;
                checkOperator(expression);
            });
            btns.appendChild(btn);
            btns.appendChild(br);
        }

        if(i==0){
            let btn = document.createElement('button'); 
            
            btn.className = "btn btn-warning m-2 p-3";
            btn.value = arr[k];
            btn.innerText = arr[k];
            k++;
            btn.addEventListener('click',function(){
                expression.value = eval(expression.value);
                checkOperator(expression);
            });
            btns.appendChild(btn);
            
        }

        let btn = document.createElement('button');
        btn.className = "btn btn-success m-2 p-3";
        btn.value = i;
        btn.innerText = i;
        btn.addEventListener('click',function(){
            expression.value += i;
            checkOperator(expression);
        });
        btns.appendChild(btn);

    }

    while(k<arr.length){
        let btn = document.createElement('button'); 
            
        btn.className = "btn btn-warning m-2 p-3";
        btn.value = arr[k];
        btn.innerText = arr[k];
        k++;
        btn.addEventListener('click',function(){
            if(btn.value == 'C'){
                expression.value = "";
            }
            else{
                expression.value += btn.value;
                checkOperator(expression);
            }
            
        });
        btns.appendChild(btn);
    }


    let btn = document.createElement('button');
    btn.className = "btn btn-danger m-2 p-3";
    btn.innerText = 'DEL';
    btn.addEventListener( 'click', function(){
        deleteLast(expression);
    } );
    btns.appendChild(btn);

}


function deleteLast(expression){
    let characters = expression.value.split('');
    characters.pop();
    expression.value = "";

    for(let item of characters){
        expression.value +=item;
    }
}




function evaluate(expression){

    expression.value = eval(expression.value);

}




function clear(expression){
    expression.value = "";
}