  
//   preLoder 
  
  function preLoder() {
        var preloder = document.getElementById('preloder');
        let videos = document.getElementById('videos');
        videos.style.display = 'block';
        preloder.style.display = 'none';
   }




   /*===== ACTIVE AND REMOVE MENU =====*/
   const navLink = document.querySelectorAll('.navLink');

   function linkAction() {
        /*Active link*/
        navLink.forEach(n => n.classList.remove('active'));
        this.classList.add('active');

   }
   navLink.forEach(n => n.addEventListener('click', linkAction));



   //     Dropdown Active and Remove 

   var dropdown_btn = document.getElementById('dropdown_btn').addEventListener('click', dropDown);

   function dropDown() {
        var dropdown_item = document.getElementById('dropdown_item');
        if (dropdown_item.style.display === 'block') {
             dropdown_item.style.display = 'none';
        } else {
             dropdown_item.style.display = 'block';
        }
   }




   // show save videos

   var show_more = document.getElementById('show_more_save')
   show_more.addEventListener('click', showHide);
   var show_more_sv = document.getElementById('show_more_sv')
   var show_less_sv = document.getElementById('show_less_sv')

   function showHide() {
        var show = document.getElementById('show_save');
        var show_icon = document.getElementById('show_icon_save');
        if (show.style.display === 'block') {
             show.style.display = 'none';
             show_icon.style.transform = 'rotate(0deg)'
             show_more_sv.style.display = 'block';
             show_less_sv.style.display = 'none';
        } else {
             show.style.display = 'block';
             show_icon.style.transform = 'rotate(180deg)'
             show_more_sv.style.display = 'none';
             show_less_sv.style.display = 'block';
        }
   }


   // show more subscriptions  handel 
   var show_more_btn = document.getElementById('show_more_btn').addEventListener('click', showMoresub);
   var show_more_sub = document.querySelectorAll('#show_more_sub');
   for (var i = 5; i < show_more_sub.length; i++) {
        show_more_sub[i].style.display = 'none';
   }

   function showMoresub() {
        var show_more_sub_icon = document.getElementById('show_more_sub_icon')
        var show_less = document.getElementById('show_less_su');
        var show_more = document.getElementById('show_more_su');
        for (var i = 5; i < show_more_sub.length; i++) {
             if (show_more_sub[i].style.display === 'none') {
                  show_more_sub[i].style.display = 'block';
                  show_more_sub_icon.style.transform = 'rotate(180deg)'
                  show_less.style.display = 'block';
                  show_more.style.display = 'none';
             } else {
                  show_more_sub[i].style.display = 'none';
                  show_more_sub_icon.style.transform = 'rotate(0deg)'
                  show_less.style.display = 'none';
                  show_more.style.display = 'block';
             }

        }
   }

   for (var i = 0; i < show_more_sub.length; i++) {
        var number = document.getElementById('show_more_su');
        var num = show_more_sub.length.toString();
        number.innerHTML = 'Show ' + num + ' more';
   }








   //    manu responsive 

   let manuBtn = document.getElementById('manu_btn').addEventListener('click', manuBtnfun);

   function manuBtnfun() {
        let listAll = document.getElementById('nav').querySelectorAll('li');
        let a_padding = document.getElementById('nav').querySelectorAll('a');
        let span = document.getElementById('nav').querySelectorAll('#span');
        let hr = document.getElementById('nav').querySelectorAll('hr');
        let nav_width = document.getElementById('nav');
        var show_more_sub1 = document.querySelectorAll('#show_more_sub');
        let videos = document.getElementById('videos');
        let video_single_box = document.querySelectorAll('#video_single_box');

        for (var i = 4; i < listAll.length; i++) {
             if (listAll[i].style.display === 'none') {
                  listAll[i].style.display = 'block';
                  nav_width.style.width = '250px';
                  for (var x = 0; x < hr.length; x++) {
                       hr[x].style.display = 'block';
                  }
                  for (var ii = 5; ii < show_more_sub.length; ii++) {
                       show_more_sub1[ii].style.display = 'none';
                  }
                  for (var iii = 0; iii < 5; iii++) {
                       a_padding[iii].style.padding = '1vh 2vh';
                  }
                  for (var iiii = 0; iiii < span.length; iiii++) {
                       span[iiii].style.display = 'none';
                  }
                  videos.style.marginLeft = '250px';

                  for (var iiiii = 0; iiiii < video_single_box.length; iiiii++) {
                       video_single_box[iiiii].style.flex = '22%';
                  }
             } else {
                  listAll[i].style.display = 'none';
                  nav_width.style.width = '70px';
                  for (var x = 0; x < hr.length; x++) {
                       hr[x].style.display = 'none';
                  }
                  for (var ii = 5; ii < show_more_sub.length; ii++) {
                       show_more_sub1[ii].style.display = 'none';
                  }
                  for (var iii = 0; iii < 5; iii++) {
                       a_padding[iii].style.padding = '1vh 2vh';
                  }
                  for (var iiii = 0; iiii < span.length; iiii++) {
                       span[iiii].style.display = 'block';
                  }
                  videos.style.marginLeft = '70px';

                  for (var iiiii = 0; iiiii < video_single_box.length; iiiii++) {
                       video_single_box[iiiii].style.flex = '18%';
                  }
             }
        }
   }