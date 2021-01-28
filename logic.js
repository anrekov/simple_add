// Получаю выбранную строку:
drop.onchange = function () {
    input.value = this.value;
    document.getElementById('input').style.borderColor = '';
};

// По нажатию отправляю содержание строки:
button.onclick = function () {

    let elems = document.querySelectorAll('option');

    elems.forEach(element => {
        if (element.value === drop.value) {
            if (input.value !== '') {
                element.innerHTML = input.value;
            } else {
                document.getElementById('input').style.borderColor = 'red';
            }
        }
    });
};
