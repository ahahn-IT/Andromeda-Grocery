/*----Prices----*/
let marlPrice = document.getElementById('marlPrice');
let marlMenthPrice = document.getElementById('marlMenthPrice');
let marlLightPrice = document.getElementById('marlLightPrice');
let NpredPrice = document.getElementById('NpredPrice');
let NpPrice = document.getElementById('NpPrice');
let AMSbluePrice = document.getElementById('AMSbluePrice');
let AMSyellPrice = document.getElementById('AMSyellPrice');
let SenecaPrice = document.getElementById('SenecaPrice');
let philliesPrice = document.getElementById('philliesPrice');
let optimoPrice = document.getElementById('optimoPrice');
let cokePrice = document.getElementById('cokePrice');
let spritePrice = document.getElementById('spritePrice');
let mntDewPrice = document.getElementById('mntDewPrice');
let pepsiPrice = document.getElementById('pepsiPrice');
let doritosPrice = document.getElementById('doritosPrice');
let fritosPrice = document.getElementById('fritosPrice');
let laysPrice = document.getElementById('laysPrice');


/*----Cigarettes----*/
let marlboro = document.getElementById('marlbtn');
let marlMenthol = document.getElementById('marlMenthbtn');
let marlLight = document.getElementById('marlLightbtn');
let seneca = document.getElementById('senecabtn');
let NPRed = document.getElementById('NPredbtn');
let Newport = document.getElementById('NPbtn');
let AMSblue = document.getElementById('AMSbluebtn');
let AMSyell = document.getElementById('AMSyellbtn');
let phillies = document.getElementById('philliesbtn');
let optimos = document.getElementById('Optimobtn');

/*----Drinks----*/
let coke = document.getElementById('cokebtn');
let sprite = document.getElementById('spritebtn');
let mntDew = document.getElementById('mntDewbtn');
let pepsi = document.getElementById('pepsibtn');

/*----Snacks----*/
let doritos = document.getElementById('doritosbtn');
let fritos = document.getElementById('fritosbtn');
let lays = document.getElementById('laysbtn');


/*----Register----*/
let display = document.getElementById('display');
let clear = document.getElementById('clearbtn');
let itemsbtn = document.getElementById('itemsbtn');
let groceryTotal = document.getElementById('totalbtn');

let items = [];


marlboro.addEventListener('click', function(){
    let input = parseFloat(marlPrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Marlboro";
    items.push(input);
    
});

marlMenthol.addEventListener('click', function(){
    let input = parseFloat(marlMenthPrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Marlboro Menthol";
    items.push(input);
});

marlLight.addEventListener('click', function(){
    let input = parseFloat(marlLightPrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Marlboro Lights";
    items.push(input);
});

NPRed.addEventListener('click', function(){
    let input = parseFloat(NpredPrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Newport Red";
    items.push(input);
});

Newport.addEventListener('click', function(){
    let input = parseFloat(NpPrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Newport";
    items.push(input);
});

AMSblue.addEventListener('click', function(){
    let input = parseFloat(AMSbluePrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " American Spirit";
    items.push(input);
});

AMSyell.addEventListener('click', function(){
    let input = parseFloat(AMSyellPrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " American Spirit";
    items.push(input);
});

seneca.addEventListener('click', function(){
    let input = parseFloat(SenecaPrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Seneca";
    items.push(input);
});

phillies.addEventListener('click', function(){
    let input = parseFloat(philliesPrice.innerHTML);
    document.getElementById('display').innerHTML = input + "&#162;" + " Phillies";
    items.push(input);
});

optimos.addEventListener('click', function(){
    let input = parseFloat(optimoPrice.innerHTML);
    document.getElementById('display').innerHTML = input + "&#162;" + " Optimos";
    items.push(input);
});


coke.addEventListener('click', function(){
    let input = parseFloat(cokePrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Coke";
    items.push(input);
});

sprite.addEventListener('click', function(){
    let input = parseFloat(spritePrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Sprite";
    items.push(input);
});

mntDew.addEventListener('click', function(){
    let input = parseFloat(mntDewPrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Mountain Dew";
    items.push(input);
});

pepsi.addEventListener('click', function(){
    let input = parseFloat(pepsiPrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Pepsi";
    items.push(input);
});

doritos.addEventListener('click', function(){
    let input = parseFloat(doritosPrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Doritos";
    items.push(input);
});

fritos.addEventListener('click', function(){
    let input = parseFloat(fritosPrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Fritos";
    items.push(input);
});

lays.addEventListener('click', function(){
    let input = parseFloat(laysPrice.innerHTML);
    document.getElementById('display').innerHTML = "$" + input + " Lays";
    items.push(input);
});











clear.addEventListener('click', function(){
    display.innerHTML = items.length -1;
    items.splice(0, items.length);
    if(display.innerHTML == 0, -1){
        display.innerHTML = "$0.00";
    }

    for (let i = 0; i < items.length; i++) {
        display.innerHTML = "$" + items;
        
      }
    
});

itemsbtn.addEventListener('click', function(){
     /*items.forEach(element => items.values )
        document.getElementById('display').innerHTML = items;*/

        for (let i = 0; i < items.length; i++) {
            display.innerHTML =  items.length;
            
          }
          
});

groceryTotal.addEventListener('click', function(){
    let total = 0;
    items.forEach(item => total += item);
    display.innerHTML = "$" + total.toFixed(2);
      
    
});

         


console.log(items);
 console.log('working');



 


