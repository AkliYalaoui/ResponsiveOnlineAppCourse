var images = ["bg-img.jpg",
              "bg-img2.jpg",
              "bg-image3.jpg"],

    text_h1 = ["free Online Courses from top Universities",
               "daily Interaction with Monitors from around the world",
               "Get a Real  Certification"],

    text_h3 = ["Our courses are available to start right away .", "improve your talking skills "
                , "know the real world"],
    increment = 1,
    background_img = document.getElementById('background-img'),
    h1Txt = document.getElementById('h1Txt'),
    h3Txt = document.getElementById('h3Txt'),
    //    next_page = document.getElementById('next-page'),
    This_a_constante = 3,
    pageNum = document.getElementById("pageNum"),
    overlay = document.querySelector('.overlay');

function goNextWlcPage() {

    if (increment < This_a_constante) {
        background_img.src = 'images/' + images[increment];
        h1Txt.innerHTML = text_h1[increment];
        h3Txt.innerHTML = text_h3[increment];
        overlay.classList.add('overlayAnimation');
        setTimeout(() => {
            overlay.classList.remove('overlayAnimation');
        }, 3000);
        stylePageNumber(increment);
        increment++;

    } else {
        //        next_page.href = 'dashboard.html';
        overlay.classList.add('overlayAnimation');
        setTimeout(() => {
            overlay.classList.remove('overlayAnimation');
        }, 3000);
            window.location.replace('dashboard.html');
    }
}

function stylePageNumber(e) {

    if (e === 1) {
        pageNum.classList.remove('activ1');
        pageNum.classList.add('activ2');
        pageNum.classList.remove('activ3');
    }
    if (e === 2) {
        pageNum.classList.remove('activ1');
        pageNum.classList.remove('activ2');
        pageNum.classList.add('activ3');
    }
}
