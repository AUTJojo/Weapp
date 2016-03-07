var opts = {
    lines: 10, // The number of lines to draw
    length: 7, // The length of each line
    width: 4, // The line thickness
    radius: 10, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    color: '#ffffff', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 25, // Top position relative to parent in px
    left: 25 // Left position relative to parent in px
};

var locations = ["New York", "Tirol", "Paris", "San Francisco"];

var gradient_day = ["#FBEB97", "#FAEA97", "#F9EA98", "#F8EA99", "#F7E99A", "#F6E99B", "#F5E99C", "#F4E99D", "#F3E89E", "#F2E89F", "#F1E8A0", "#F0E8A1", "#EFE7A2", "#EEE7A3", "#EDE7A4", "#ECE7A5", "#EBE6A6", "#EAE6A7", "#E9E6A8", "#E8E6A9", "#E7E5AA", "#E6E5AB", "#E5E5AC", "#E4E5AD", "#E3E4AE", "#E2E4AF", "#E1E4B0", "#E0E4B1", "#DFE3B2", "#DEE3B3", "#DDE3B4", "#DCE3B5", "#DBE2B6", "#DAE2B7", "#D9E2B8", "#D9E2B8", "#D8E1B9", "#D7E1BA", "#D6E1BB", "#D5E1BC", "#D4E0BD", "#D3E0BE", "#D2E0BF", "#D1E0C0", "#D0DFC1", "#CFDFC2", "#CEDFC3", "#CDDFC4", "#CCDEC5", "#CBDEC6", "#CADEC7", "#C9DEC8", "#C8DDC9", "#C7DDCA", "#C6DDCB", "#C5DDCC", "#C4DCCD", "#C3DCCE", "#C2DCCF", "#C1DCD0", "#C0DBD1", "#BFDBD2", "#BEDBD3", "#BDDBD4", "#BCDAD5", "#BBDAD6", "#BADAD7", "#B9DAD8", "#B8D9D9", "#B8D9D9", "#B7D9DA", "#B6D9DB", "#B5D8DC", "#B4D8DD", "#B3D8DE", "#B2D8DF", "#B1D7E0", "#B0D7E1", "#AFD7E2", "#AED7E3", "#ADD6E4", "#ACD6E5", "#ABD6E6", "#AAD6E7", "#A9D5E8", "#A8D5E9", "#A7D5EA", "#A6D5EB", "#A5D4EC", "#A4D4ED", "#A3D4EE", "#A2D4EF", "#A1D3F0", "#A0D3F1", "#9FD3F2", "#9ED3F3", "#9DD2F4", "#9CD2F5", "#9BD2F6", "#9AD2F7", "#99D1F8", "#98D1F9", "#97D1FA", "#97D1FB", "#97D0FB", "#97D0FB", "#97D0FB", "#97D0FB", "#97D0FB", "#97D0FB", "#97CFFB", "#97CFFB", "#97CFFB", "#97CFFB", "#97CFFB", "#97CFFB", "#97CFFB", "#97CEFB", "#97CEFB", "#97CEFB", "#97CEFB", "#97CEFB", "#97CEFB", "#97CEFB", "#97CDFB", "#97CDFB", "#97CDFB", "#97CDFB", "#97CDFB", "#97CDFB", "#97CDFB", "#97CCFB", "#97CCFB", "#97CCFB", "#97CCFB", "#97CCFB", "#97CCFB", "#97CCFB", "#97CBFB", "#97CBFB", "#97CBFB", "#97CBFB", "#97CBFB", "#97CBFB", "#97CAFB", "#97CAFB", "#97CAFB", "#97CAFB", "#97CAFB", "#97CAFB", "#97CAFB", "#97C9FB", "#97C9FB", "#97C9FB", "#97C9FB", "#97C9FB", "#97C9FB", "#97C9FB", "#97C8FB", "#97C8FB", "#97C8FB", "#97C8FB", "#97C8FB", "#97C8FB", "#97C8FB", "#97C7FB", "#97C7FB", "#97C7FB", "#97C7FB", "#97C7FB", "#97C7FB", "#97C7FB", "#97C6FB", "#97C6FB", "#97C6FB", "#97C6FB", "#97C6FB", "#97C6FB", "#97C5FB", "#97C5FB", "#97C5FB", "#97C5FB", "#97C5FB", "#97C5FB", "#97C5FB", "#97C4FB", "#97C4FB", "#97C4FB", "#97C4FB", "#97C4FB", "#97C4FB", "#97C4FB", "#97C3FB", "#97C3FB", "#97C3FB", "#97C3FB", "#97C3FB", "#97C3FB", "#97C3FB", "#97C2FB", "#97C2FB", "#97C2FB", "#97C2FB", "#97C2FB", "#97C2FB", "#97C2FB", "#96C1FB", "#96C1FB", "#95C0FB", "#95C0FB", "#94BFFB", "#94BFFB", "#93BEFB", "#93BEFB", "#92BEFB", "#92BDFB", "#91BDFB", "#91BCFB", "#91BCFB", "#90BBFB", "#90BBFB", "#8FBBFB", "#8FBAFB", "#8EBAFB", "#8EB9FB", "#8DB9FB", "#8DB8FB", "#8CB8FB", "#8CB8FB", "#8BB7FB", "#8BB7FB", "#8BB6FB", "#8AB6FB", "#8AB5FB", "#89B5FB", "#89B5FB", "#88B4FB", "#88B4FB", "#87B3FB", "#87B3FB", "#86B2FB", "#86B2FB", "#85B2FB", "#85B1FB", "#85B1FB", "#84B0FB", "#84B0FB", "#83AFFB", "#83AFFB", "#82AFFB", "#82AEFB", "#81AEFB", "#81ADFB", "#80ADFB", "#80ACFB", "#7FACFB", "#7FACFB", "#7FABFB", "#7EABFB", "#7EAAFB", "#7DAAFB", "#7DA9FB", "#7CA9FB", "#7CA8FB", "#7BA8FB", "#7BA8FB", "#7AA7FB", "#7AA7FB", "#79A6FB", "#79A6FB", "#79A5FB", "#78A5FB", "#78A5FB", "#77A4FB", "#77A4FB", "#76A3FB", "#76A3FB", "#75A2FB", "#75A2FB", "#74A2FB", "#74A1FB", "#73A1FB", "#73A0FB", "#73A0FB", "#729FFB", "#729FFB", "#719FFB", "#719EFB", "#709EFB", "#709DFB", "#6F9DFB", "#6F9CFB", "#6E9CFB", "#6E9CFB", "#6D9BFB", "#6D9BFB", "#6D9AFB", "#6C9AFB", "#6C99FB", "#6B99FB", "#6B99FB", "#6A98FB", "#6A98FB", "#6997FB", "#6997FB", "#6896FB", "#6896FB", "#6896FB", "#6895FA", "#6995FA", "#6995FA", "#6A95FA", "#6A95F9", "#6B95F9", "#6B95F9", "#6C95F9", "#6C95F8", "#6D95F8", "#6D95F8", "#6E95F8", "#6E95F7", "#6F95F7", "#6F95F7", "#7095F7", "#7095F6", "#7194F6", "#7194F6", "#7294F6", "#7294F5", "#7394F5", "#7394F5", "#7494F5", "#7494F4", "#7594F4", "#7594F4", "#7694F4", "#7694F3", "#7794F3", "#7794F3", "#7894F3", "#7894F2", "#7994F2", "#7993F2", "#7A93F2", "#7A93F1", "#7B93F1", "#7B93F1", "#7C93F1", "#7C93F0", "#7D93F0", "#7D93F0", "#7E93F0", "#7E93EF", "#7F93EF", "#7F93EF", "#8093EF", "#8093EE", "#8193EE", "#8293EE", "#8292EE", "#8392EE", "#8392ED", "#8492ED", "#8492ED", "#8592ED", "#8592EC", "#8692EC", "#8692EC", "#8792EC", "#8792EB", "#8892EB", "#8892EB", "#8992EB", "#8992EA", "#8A92EA", "#8A92EA", "#8B91EA", "#8B91E9", "#8C91E9", "#8C91E9", "#8D91E9", "#8D91E8", "#8E91E8", "#8E91E8", "#8F91E8", "#8F91E7", "#9091E7", "#9091E7", "#9191E7", "#9191E6", "#9291E6", "#9291E6", "#9391E6", "#9390E5", "#9490E5", "#9490E5", "#9590E5", "#9590E4", "#9690E4", "#9690E4", "#9790E4", "#9790E3", "#9890E3", "#9890E3", "#9990E3", "#9990E2", "#9A90E2", "#9A90E2", "#9B90E2", "#9C90E2", "#9C8FE1", "#9D8FE0", "#9E8FDF", "#9E8FDF", "#9F8FDE", "#A08FDD", "#A08FDC", "#A18FDC", "#A28FDB", "#A28FDA", "#A38FD9", "#A48FD9", "#A48FD8", "#A58FD7", "#A68FD6", "#A68FD6", "#A78FD5", "#A88FD4", "#A98FD4", "#A98FD3", "#AA8FD2", "#AB8FD1", "#AB8FD1", "#AC8FD0", "#AD8FCF", "#AD8FCE", "#AE8FCE", "#AF8FCD", "#AF8FCC", "#B08FCB", "#B18FCB", "#B18FCA", "#B28FC9", "#B38FC9", "#B48FC8", "#B48FC7", "#B58FC6", "#B68FC6", "#B68FC5", "#B78FC4", "#B88FC3", "#B88FC3", "#B98FC2", "#BA8FC1", "#BA8FC0", "#BB8FC0", "#BC8FBF", "#BC8FBE", "#BD8FBD", "#BE8FBD", "#BF8FBC", "#BF8FBB", "#C08FBB", "#C18FBA", "#C18FB9", "#C28FB8", "#C38FB8", "#C38FB7", "#C48FB6", "#C58FB5", "#C58FB5", "#C68FB4", "#C78FB3", "#C78FB2", "#C88FB2", "#C98FB1", "#C98FB0", "#CA8FB0", "#CB8FAF", "#CC8FAE", "#CC8FAD", "#CD8FAD", "#CE8FAC", "#CE8FAB", "#CF8FAA", "#D08FAA", "#D08FA9", "#D18FA8", "#D28FA7", "#D28FA7", "#D38FA6", "#D48FA5", "#D48FA4", "#D58FA4", "#D68FA3", "#D78FA2", "#D78FA2", "#D88FA1", "#D98FA0", "#D98F9F", "#DA8F9F", "#DB8F9E", "#DB8F9D", "#DC8F9C", "#DD8F9C", "#DD8F9B", "#DE8F9A", "#DF8F99", "#DF8F99", "#E08F98", "#E18F97", "#E28F97"];
var gradient_night = ["#E28F97", "#DE8D96", "#DB8B95", "#D88994", "#D58793", "#D28692", "#CE8491", "#CB8290", "#C8808F", "#C57F8E", "#C27D8D", "#BF7B8C", "#BB798B", "#B8788A", "#B57689", "#B27488", "#AF7287", "#AC7186", "#A86F85", "#A56D85", "#A26B84", "#9F6A83", "#9C6882", "#986681", "#956480", "#92637F", "#8F617E", "#8C5F7D", "#895D7C", "#855C7B", "#825A7A", "#7F5879", "#7C5678", "#795577", "#765376", "#725175", "#6F4F74", "#6C4E73", "#694C73", "#664A72", "#624871", "#5F4770", "#5C456F", "#59436E", "#56416D", "#53406C", "#4F3E6B", "#4C3C6A", "#493A69", "#463968", "#433767", "#403566", "#3C3365", "#393264", "#363063", "#332E62", "#302C61", "#2D2B61", "#2C2B60", "#2C2B60", "#2B2B60", "#2B2B60", "#2A2B60", "#2A2B60", "#2A2C60", "#292C60", "#292C60", "#282C60", "#282C60", "#282C5F", "#272D5F", "#272D5F", "#262D5F", "#262D5F", "#262D5F", "#252D5F", "#252E5F", "#242E5F", "#242E5F", "#242E5F", "#232E5E", "#232E5E", "#222E5E", "#222F5E", "#222F5E", "#212F5E", "#212F5E", "#202F5E", "#202F5E", "#20305E", "#1F305E", "#1F305E", "#1E305D", "#1E305D", "#1E305D", "#1D315D", "#1D315D", "#1C315D", "#1C315D", "#1C315D", "#1B315D", "#1B315D", "#1A325D", "#1A325C", "#1A325C", "#19325C", "#19325C", "#18325C", "#18335C", "#18335C", "#17335C", "#17335C", "#16335C", "#16335C", "#16345C", "#15335B", "#15325A", "#153259", "#153159", "#143158", "#143057", "#143056", "#142F56", "#132F55", "#132E54", "#132E54", "#132D53", "#122C52", "#122C51", "#122B51", "#122B50", "#112A4F", "#112A4F", "#11294E", "#11294D", "#10284C", "#10284C", "#10274B", "#10264A", "#0F264A", "#0F2549", "#0F2548", "#0F2447", "#0E2447", "#0E2346", "#0E2345", "#0E2244", "#0D2244", "#0D2143", "#0D2042", "#0D2042", "#0C1F41", "#0C1F40", "#0C1E3F", "#0C1E3F", "#0B1D3E", "#0B1D3D", "#0B1C3D", "#0B1C3C", "#0A1B3B", "#0A1A3A", "#0A1A3A", "#0A1939", "#091938", "#091838", "#091837", "#091736", "#081735", "#081635", "#081634", "#081533", "#081533", "#081432", "#081432", "#081432", "#081331", "#081331", "#081331", "#081331", "#081230", "#081230", "#081230", "#081130", "#08112F", "#08112F", "#08112F", "#08102F", "#08102E", "#08102E", "#080F2E", "#080F2E", "#080F2D", "#080F2D", "#080E2D", "#080E2C", "#080E2C", "#080D2C", "#080D2C", "#080D2B", "#080D2B", "#080C2B", "#080C2B", "#080C2A", "#080C2A", "#080B2A", "#080B2A", "#080B29", "#080A29", "#080A29", "#080A29", "#080A28", "#080928", "#080928", "#080927", "#080827", "#080827", "#080827", "#080826", "#080726", "#080726", "#080726", "#080625", "#080625", "#080625", "#080625", "#080524", "#080524", "#080524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#090524", "#080524", "#080524", "#080524", "#080625", "#080625", "#080625", "#080625", "#080726", "#080726", "#080726", "#080826", "#080827", "#080827", "#080827", "#080927", "#080928", "#080928", "#080A28", "#080A29", "#080A29", "#080A29", "#080B29", "#080B2A", "#080B2A", "#080C2A", "#080C2A", "#080C2B", "#080C2B", "#080D2B", "#080D2B", "#080D2C", "#080D2C", "#080E2C", "#080E2C", "#080E2D", "#080F2D", "#080F2D", "#080F2E", "#080F2E", "#08102E", "#08102E", "#08102F", "#08112F", "#08112F", "#08112F", "#081130", "#081230", "#081230", "#081230", "#081331", "#081331", "#081331", "#081331", "#081432", "#081432", "#081432", "#081533", "#081533", "#081634", "#081635", "#081735", "#091736", "#091837", "#091838", "#091938", "#0A1939", "#0A1A3A", "#0A1A3A", "#0A1B3B", "#0B1C3C", "#0B1C3D", "#0B1D3D", "#0B1D3E", "#0C1E3F", "#0C1E3F", "#0C1F40", "#0C1F41", "#0D2042", "#0D2042", "#0D2143", "#0D2244", "#0E2244", "#0E2345", "#0E2346", "#0E2447", "#0F2447", "#0F2548", "#0F2549", "#0F264A", "#10264A", "#10274B", "#10284C", "#10284C", "#11294D", "#11294E", "#112A4F", "#112A4F", "#122B50", "#122B51", "#122C51", "#122C52", "#132D53", "#132E54", "#132E54", "#132F55", "#142F56", "#143056", "#143057", "#143158", "#153159", "#153259", "#15325A", "#15335B", "#16345C", "#16335C", "#16335C", "#17335C", "#17335C", "#18335C", "#18335C", "#18325C", "#19325C", "#19325C", "#1A325C", "#1A325C", "#1A325D", "#1B315D", "#1B315D", "#1C315D", "#1C315D", "#1C315D", "#1D315D", "#1D305D", "#1E305D", "#1E305D", "#1F305D", "#1F305E", "#1F305E", "#202F5E", "#202F5E", "#212F5E", "#212F5E", "#212F5E", "#222F5E", "#222F5E", "#232E5E", "#232E5E", "#232E5F", "#242E5F", "#242E5F", "#252E5F", "#252D5F", "#262D5F", "#262D5F", "#262D5F", "#272D5F", "#272D5F", "#282C5F", "#282C60", "#282C60", "#292C60", "#292C60", "#2A2C60", "#2A2B60", "#2A2B60", "#2B2B60", "#2B2B60", "#2C2B60", "#2C2B60", "#2D2B61", "#302E61", "#343162", "#383563", "#3B3864", "#3F3C65", "#433F66", "#464367", "#4A4668", "#4E4969", "#514D6A", "#55506B", "#59546C", "#5C576D", "#605B6E", "#645E6F", "#676170", "#6B6571", "#6F6872", "#726C73", "#766F74", "#7A7375", "#7D7676", "#817977", "#857D78", "#888079", "#8C847A", "#90877B", "#948B7C", "#978E7C", "#9B917D", "#9F957E", "#A2987F", "#A69C80", "#AA9F81", "#ADA382", "#B1A683", "#B5A984", "#B8AD85", "#BCB086", "#C0B487", "#C3B788", "#C7BB89", "#CBBE8A", "#CEC18B", "#D2C58C", "#D6C88D", "#D9CC8E", "#DDCF8F", "#E1D390", "#E4D691", "#E8D992", "#ECDD93", "#EFE094", "#F3E495", "#F7E796", "#FBEB97"];
var target = document.getElementById('foo');
var spinner = new Spinner(opts).spin(target);

jQuery(document).ready(function($) {
  $(".search").focus(function(){
     $(this).parent().parent().addClass("border");
  });

  $(".search").focusout(function(){
     $(this).parent().parent().removeClass("border");
  });

  $('.search').keypress(function (e) {
    if (e.which == 13) {
      e.preventDefault();
    }
  });
});

Vue.transition('weather', {
  enterClass: 'flipInX',
});

Vue.transition('statistic', {
  enterClass: 'bounceInUp',
});

new Vue({
  el: '#app',
  data: {
    lng: null,
    lat: null,

    ready: false,
    secondPage: false,

    location: {
      continent: 'Continent',
      state: 'State',
      region: 'Region',
      city: 'City',
      img: 'default'
    },

    time: null,

    dayOrNight: 'day',

    date: {
      weekday: 'Monday',
      month: 'Jan',
      day: '1',
      time: '13:37',
      sunset: null,
      sunrise: null,
      diff: null,
      isDay: true,
    },

    weather: {
      current: 0,
      min: 1,
      max: 4,
      clouds: 0,
      thunderstorm: false,
      drizzle: false,
      rain: false,
      heavy_rain: false,
      snow: false,
      id: -1,
      img: 'sun',

    }

  },

  methods: {

    getLatLng: function () {

      navigator.geolocation.getCurrentPosition(
        function(position){
          this.ready = false;
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;

          this.getLocation();
          this.getTime();
          this.getTemp();
        }.bind(this),
        function(){
          // wenn Positionsbestimmung einen Fehler erzeugt hat (z.B. weil Sie vom User ablehnt wurde).
          alert('Die Position konnte nicht ermittelt werden, bitte überprüfen Sie Ihre Brwosereinstellungen!');
        }
      );

    },

    getLocation: function () {
      $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.lat + ',' + this.lng, function(results) {

        var arrAddress = results.results[0].address_components;
        var itemRegion='';
        var itemLocality='';
        var itemCountry='';


        // iterate through address_component array
        $.each(arrAddress, function (i, address_component) {
            if (address_component.types[0] == "locality"){
                itemLocality = address_component.long_name;
            }

            if (address_component.types[0] == "country"){
                itemCountry = address_component.long_name;
            }

            if (address_component.types[0] == "administrative_area_level_1"){
                itemRegion = address_component.long_name;
            }
        });

        this.location.city = itemLocality;
        this.location.region = itemRegion;
        this.location.state = itemCountry;

        if(!itemLocality){
          this.location.city = itemRegion;
        }


        this.setLocationImg();

			}.bind(this));
    },

    getTime: function () {

      var ArrayTage = new Array("Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag");
      var ArrayMonate = new Array("JAN","FEB","MAR","APR","MAI","JUN","JUL", "AUG", "SEP", "OKT", "NOV", "DEZ");

      $.getJSON('http://api.geonames.org/timezoneJSON?lat=' + this.lat + '1&lng=' + this.lng + '&username=autjojo', function(results) {
        var str = results.time;
        var split1 = str.split(" ");
        var split2 = split1[0].split('-');

        var monat = split2[1].replace(/^(0+)/g, '') -1;
        var tag = split2[2].replace(/^(0+)/g, '');

        var date = new Date();
        date.setDate(tag);

        var wochentag = date.getDay();

        var sunsetUS = results.sunset.split(' ');
        var sunriseUS = results.sunrise.split(' ');
        var sunset = sunsetUS[1];
        var sunrise = sunriseUS[1];

        this.date.time = split1[1];
        this.date.month = ArrayMonate[monat];
        this.date.day = tag;
        this.date.weekday = ArrayTage[wochentag];

        this.date.sunset = sunset;
        this.date.sunrise = sunrise;

        this.setDiff();

      }.bind(this));
    },

    getTemp: function () {

      $.ajax({
        type: "GET",
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + this.lat + '&lon=' + this.lng + '&mode=xml&APPID=a70390a56e504a6e42fbec688616f573',
        dataType: "xml",
        success: function(xml) {
          this.weather.current = Math.round($(xml).find('temperature').attr('value')-273,15);
          this.weather.min = Math.round($(xml).find('temperature').attr('min')-273,15);
          this.weather.max = Math.round($(xml).find('temperature').attr('max')-273,15);

          this.weather.clouds = $(xml).find('clouds').attr('value');
          var id = $(xml).find('weather').attr('number');
          this.weather.id = id;
          this.weather.img = "";

          this.reset();

          if(id >= 200 && id <= 300){
            this.weather.thunderstorm = true;
            this.weather.img = "light_thunderstorm";

            if(id > 212){
              this.weather.img = "heavy_thunderstorm";
            }
          }

          if(id >= 300 && id <= 400){
            this.weather.drizzle = true;
            this.weather.img = "light_drizzle";

            if(id >= 312){
              this.weather.img = "heavy_drizzle";
            }
          }

          if(id >= 500 && id <= 600){
            this.weather.rain = true;
            this.weather.img = "rain";

            if(id >= 302){
              this.weather.heavy_rain = true;
              this.weather.img = "heavy_rain";
            }
          }

          if(id >= 600 && id <= 700){
            this.weather.snow = true;
            this.weather.img = "snow";
          }

          if(id >= 800 && id <= 804){
            this.weather.img = "few_clouds";
            if(id >= 803){
              this.weather.img = "clouds";
              if(id == 804){
                this.weather.img = "many_clouds";
              }
            }
          }

          if(id == 800){
            this.weather.img = "sun";
          }

          this.ready = true;

          this.printData();

        }.bind(this)
      });
    },

    printData: function (){
      console.log("Current Temp: " + this.weather.current);
      console.log("Min Temp: " + this.weather.min);
      console.log("Max Temp: " + this.weather.max);
      console.log("ID: " + this.weather.id);
      console.log("Regen: " + this.weather.rain);
      console.log("Snow: " + this.weather.snow);
      console.log("Thunderstorm: " + this.weather.thunderstorm);
      console.log("Wolken: " + this.weather.clouds);
      console.log("Bild: " + this.weather.img);


      console.log("// - - - - - - - - - - - - - - - //");
      console.log("Weekday: " + this.date.weekday);
      console.log("Month: " + this.date.month);
      console.log("Time: " + this.date.time);
      console.log("Sonnenaufgang: " + this.date.sunrise);
      console.log("Sonnenuntergang: " + this.date.sunset);

      console.log("// - - - - - - - location - - - - - - - - //");
      console.log("City: " + this.location.city);
      console.log("Region: " + this.location.region);
      console.log("State: " + this.location.state);
      console.log("IMG: " + this.location.img);
    },

    searchLocation: function (){
      var searchInput = $(".search").val();

      this.ready = false;

      $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + searchInput, function(results) {
        this.lat = results.results[0].geometry.location.lat;
        this.lng = results.results[0].geometry.location.lng;

        this.getLocation();
        this.getTime();
        this.getTemp();
			}.bind(this));
    },

    reset: function () {
      this.weather.clouds = 0;
      this.weather.thunderstorm = false;
      this.weather.drizzle = false;
      this.weather.rain = false;
      this.weather.heavy_rain = false;
      this.weather.snow = false;
      this.weather.id = -1;
      this.weather.img = 'sun';
    },

    setDiff: function () {
      var sunriseUS = this.date.sunrise.split(':');
      var sunsetUS = this.date.sunset.split(':');

      var sunrise = sunriseUS[0] + "" + sunriseUS[1];
      var sunset = sunsetUS[0] + "" + sunsetUS[1];

      var diffUS = ((sunset - sunrise)/100) + "";

      var diffS = diffUS.split('.');

      var first = parseInt(diffS[0]);
      var sec = parseInt(diffS[1])*1.6;

      var diff = (first + (sec/100));

      this.date.diff = diff;

      var timeUS = this.date.time.split(':');

      var timeS = timeUS[0] + "" + timeUS[1];

      var time = parseInt(timeS);

      time = time/100 + "";

      var timeA = time.split('.');

      var t_first = parseInt(timeA[0]);
      var t_sec = parseInt(timeA[1])*1.6;

      time = (t_first + (t_sec/100));
      sunset = parseInt(sunset)/100;
      sunrise = parseInt(sunrise)/100;

      console.log(time);

      if(time >= sunrise && time <=sunset){
        this.date.isDay = true;
      } else {
        this.date.isDay = false;
      }

      var isDay = this.date.isDay;

      if(isDay){
        this.dayOrNight = 'day';

        timeFromSunrise = time - sunrise;
        var percentage = (timeFromSunrise/diff)*100;
        var colorToChoose = parseInt((512/100)*percentage);
        var color = gradient_day[colorToChoose];

        $("#weather").css("background-color", color);
        $(".color").css("color", color);
        $(".bold").css("color", color);
        $(".border").css("border-color", color);
        $(".location").css("color", color);
        $(".now").css("color", color);

      } else {
        this.dayOrNight = 'night';

        if(time > sunset){
          timeFromSunset = time - sunset;
        } else {
          timeFromSunset = time + 24.0 - sunset;
        }

        var percentage = (timeFromSunset/(24.0 - diff))*100;
        var colorToChoose = parseInt((512/100)*percentage);
        var color = gradient_night[colorToChoose];

        $("#weather").css("background-color", color);
        $(".color").css("color", color);
        $(".bold").css("color", color);
        $(".border").css("border-color", color);
        $(".location").css("color", color);
        $(".now").css("color", color);

      }

    },

    setLocationImg: function () {
      if($.inArray(this.location.region, locations) !== -1 ){
        this.location.img = this.location.region;
      } else if($.inArray(this.location.state, locations) !== -1){
        this.location.img = this.location.state;
      }else if($.inArray(this.location.city, locations) !== -1){
        this.location.img = this.location.city;
      } else {
        var random = Math.floor((Math.random() * 5) + 1);
        this.location.img = 'default'+random;
      }
    },

  },

	ready: function (){
    var spinner = new Spinner(opts).spin(target);
    this.getLatLng();

	},

})


