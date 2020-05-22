// var i = 0;
// (function () {
//     if (i == 0) {
//         i = 1;
//         var elem = document.getElementById("mySkill");

//         var width = 10;
//         var id = setInterval(frame, 10);
//         var attribute = elem.getAttribute("data-target");
//         function frame() {
//             if (width >= attribute) {
//                 clearInterval(id);
//                 i = 0;
//             } else {
//                 width++;
//                 elem.style.width = width + "%";
//                 elem.innerHTML = width + "%";
//             }
//         }
//     }
// })();



// second

// var lang = {
//         html: "92%",
//         css: "80%",
//         javascript: "70%",
//         ps: "75%",
//     },
//     multiply = 4;
// $.each(lang, function (a, b) {
//     setTimeout(function () {
//         $("#" + a + "-pourcent").html(b)
//     }, 700 * multiply);

//     multiply++
// });