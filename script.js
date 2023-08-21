let btn = document.querySelectorAll('.nav_bar button');
let nav_list = document.querySelector('.nav_list');
let btn_img = document.querySelector('#click_btn img');
btn.forEach(buttons =>{

    buttons.addEventListener('click',()=>{
        if(nav_list.style.display === 'none' || nav_list.style.display === ''){
            let manue_img_url = 'images/icon-menu-close.svg';
            btn_img.setAttribute('src',manue_img_url);
            nav_list.style.display ='flex'
        }else{
            remove_img_url= 'images/icon-menu.svg';
            nav_list.style.display = 'none';
            btn_img.setAttribute('src',remove_img_url);
        }
    })
})