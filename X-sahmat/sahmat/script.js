



// let x = 3;

// while(x<5){
//     console.log(x);
//     x++;
// }


// let userName;


// while(!userName){
//     userName = prompt("user adinizi daxil edin?");
//     console.log(userName);
// }

// let x = 5;

// while(x>0){
//     console.log(x);
//     x-=2; // x = x-2
// }


// let x = 5;

// do{
//     alert(x);
//     x--;
// }while(x<0)


// for(let i = 0; i<5; i++){
//     alert(i);
// }

// let i;

// for(i = 0; i<5; i++){
//     alert(i);
// }

// let i = 0;

// for(; i<5; i++){
//     alert(i);
// }


// function Qur(){
//     let num = document.getElementById('num');
//     let show = document.getElementById('show');

//     let data ="";

//     for(let i = 1;i<=num.value; i++){
//      data = `<input type="text" placeholder="Musteri ${i}" />`; // data = data + `<input type="text"  />`
//     }
//     show.innerHTML = data;
// }


function table() {

  let tbl = "";
  let table = document.getElementById('table');
  let slc = document.getElementById('slc');


  for (let i = 0; i < slc.value; i++) {
    tbl += `<tr>`;


    for (let j = 0; j < slc.value; j++) {
      //let color = (i+j)%2==0 ? "" : '';
      let color = i == j ? "black"  : i+j==slc.value-1 ? 'black'  : " " ;
      tbl += `<td style="background-color:${color}" > ${i}, ${j} </td>`;
    }

    tbl += `</tr>`;
  }


  table.innerHTML = tbl;

}


table();






