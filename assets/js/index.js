
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navbarUserLogin = document.querySelector('.navbar-user-login');
document.onclick = function(e) {
    if (e.target.closest('.navbar-user-login')) {
        document.querySelector('.navbar-user').classList.toggle('active');
    } else {
        document.querySelector('.navbar-user').classList.toggle('active', false);
    }
}

const navSearchList0 = $$('.nav-search-text[data-index="0"]'); // Nhận - trả phòng
const navSearchList2 = $('.nav-search-text[data-index="2"]'); // Ngày linh hoạt
const navSearchList10 = $('.nav-search-text [data-index="0"]'); //Khách noi o
const navSearchList11 = $('.nav-search-text [data-index="1"]'); //Khách trai nghiem

const navExpList = $$('.navbar-exp-link');
let isClosedFlexDate = true;
navExpList.forEach((btn, index) => {
    btn.onclick = function() {
        if (!btn.classList.contains('active')) {
            navExpList.forEach((expLink, index) => {
                expLink.classList.toggle('active', false);
            })
            btn.classList.toggle('active');
            if (index < 2) {
                if (index === 0) {
                    navSearchList0.forEach(list => list.classList.toggle('disabled', !isClosedFlexDate));
                    navSearchList2.classList.toggle('disabled', isClosedFlexDate);
                }
                if (index === 1) {
                    navSearchList0.forEach(list => list.classList.toggle('disabled', true));
                    navSearchList2.classList.toggle('disabled', true);
                }
                navSearchList10.classList.toggle('disabled', index === 1);
                navSearchList11.classList.toggle('disabled', index === 0);
            }
        }
    }
});

// Địa điểm gợi ý
const navPlace = $$('.nav-search-place-option input');
function renderNavPlace() {
    const navPlaceChecked = $$('.nav-search-place-option input.checked');
    let html = '';
    navPlaceChecked.forEach((place,index) => {
        if (index < (navPlaceChecked.length - 1))
            html = html.concat(place.value,', ')
        else 
            html = html.concat(place.value,' ')
    })
    $('.nav-search-input').value = html;
    if (navPlaceChecked.length > 0)
        $('.nav-search-input').style.fontWeight = '700';
    else 
        $('.nav-search-input').style.fontWeight = '400';

}
navPlace.forEach(place => {
    place.onclick = function() {
        place.classList.toggle('checked');
        renderNavPlace();
    }
})

// Lịch nhận phòng - trả phòng
const navDate = $$('.nav-search-text[data-index="0"]');
$$('.nav-search-calendar input').forEach((calendar, index) => {
    calendar.onchange = function () {
        navDate[index].querySelector('.nav-search-description').innerHTML = calendar.value;
        navDate[index].querySelector('.nav-search-description').style.fontWeight = '700';
    }
})

// Xuất ngày của ngày linh hoạt
function renderFlexDate() {
    const howLong = $('.nav-search-flexible-how-long input.checked');

    const monthFlex = $$('.nav-search-flexible-when-month.checked');
    let html = ' ';
    monthFlex.forEach((month,index) =>{
        if (index < (monthFlex.length-1)) 
            html = html.concat('thg ',month.getAttribute("name"),', ');
        else
            html = html.concat('thg ',month.getAttribute("name"));
    });

    $('.nav-search-text[data-index="2"] .nav-search-description').innerHTML = `${howLong.value} vào ${html}`;
    $('.nav-search-text[data-index="2"] .nav-search-description').style.fontWeight = '700';
}

// Ngày linh hoạt
const howLongBtn = $$('.nav-search-flexible-how-long input');
howLongBtn.forEach(btn => {
    btn.onclick = function() {
        howLongBtn.forEach(btn => {
            btn.classList.toggle('checked', false);
        })
        btn.classList.toggle('checked', true);
        renderFlexDate();
    }
});
const whenBtn = $$('.nav-search-flexible-when-month');
const numWhenBtn = $$('.nav-search-flexible-when-month.checked');
let numWhenBtnLength = 1;
whenBtn.forEach((btn, index) => {
    btn.onclick = function() {
        let check = btn.classList.contains('checked');
        check = !check;
        if (check){
            btn.classList.toggle('checked', check);
            btn.querySelector('.nav-search-flexible-when-month-icon').innerHTML = '<i class="far fa-calendar-check"></i>';
            numWhenBtnLength++;
            renderFlexDate();
        }
        if (!check && numWhenBtnLength > 1){
            btn.classList.toggle('checked', check);
            btn.querySelector('.nav-search-flexible-when-month-icon').innerHTML = '<i class="far fa-calendar"></i>';
            numWhenBtnLength--;
            renderFlexDate();
        }
    }
})

// Chuyển đổi giữa lịch và ngày linh hoạt
const optionTextBtn = $$('.nav-search-option-text');
optionTextBtn.forEach((btn,index) => {
    btn.onclick = function() {
        if (!btn.classList.contains('active')) {
            optionTextBtn.forEach(btn => {
                btn.classList.toggle('active', false);
            })
            btn.classList.toggle('active');
            $('.nav-search-flexible').classList.toggle('disabled', index === 0);
            $('.nav-search-calendar').classList.toggle('disabled', index === 1);
            if (index === 1) {
                navSearchList0.forEach(list => list.classList.toggle('disabled'));
                navSearchList2.classList.toggle('disabled');
                isClosedFlexDate = !isClosedFlexDate;
                renderFlexDate();
            }
            if (index === 0) {
                navSearchList0.forEach(list => list.classList.toggle('disabled'));
                navSearchList2.classList.toggle('disabled');
            }
        }
    }
});

// Số lượng khách
const btnGuest = $$('.nav-search-guest-item .nav-search-guest-btn');
const numberGuest = $('.nav-search-number-guest');
let sumGuest = 0;
btnGuest.forEach(btn => {
    let valueInput = btn.querySelector('input').value;
    const valueMax = Number(btn.querySelector('input').name);
    
    btn.querySelector('.nav-search-guest-minus').toggleAttribute('disabled', valueInput === '0');
    btn.querySelector('.nav-search-guest-plus').onclick = function() {
        valueInput++;
        sumGuest++;
        numberGuest.classList.toggle('active', true);
        numberGuest.innerHTML = `${sumGuest} Khách`;

        if (valueInput === valueMax) {
            btn.querySelector('.nav-search-guest-plus').toggleAttribute('disabled', true);
        }
        btn.querySelector('input').value = valueInput;
        btn.querySelector('.nav-search-guest-minus').toggleAttribute('disabled', false);
    }
    btn.querySelector('.nav-search-guest-minus').onclick = function() {
        valueInput--;
        sumGuest--;
        if (sumGuest === 0){
            numberGuest.innerHTML = "Thêm khách";
            numberGuest.classList.toggle('active', false);
        } 
        else
            numberGuest.innerHTML = `${sumGuest} Khách`;
        btn.querySelector('input').value = valueInput;
        btn.querySelector('.nav-search-guest-minus').toggleAttribute('disabled', valueInput === 0);
        btn.querySelector('.nav-search-guest-plus').toggleAttribute('disabled', valueInput === valueMax);
    }
})

// Trải nghiệm - ngày
let htmlExpDate = [];
function renderExpDate(calendar, index) {
    htmlExpDate[index] = calendar;
    const navExpDate = $('.nav-search-text [data-index="1"]');
    if (htmlExpDate[0] === htmlExpDate[1]) 
        navExpDate.querySelector('.nav-search-description').innerHTML = htmlExpDate[0];
    else
        navExpDate.querySelector('.nav-search-description').innerHTML = htmlExpDate.join(' đến ');
    navExpDate.querySelector('.nav-search-description').style.fontWeight = '700';

}

$$('.nav-search-calendar-2 input').forEach((calendar, index) => {
    let html = [];
    calendar.onchange = function () {
            renderExpDate(calendar.value, index)
    }
})

// Nút trên thanh tìm kiếm
const navBarText = $$('.nav-search-text');
document.onclick = function (e) {
    if (e.target.closest('.navbar-user-login')) {
        $('.navbar-user').classList.toggle('active');
    } else if (e.target.closest('.nav-search-bar')) {
        if (e.target.closest('.nav-search-btn')) {
            $('.nav-search-btn').classList.toggle('active', true);
            $('.nav-search-place-wrap').classList.toggle('disabled', false);
            $('.nav-search-date-wrap').classList.toggle('disabled', true);
            $('.nav-search-guest-wrap').classList.toggle('disabled', true);
            $('.nav-search-date-2-wrap').classList.toggle('disabled', true);
        }
        const navText = e.target.closest('.nav-search-text');
        navBarText.forEach((bar, index) => {
            if (bar === navText) {
                navBarText.forEach(bar => {
                    bar.classList.toggle('active', false);
                });
                bar.classList.toggle('active', true);
                switch (index) {
                    case 0:
                        $('.nav-search-btn').classList.toggle('active', true);
                        $('.nav-search-date-wrap').classList.toggle('disabled', true);
                        $('.nav-search-guest-wrap').classList.toggle('disabled', true);
                        $('.nav-search-place-wrap').classList.toggle('disabled');
                        $('.nav-search-date-2-wrap').classList.toggle('disabled', true);
                        break;
                    case 1:
                    case 2:
                    case 3:
                        $('.nav-search-btn').classList.toggle('active', true);
                        $('.nav-search-date-wrap').classList.toggle('disabled');
                        $('.nav-search-guest-wrap').classList.toggle('disabled', true);
                        $('.nav-search-place-wrap').classList.toggle('disabled', true);
                        $('.nav-search-date-2-wrap').classList.toggle('disabled', true);
                        break;
                    case 4:
                        if (!e.target.closest('.nav-search-btn')) {
                            if (e.target.closest('.nav-search-text [data-index="0"]'))
                                $('.nav-search-guest-wrap').classList.toggle('disabled');
                            else if (e.target.closest('.nav-search-text [data-index="1"]')) 
                                $('.nav-search-date-2-wrap').classList.toggle('disabled');
                            $('.nav-search-btn').classList.toggle('active', true);
                            $('.nav-search-place-wrap').classList.toggle('disabled', true);
                            $('.nav-search-date-wrap').classList.toggle('disabled', true);
                        }
                        break;
                    default:
                        break;
                }
            }
        })
    } else if (e.target.closest('.overlay')) {
        if (!e.target.closest('.navbar')) {
            $('.overlay').classList.toggle('hide', true);
            $('.navbar').classList.toggle('activeSearch', false);
            $('.navbar-exp').classList.toggle('disabled', true);
            $('.nav-search-wrap').classList.toggle('disabled', true);
        }
    }
    else {
        navBarText.forEach(bar => bar.style.background = '#fff');
        navBarText.forEach(bar => bar.classList.toggle('active', false));
        $('.navbar-user').classList.toggle('active', false);
        $('.nav-search-btn').classList.toggle('active', false);
        $('.nav-search-place-wrap').classList.toggle('disabled', true);
        $('.nav-search-date-wrap').classList.toggle('disabled', true);
        $('.nav-search-guest-wrap').classList.toggle('disabled', true);
        $('.nav-search-date-2-wrap').classList.toggle('disabled', true);
    }
    
}

function checkScrollNavBar() {
    if (window.scrollY > 58){
        $('.navbar').style.top = '0';
        $('.navbar').classList.toggle('active', true);
        $('.navbar-logo img').src = "./assets/img/logo.png";
        $('.nav-search-header-wrap').classList.toggle('disabled', false)
        $('.nav-search-wrap').classList.toggle('disabled', true);
        $('.navbar-exp').classList.toggle('disabled', true);
    } else {
        $('.navbar').style.top = 58 - window.scrollY + 'px';
        $('.navbar').classList.toggle('active', false);
        $('.navbar-logo img').src = "./assets/img/logo-white.png";
        $('.nav-search-header-wrap').classList.toggle('disabled', true)
        $('.nav-search-wrap').classList.toggle('disabled', false);
        $('.navbar-exp').classList.toggle('disabled', false);
    }
}

document.onscroll = function() {
    checkScrollNavBar();
};

$('.nav-search-header-wrap').onclick = function() {
    $('.navbar').classList.toggle('activeSearch', true);
    $('.overlay').classList.toggle('hide', false);
    $('.nav-search-wrap').classList.toggle('disabled', false);
    $('.navbar-exp').classList.toggle('disabled', false);
    currentScrollY = window.scrollY;
    document.onscroll = function () {
        $('.navbar').classList.toggle('activeSearch', false);
        $('.navbar-exp').classList.toggle('disabled', true);
        $('.nav-search-wrap').classList.toggle('disabled', true);
        $('.overlay').classList.toggle('hide', true);
        checkScrollNavBar();
    }
}
