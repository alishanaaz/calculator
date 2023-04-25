alert("Hello!!! Welcome to my calculator");
(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-blue');
    let clear = document.querySelector('.btn-red');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            if (value) {
                screen.value += value;
            }
        })
    });

    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "";
        }
        else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });
    clear.addEventListener('click', function (e) {
        screen.value = "";
    });

}());