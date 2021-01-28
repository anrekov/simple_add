// Получаю выбранную строку:
drop.onchange = function () {
    inp.value = this.value;
    document.getElementById("inp").style.borderColor = "";
};

// По нажатию отправляю содержание строки:
button.onclick = function () {

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
