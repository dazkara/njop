$(document).ready(function() {
    var currentLocation = window.location.href;
    
    $('.nav_link').each(function() {
      if ($(this).attr('href') === currentLocation) {
        $(this).addClass('active');
      }
    });
  
    $('.nav_link').click(function() {
      $('.nav_link').removeClass('active');
      $(this).addClass('active');
    });
  
    // Menambahkan kelas active ke tautan Halaman Utama jika berada di halaman utama
    if (window.location.pathname === '/tentang.html') {
      $('#tentang').addClass('active');
    }
  });
  