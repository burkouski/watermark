$(function(){
    var counterTimeout;

    // style input
    $('.js-upload').styler();

    // init coordinate counter buttons
    //COUNTERBTN.init();
    // SWITCH.init();
    // init place grid click handler
    INPUTFIELD.init();
    PLACEGRID.init();
    DRAGGABLE.init();
    // jquery upload

    // загрузка основного изображения
    $('#upload-picture').fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('.generator-picture__img').attr('src', '/upload/' + file.name);
            });
        }
    });

    // загрузка вотермарка
    $('#upload-watermark').fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('.generator-picture__watermark').attr('src', '/upload/' + file.name);
            });
        }
    });

    $('.crd-arrow-list__item').on('mousedown', function () {
        var _this = $(this);
         counterTimeout = setInterval(function () {
            // функция в модуле стрелок, она изменяет модель
            COUNTERBTN.counterBtnModelChange(_this);
            // метод модуля инпутов, он сравнивает себя с моделью и обновляется
            INPUTFIELD.setInput();
            DRAGGABLE.set_pos_x();
            // метод модуля уотермарк, он сравнивает себя с остальным
            // ...
            // метод модуля грид, он сравнивается сам с моделью
            PLACEGRID.setStyle();
        }, 50);

        $(this).on('mouseup', function () {
            clearInterval(counterTimeout);
        });
        $(this).on('mouseout', function () {
            clearInterval(counterTimeout);
        });
    });

    // хендлер для переключения режимов мульти/моно
    $('.switch').on('click', function () {
        // изменяем модель
        SWITCH.changeSwitchInModel($(this));
        // изменяет свой вид
        SWITCH.changeStyle($(this));
        // инпут должен обновиться
        INPUTFIELD.setInput();
        // грид должен обновиться
        PLACEGRID.setStyle();
        // watermark должен перестать двигаться и начать увеличивать марджин
        // ...
    });

    $('.generator-position__square').on('click', '.square-td', function () {
        // изменяет модель
        // заставляет обновиться инпут
        // заставляет обновиться уотермарк
    });

    // хендлер для ввода с клавиатуры прямо в инпуты
    $('.crd-window__num').on('change', function () {
      // изменяем модель
      INPUTFIELD.updateModel($(this));
      // обновляем грид
      PLACEGRID.setStyle();
      // обновляем вотермарк
    });
});