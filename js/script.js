$(document).ready(function(){
    $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImage = currentImg.next();

        if(nextImage.length){
            currentImg.removeClass('active');
            nextImage.addClass('active');
        } else {
            currentImg.removeClass('active');
            $('.slider-inner img:first-child').addClass('active');
        }
    });

    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImage = currentImg.prev();

        if(prevImage.length){
            currentImg.removeClass('active');
            prevImage.addClass('active');
        } else {
            currentImg.removeClass('active');
            $('.slider-inner img:last-child').addClass('active');
        }
    });
});

function initMap() {

    var iceland = { lat: 64.9631, lng: -19.0208 };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7, 
      center: iceland,
    });

    var marker = new google.maps.Marker({
      position: iceland,
      map: map,
      title: 'Iceland',
      icon: 'images/mapmarker.png'
    });

    var infowindow = new google.maps.InfoWindow({
        content: 'This is Iceland, enjoy the views!'
      });
      
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

    var reykjavikCoords = [
        { lat: 64.1265, lng: -21.8174 }, 
        { lat: 64.2035, lng: -21.7806 },
        { lat: 64.2035, lng: -21.6934 },
        { lat: 64.1367, lng: -21.6046 },
        { lat: 64.0680, lng: -21.7268 },
        { lat: 64.0532, lng: -21.8195 },
        { lat: 64.0680, lng: -21.9123 },
        { lat: 64.1367, lng: -22.0345 },
        { lat: 64.2035, lng: -21.9457 } 
      ];
      
      var reykjavikPolygon = new google.maps.Polygon({
        paths: reykjavikCoords,
        strokeColor: '#FFA500',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FFA500',
        fillOpacity: 0.35
      });
      
      reykjavikPolygon.setMap(map);
      
      
  }