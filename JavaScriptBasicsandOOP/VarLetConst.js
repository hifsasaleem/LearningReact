//Var    ---> function
//Let    ---> block
//Const  ---> block read only

function usingVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

function usingLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

usingVar();
usingLet();

const x = 1;
x = 2;
