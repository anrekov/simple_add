// Получаю выбранную строку:
drop.onchange = function() {
    inp.value = this.value;
};

// По нажатию отправляю содержание строки:
button.onclick = function() {

    // let i = 0;
    // let leng = document.querySelectorAll('option').length;

    // for (let i = 0; i < leng; i++) {
    //     if (drop[i].value === drop.value) {
    //         if (inp.value !== '') { 
    //             drop[i].innerHTML = inp.value;
    //         } else {
    //             document.getElementById("inp").style.borderColor = "red";
    //         } 
    //     }
    // }
    
    let elems = document.querySelectorAll('option');

    elems.forEach(element => {
        if (element.value === drop.value) {
            if (inp.value !== '') { 
                element.innerHTML = inp.value;
            } else {
                document.getElementById("inp").style.borderColor = "red";
            } 
        }
    });

  };
