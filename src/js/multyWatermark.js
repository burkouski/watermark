var TILE = (function () {
    // инициализируем глобальные переменные
    var tile = $('.generator-picture__tile'),
        watermark,
        image,
        watermarkWidth = 0,
        watermarkHeight,
        watermarkSrc,
        imageWidth = 0,
        imageHeight;

    return {
        initImage: function () {
            // получаем основную картинку и её размеры
            image = $('.generator-picture__img'),
            imageWidth = image.width();
            imageHeight = image.height();
            console.log(imageWidth)
            TILE.initTile()
            //itemInRow = Math.floor(imageWidth / watermarkWidth) + 1,
            //rows = Math.floor(imageHeight / watermarkHeight) + 1;


        },
        initWatermark: function() {
            // получаем марку и её размеры
            watermark = $('.generator-picture__watermark'),
            watermarkWidth = watermark.width();
            watermarkHeight = watermark.height();
            watermarkSrc = watermark.attr('src');
            console.log(watermarkHeight, watermarkWidth,watermarkSrc );
            TILE.initTile()
        },
        initTile: function() {
            // удаляем предыдущий мост и создаем новую сетку 'замостить'
            $('.generator-picture__tile-row').remove()
            $('.tile__image').remove();

            if (watermarkWidth > 0 & imageWidth > 0) {
                console.log(watermarkWidth, imageWidth)
                var itemInRow = Math.floor(imageWidth / watermarkWidth) + 1,
                    rows = Math.floor(imageHeight / watermarkHeight) + 1;
                //alert(watermark.width(),image.width())
                for (i = 0; i < rows; i++) {
                    //alert(true)
                    tile.append("<div class='generator-picture__tile-row'>");
                }
                ;
                for (i = 0; i < itemInRow; i++) {
                    //alert(false)
                    $('.generator-picture__tile-row').append("<img src='" + watermarkSrc + "' class='tile__image'>");
                }
                ;
            }
        },
        // скрываем/показываем сетку замости
        showHide: function (elem) {
            var _this = elem;
            if (_this.hasClass('switch__multi')) {
                watermark.hide();
                tile.show();

            }
            else {
                watermark.show();
                tile.hide();
            }
        },
        // изменяем прозрачность
        changeOpacity: function () {
            tile.css('opacity', model.alpha);
        },
        // изменяем вертикальный отступ
        changeVerticalGutter: function () {
            var tileRow = $('.generator-picture__tile-row');
            tileRow.css({marginBottom: model.margins.x});
        },
        // изменяем горизонтальный отстпуп
        changeHorizontalGutter: function () {
            var tileImage = $('.tile__image');
            tileImage.css({marginRight: model.margins.y});
        }
    }
})();