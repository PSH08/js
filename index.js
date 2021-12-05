let tab_head = document.querySelector('.tab>ul');
let on = document.querySelector('.tab>li');
tab_head.addEventListener('click',function () {
    on.classList.add('is_on')
});