window.onload = async () => {
     let y = 0;     //Value to load in the progress bar
     let x = 0;     //Value to put in the function
     let numberOfDecimals = 0;
     let lastDecimalIncrementX = 0.033;
     while(true){
          document.getElementById("progress").value = y;
          document.getElementById("progress_text").innerHTML = y.toFixed(numberOfDecimals) + "%";
          x += 0.01;
          //The function Y= -1/X +100 is used to closer to 100% but never reach it
          y = -1/x + 100;
          await new Promise(r => setTimeout(r, 1000));
          //Increase the number of decimals to display
          if(x >= lastDecimalIncrementX * 3){
               numberOfDecimals +=1;    
               lastDecimalIncrementX = x;
          }
     }
}