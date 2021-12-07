const tab_head = document.querySelectorAll('.tab li');
const contents = document.querySelectorAll('.content ul');
// console.log(contents);
// console.log(tab_head);
for(let i = 0; i < tab_head.length; i++) {
    tab_head[i].addEventListener('click', (e)=> {
        e.preventDefault()
        for(let j = 0; j < tab_head.length; j++) {
            tab_head[j].classList.remove('active')
            contents[j].classList.remove('active')
        }
        tab_head[i].classList.add('active')
        contents[i].classList.add('active')
    });
};
// if(i === 1) {
//     tab_head[0].classList.remove('active');
//     tab_head[1].classList.add('active');
//     tab_head[2].classList.remove('active');
//     contents[0].classList.remove('active');
//     contents[1].classList.add('active');
//     contents[2].classList.remove('active');
// }else if(i === 2) {
//     tab_head[0].classList.remove('active');
//     tab_head[1].classList.remove('active');
//     tab_head[2].classList.add('active')
//     contents[0].classList.remove('active');
//     contents[1].classList.remove('active');
//     contents[2].classList.add('active')
// }else {
//     tab_head[0].classList.add('active')
//     tab_head[1].classList.remove('active');
//     tab_head[2].classList.remove('active');
//     contents[0].classList.add('active')
//     contents[1].classList.remove('active');
//     contents[2].classList.remove('active');
// }