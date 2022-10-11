//Elementos buscados diretamente da DON


const calculatorFormInputText = document.getElementById('calculatorForm');
const isPromotedCheckBox = document.getElementById('promotionInput');
const levelInput = document.getElementById('levelInput');
const allBlessingsResult = document.getElementById('allBlessingsResult');
const hcAllBlessingsResult = document.getElementById('hcAllBlessingsResult');
const noBlessingsResult = document.getElementById('noBlessingsResult');
const hcNoBlessingsResult = document.getElementById('hcNoBlessingsResult');


//Variaveis utilizadas para manipular valores
let isPromoted = true 
let allBlessings = 7;
let hcAllBlessings = 7;
let noBlessings = 0;
let hcNoBlessings = 0;



isPromotedCheckBox.addEventListener('change', function(e) {
    e.preventDefault();
  
    if (this.checked) {
        isPromoted = true;
      } else {
        isPromoted = false;
      }

})

calculatorForm.addEventListener('submit', function(e) {
    e.preventDefault();

      let x = parseFloat(levelInput.value);
      let a = eval(x +50);
      let b = a /100;
      let c = Math.pow(parseFloat(levelInput.value), 2);
      let d = c -5*x +8;
      noBlessings = parseInt(b *50 *d);
      let numbless = parseFloat(1 -7 *0.08);
      allBlessings = parseInt(noBlessings *numbless);
      hcNoBlessings = parseInt(noBlessings *1.16);
      hcAllBlessings = parseInt((noBlessings *numbless) *1.363636340410072);
      let numBlessWithPromote = parseFloat(1 -7 *0.08 -(0.3))
    
     
    if (isPromoted === true) {
      allBlessings = parseInt(noBlessings * numBlessWithPromote);
      hcAllBlessings = parseInt(hcAllBlessings -(hcAllBlessings*0.5000003830011819));
      noBlessings = parseInt(noBlessings -(noBlessings *0.3));
      hcNoBlessings = parseInt(hcNoBlessings -(hcNoBlessings *0.2586204417586829));     
    }

           
    allBlessings = allBlessings.toLocaleString();
    hcAllBlessings = hcAllBlessings.toLocaleString();
    noBlessings = noBlessings.toLocaleString();
    hcNoBlessings = hcNoBlessings.toLocaleString();
    

    allBlessingsResult.innerHTML = allBlessings;
    hcAllBlessingsResult.innerHTML = hcAllBlessings;
    noBlessingsResult.innerHTML = noBlessings;
    hcNoBlessingsResult.innerHTML = hcNoBlessings;
})



