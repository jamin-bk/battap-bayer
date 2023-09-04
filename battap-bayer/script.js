// document.querySelectorAll('.course-block-div h1').forEach((el) => {
//     el.addEventListener('click', () => {
//         let content = el.nextElementSibling;
//         console.log(content);
//         if(content.style.maxHeight){
//             document.querySelectorAll('.course-block-div-list').forEach((el => el.style.maxHeight = null));
//         }else{
//             document.querySelectorAll('.course-block-div-list').forEach((el => el.style.maxHeight = null));
//             content.style.maxHeight = content.scrollHeight + 'px';
//             // document.querySelectorAll('.course-block-div');
//             // content.style.borderRadius = 10 + 'px';
//         }
//     })
// })
function CheckedFun(){
    let BorderStyle1 = document.getElementById("vis-panel");
    let BorderStyle2 = document.getElementById("vis-panel1");
    let BorderStyle3 = document.getElementById("vis-panel2");
    let BorderStyle4 = document.getElementById("vis-panel3");
    let CourseBlockDiv1 = document.getElementById('course-block-div1');
    let CourseBlockDiv2 = document.getElementById('course-block-div2');
    let CourseBlockDiv3 = document.getElementById('course-block-div3');
    let CourseBlockDiv4 = document.getElementById('course-block-div4');
    const MediaFloat = window.matchMedia('(max-width:460px)');
    if(MediaFloat.matches){
        if(BorderStyle1.checked){
            CourseBlockDiv1.style.borderRadius =25 + 'px';
            CourseBlockDiv1.style.WebkitBorderRadius = 25 + 'px';
        }else{
            CourseBlockDiv1.style.borderRadius = 50 + 'px';
        }
        if(BorderStyle2.checked){
            CourseBlockDiv2.style.borderRadius =25 + 'px';
            CourseBlockDiv2.style.WebkitBorderRadius = 25 + 'px';
        }else{
            CourseBlockDiv2.style.borderRadius = 50 + 'px';
        }
        if(BorderStyle3.checked){
            CourseBlockDiv3.style.borderRadius = '25px';
            CourseBlockDiv3.style.WebkitBorderRadius = '25px';
        }else{
            CourseBlockDiv3.style.borderRadius = '50px';
        }
        if(BorderStyle4.checked){
            CourseBlockDiv4.style.borderRadius = '25px';
            CourseBlockDiv4.style.WebkitBorderRadius = '25px';
        }else{
            CourseBlockDiv4.style.borderRadius = '50px';
        }
    }else{
        document.querySelectorAll('.course-block-div').style.borderRadius = '50px';
    }
    
}