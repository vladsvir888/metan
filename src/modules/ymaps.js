/* global ymaps */
export default () => {

    if (typeof ymaps === 'undefined') return;

    ymaps.ready(init);

    function init() {
        const myMap = new ymaps.Map("map", {
            center: [53.902284, 27.561831],
            zoom: 12,
        }); 

        const myGeoObjects = [];
                
        myGeoObjects[0] = new ymaps.Placemark([53.926266, 27.517472], {
            balloonContent: 'проспект Победителей, 65',
            }, {
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/polygon_1.svg',
            iconImageSize: [56, 56],
            iconImageOffset: [-5, -38]
        });

        myGeoObjects[1] = new ymaps.Placemark([53.938071, 27.488142], {
            balloonContent: 'проспект Победителей, 84',
            }, {
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/polygon_2.svg',
            iconImageSize: [56, 56],
            iconImageOffset: [-5, -38]
        });

        myGeoObjects[2] = new ymaps.Placemark([53.932861, 27.456872], {
            balloonContent: 'Тимирязева, 123к2',
            }, {
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/polygon_3.svg',
            iconImageSize: [56, 56],
            iconImageOffset: [-5, -38]
        });

        myGeoObjects[3] = new ymaps.Placemark([53.861872, 27.480399], {
            balloonContent: 'проспект Дзержинского, 104',
            }, {
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/polygon_4.svg',
            iconImageSize: [56, 56],
            iconImageOffset: [-5, -38]
        });

        myGeoObjects[4] = new ymaps.Placemark([53.908851, 27.470185], {
            balloonContent: 'Петра Глебки, 5',
            }, {
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/polygon_5.svg',
            iconImageSize: [56, 56],
            iconImageOffset: [-5, -38]
        });

        myGeoObjects[5] = new ymaps.Placemark([53.905923, 27.439903], {
            balloonContent: 'Притыцкого, 93',
            }, {
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/polygon_6.svg',
            iconImageSize: [56, 56],
            iconImageOffset: [-5, -38]
        });

        myGeoObjects[6] = new ymaps.Placemark([53.883543, 27.448068], {
            balloonContent: 'Шаранговича, 25',
            }, {
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/polygon_7.svg',
            iconImageSize: [56, 56],
            iconImageOffset: [-5, -38]
        });

        myGeoObjects[7] = new ymaps.Placemark([53.926499, 27.440172], {
            balloonContent: 'Налибокская, 1',
            }, {
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/polygon_8.svg',
            iconImageSize: [56, 56],
            iconImageOffset: [-5, -38]
        });

        myGeoObjects[8] = new ymaps.Placemark([53.919124, 27.580058], {
            balloonContent: 'Веры Хоружей, 6Б',
            }, {
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/polygon_9.svg',
            iconImageSize: [56, 56],
            iconImageOffset: [-5, -38]
        });

        const clusterer = new ymaps.Clusterer({ clusterDisableClickZoom: false });

        clusterer.add(myGeoObjects);
        myMap.geoObjects.add(clusterer);
    }
};