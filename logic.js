// Получаю выбранную строку:
drop.onclick = function() {
    inp.value = this.value;
};

// По нажатию отправляю содержание строки:
button.onclick = function() {

    let i = 0;
    let leng = document.getElementsByTagName('option').length;

    for (let i = 0; i < leng; i++) {
        if (drop[i].value === drop.value) {
            if (inp.value !== '') { 
                drop[i].innerHTML = inp.value;
            } else {
                document.getElementById("inp").style.borderColor = "red";
                setTimeout(() => document.getElementById("inp").style.borderColor = "", 1000);
            } 
        }
    }

  };
