$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 100){
            $('.navbar').addClass("sticky")
        }else {$('.navbar').removeClass("sticky")
        }
    })
     new Typed (".typing",{
        strings:["Desenvolvedor","Protetor dos animais","Free-Lancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

    new Typed (".typing-1",{
        strings:["Desenvolvedor","Protetor dos animais","Free-Lancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

    
    
});
