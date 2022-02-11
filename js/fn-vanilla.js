// benefit random banner01
function benefitBanner01(){
    let acBanNum1 =Math.floor(Math.random()*4);
    let acBan1 = document.querySelectorAll('.benefit-banner01 a');
    for(let idx=0; idx<acBan1.length; idx++){
        acBan1[idx].classList.remove('active');
    }
    acBan1[acBanNum1].classList.add('active');
}

// benefit random banner02
function benefitBanner02(){
    let acIdx =Math.floor(Math.random()*3);
    let acBan = document.querySelectorAll('.benefit-banner02 a');
    for(let idx=0; idx<acBan.length; idx++){
        acBan[idx].classList.remove('active');
    }
    acBan[acIdx].classList.add('active');
}

// Mobile login nav form JS

// function moNavLogin(){

//     let bodyEl = document.querySelector('body');
//     let loginEl = document.querySelector('.m-login');
//     let navEl = document.querySelector('.m-nav');   

//     let btnOpLog = document.querySelector('.icon-ticket');
//     let btnOpNav = document.querySelector('.icon-m-burger');
//     let btnClLog = document.querySelector('.btn-close-login');
//     let btnClNav = document.querySelector('.btn-close-nav');

//     // 로그인 오픈
//     btnOpLog.addEventListener('click', function(){
//         let loginCfm = confirm('로그인이 필요한 서비스입니다.\n로그인으로 이동할까요?');
//         if(loginCfm){
//             mobileForm('hidden', 'block', 'scroll', loginEl);
//         }
//     })

//     // 로그인 닫기
//     btnClLog.addEventListener('click', function(){
//         mobileForm('scroll', 'none', 'hidden', loginEl);
//     })

//     // 네비게이션 오픈
//     btnOpNav.addEventListener('click', function(){    
//         mobileForm('hidden', 'block', 'scroll', navEl);      
//     })

//     // 네비게이션 닫기
//     btnClNav.addEventListener('click', function(){    
//         mobileForm('scroll', 'none', 'hidden', navEl);      
//     })

//     function mobileForm(bodyOver, tarDis, tarOver, target){
//         bodyEl.style.overflow = bodyOver;
//         target.style.display = tarDis;
//         target.style.overflowY = tarOver;
//     }
// }