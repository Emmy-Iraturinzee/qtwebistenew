(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 500);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('blur shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('blur shadow-sm').css('top', '-150px');
        }
    });

// video speed decrease
document.querySelector('#bg-video').defaultPlaybackRate = 0.1;
document.querySelector('#bg-video').play();


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);


// scroll progress

const scrollProgress = document.getElementById('scroll-progress');
const height =
document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
const scrollTop =
document.body.scrollTop || document.documentElement.scrollTop;
scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});


// cursor

// // typing eff
// const t_Options = [["QT Global Software LTD ,", "Is a Tech Company ", "Committed to enhancing the competence and competitiveness ", "O  f its clients by enabling them to succeed through the power of information technology security "],
// ["We have six years of experience in building ",
// "We build web and mobile applications",
// " We serve government institutions and private businesses",
// "Requiring robust applications",
// "For use by thousands of users"

// ]]; // first sub-array contains the first part of the sentence; and the second sub-array contains second part

// const textElement1 = document.getElementById("t1");
// const textElement2 = document.getElementById("t2");
// let i = 0;
// let j = 0;
// let k = 0;
// let l = 0;
// let m = 0;

// function updateText(t_mode, text) { // writes/erases one character
//   if (t_mode == 0) { // first part of sentence
//     textElement1.textContent = `${text}`;
//   }
//   else if (t_mode == 1) { // second part of sentence
//     textElement2.textContent = `${text}`;
//   }
//   }

// function eraseEffect(t_mode, string) {
//   let index = string.length
//   const delay = 40; // delay between each character in milliseconds

//   function erase() {
//     if (index > 0) {
//       updateText(t_mode, string.substring(0, index - 1));
//       index--;
//       setTimeout(erase, delay);
//     } else {
//       typeWriterEffect();
//       return;
//     }
//   }
//   erase();
// }

// function typeEffect(t_mode, string) {
//   let index = 0;
//   const delay = 90; // delay between each character in milliseconds

//   function type() {
//     if (index < string.length) {
//       updateText(t_mode, string.substring(0, index + 1));
//       index++;
//       setTimeout(type, delay);
//     } else {
//       typeWriterEffect();
//       return;
//     }
//   }
//   type();
// }

// function typeWriterEffect() {
//   const short_delay = 750;
//   const long_delay = 1250;
//   if (i == 0 && j == 0) { // start of arrays
//     typeEffect(0, t_Options[i][j]);
//     i++;
//   } else if (i == 1 && j == 9) { // end of arrays
//     if (m == 0) {
//       m++;
//       typeEffect(1, t_Options[i][j]);
//     } else if (m == 1) {
//       m++;
//       setTimeout(() => eraseEffect(1, t_Options[i][j]), long_delay);
//     } else if (m == 2) {
//       i = 0;
//       j = 0;
//       k = 0;
//       l = 0;
//       m = 0;
//       setTimeout(() => eraseEffect(0, t_Options[0][3]), long_delay);
//     }
//   } else if (i == 0) { // during [0][x]
//     if (m == 0) {
//       m++;
//       eraseEffect(0, t_Options[i][k-1]);
//     } else if (m == 1) {
//       m = 0;
//       j = l + 1;
//       i++;
//       setTimeout(() => typeEffect(0, t_Options[0][k]), short_delay);
//     }
//   } else if ( //before switch to [0][x]
//     (i == 1 && j == 2) ||
//     (i == 1 && j == 4) ||
//     (i == 1 && j == 6)
//   ) {
//     if (m == 0) {
//       m++;
//       setTimeout(() => typeEffect(1, t_Options[i][j]), short_delay);
//     } else if (m == 1) {
//       m = 0;
//       i = 0;
//       l = j;  // 3-10
//       k++;  // 0-4
//       j = k;
//       setTimeout(() => eraseEffect(1, t_Options[1][l]), long_delay);
//     }
//   } else { //  during [1][x]
//     if (m == 0) {
//       m++;
//       if (j == 0 || j == 3 || j == 5 || j == 7) { // if [0][x] was just written
//         typeEffect(1, t_Options[i][j]);
//       } else {
//         setTimeout(() => typeEffect(1, t_Options[i][j]), short_delay);
//       }
//     } else if (m == 1) {
//       m = 0;
//       j++;
//       setTimeout(() => eraseEffect(1, t_Options[i][j - 1]), long_delay);
//     }
//   }
// }

// /*
// Animation structure:
//   [0][0], [1][0], [1][1], [1][2], (erase)
//   [0][1], [1][3], [1][4], (erase)
//   [0][2], [1][5], [1][6], (erase)
//   [0][3], (short break) [1][7], [1][8], [1][9] (erase)

//   [0][0], [1][0], [1][1], [1][2], [1][3], (erase)
//   [0][1], [1][4], [1][5], (erase)
//   [0][2], (short break) [1][6], [1][7], [1][8], (erase)
//   [0][3], [1][9], [1][10], (erase)
//   [0][4] (erase)
// */

// typeWriterEffect();


// typing eff 2

const animateTextTyping = (node) => {
  const text = node.textContent;
  const chars = text.split("");
  node.innerHTML = "";
  node.classList.add("typing");
  i = 0;
  const addNextChar = (i) => {
    let nextChar = chars[i] === "\n" ? "<br>" : chars[i];
    node.innerHTML += "<span>" + nextChar + "</span>";
    if (i < chars.length - 1) {
      setTimeout(function () {
        addNextChar(i + 1);
      }, 50 + Math.random() * 100); // add random delay to make it more human ;)
    } else {
      setTimeout(function () {
        node.classList.remove("typing");
      }, 50 + Math.random() * 150);
    }
  };
  addNextChar(i);
};
let text = document.getElementById("text");
animateTextTyping(text);


// cursor


$(window).mousemove(function (e) {
  $(".ring").css(
    "transform",
    `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
  );
});

// clients

filterSelection('all');

function filterSelection(c) {
  let b; 
  let i;

  b = document.getElementsByClassName('filterDiv');
  if (c == 'all') c = '';
  for (i = 0; i < b.length; i++) {
    RemoveClass(b[i], 'show');
    if (b[i].className.indexOf(c) > -1) AddClass(b[i], 'show');
  }
}

function AddClass(element, name) {
  let i; let arr1; let
    arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ` ${arr2[i]}`;
    }
  }
}

function RemoveClass(element, name) {
  let i; let arr1; let
    arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

// Add active class to the current button (highlight it)
const workFilter = document.getElementById('work-filter');
const btns = workFilter.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
};

// text typing
var i = 0;
// var A = 0;
		var tag = document.getElementById("text");
		var html = document.getElementById("text").innerHTML;
		var attr = tag.setAttribute("data", html);
		var txt = tag.getAttribute("data");
		var speed = 170;

		function typeWriter() {
		  if (i <= txt.length) {
		    document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		    //console.log(document.getElementById("text").innerHTML);
		}

typeWriter();

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});

// canvas
