$('a[href^="#"]').click(function(){ 
    let scroll = $(this).attr('href');  
    $('html, body').animate({           
    scrollTop:  $(scroll).offset().top - 50  
    }, 1000);                            
});
