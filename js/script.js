    /*===== ACTIVE AND REMOVE MENU =====*/
    const navLink = document.querySelectorAll('.navLink');

    function linkAction() {
         /*Active link*/
         navLink.forEach(n => n.classList.remove('active'));
         this.classList.add('active');

    }
    navLink.forEach(n => n.addEventListener('click', linkAction));


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