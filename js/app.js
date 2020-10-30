$(function(){

    const worksSlider = $('[data-slider="slick"]');

    // ============= Filter ================

    let filter = $("[data-filter]"); // Сохраняем переменную по которой филтруем ссылки   
    filter.on("click", function(event) { // При клике на ссылку,
        event.preventDefault();// Отменяем стандартное поведение ссылки
        
        let cat = $(this).data('filter'); // Сохранияем в переменную значение атрибута data-filter

        if (cat == 'all') {// Сравниваем со значением All
            $("[data-cat]").removeClass("hide");// Убираем класс HIDE(d:n)
        } else {// Если значение не All
            $("[data-cat]").each(function() {// То мы сравниваем 

                let workCat = $(this).data('cat');// Значение CAT с котрегориями
                console.log(workCat);
                if (workCat != cat) {
                    $(this).addClass('hide'); // Если совпадают, то добавляем класс HIDE(d:n)
                } else {
                    $(this).removeClass('hide')// Если не совпадает, то убираем HIDE(d:n)
                }
            });
        }
    });





     // ============= Modal ================

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) { //Открывается модальное окно
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function(){
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

        worksSlider.slick('setPosition');
        
    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function(){
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });



    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

// ============= Slider ================ 
//https://kenwheeler.github.io/slick/

//Инициализация слайдера
worksSlider.slick({ //ID нашего элемента слайдера
    infinite: true, //Чтобы слайды бесконечно прокручивались
    slidesToShow: 1, //Кол-во слайдов
    slidesToScroll: 1, //Кол-во скролов
    fade: true,
    arrows: false,
    dots: true
  });

  $(".slickPrev").on("click", function(event) { //При клике на PREV
    event.preventDefault();//отмена страндартного поведения ссылки

    let currentSlider = 
    $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickPrev");//Слайдер переключаем назад
  });
  

  $(".slickNext").on("click", function(event) {//При клике на NEXT
    event.preventDefault();//отмена страндартного поведения ссылки

    let currentSlider = 
    $(this).parents('.modal').find('[data-slider="slick"]');
    
    currentSlider.slick("slickNext");//Слайдер переключаем вперед
  });



// ============= Mobile nav ================


    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show")
    });


});