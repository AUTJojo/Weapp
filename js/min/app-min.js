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

var target = document.getElementById('foo');
var spinner = new Spinner(opts).spin(target);

new Vue({
  el: '#app',
  data: {
    lng: null,
    lat: null,

    ready: false,

    location: {
      continent: 'Continent',
      state: 'State',
      region: 'Region',
      city: 'City',
    },

    time: null,

    date: {
      weekday: 'Mondey',
      month: 'Jan',
      day: '1',
      time: '13:37',
    },

    text: {
      pre: '',
      color: '',
      post: '',
    },

    weather: {
      current: 0,
      min: 1,
      max: 4,
      rain: false,
      clouds: 0,
    }

  },

  methods: {
    getText: function () {
      var temp = this.weather.current;

      var rain = this.weather.rain;

      var ret = {
        pre: '',
        color: '',
        post: '',
      }

      if(!rain){
        switch (true) {
          case temp <= 0:
            var rand = Math.floor((Math.random() * 4) + 1);

            switch (true) {
              case rand == 1:
                ret.pre = "Damn its so fucking ";
                ret.color = "cold.";
                break;
              case rand == 2:
                ret.pre = "Winter is ";
                ret.color = "coming.";
                break;
              case rand == 3:
                ret.pre = "Freezing ";
                ret.color = "cold  ";
                ret.post = "like a fucking fridge.";
                break;
              case rand == 4:
                ret.pre = "Fucking ";
                ret.color = "ice age. ";
                ret.post = "";
                break;
              default:
                ret.pre ="Error";
                break;
            }
            break;
          case temp > 0 && temp < 10:
            var rand = Math.floor((Math.random() * 4) + 1);

            switch (true) {
              case rand == 1:
                ret.pre = "Colder than a ";
                ret.color = "penguins ";
                ret.post = "chuff";
                break;
              case rand == 2:
                ret.pre = "Meeehh. . . Just stay in ";
                ret.color = "bed.";
                ret.post = "";
                break;
              case rand == 3:
                ret.pre = "Global";
                ret.color = " warming ";
                ret.post = "my ass.";
                break;
              case rand == 4:
                ret.pre = "Go home ";
                ret.color = "winter.";
                ret.post = "";
                break;
              default:
                ret.pre ="Error";
                ret.post = "";
                break;
            }

            break;
          case temp >= 10 && temp < 15:
            var rand = Math.floor((Math.random() * 4) + 1);

            switch (true) {
              case rand == 1:
                ret.pre = "Stil damn ";
                ret.color = "cold ";
                ret.post = "outside.";
                break;
              case rand == 2:
                ret.pre = "I'd go in ";
                ret.color = "shortys ";
                ret.post = "already. ";
                break;
              case rand == 3:
                ret.pre = "To warm for snow, to cold for fucking ";
                ret.color = "anything else.";
                break;
              case rand == 4:
                ret.pre = "Do not go out with your ";
                ret.color = "converse. ";
                break;
              default:
                ret.pre ="Error";
                break;
            }
            break;
          case temp >= 15 && temp < 20:
            var rand = Math.floor((Math.random() * 5) + 1);

            switch (true) {
              case rand == 1:
                ret.pre = "Hm, not that cold ";
                ret.color = "anymore. ";
                break;
              case rand == 2:
                ret.pre = "No, its too damn cold for  ";
                ret.color = "swimming. ";
                break;
              case rand == 3:
                ret.pre = "You're still able to just stay ";
                ret.color = "at home.";
                break;
              case rand == 4:
                ret.pre = "I'd take your ";
                ret.color = "converse. ";
                break;
              case rand == 5:
                ret.pre = "Fucking organ donor are back on street";
                ret.color = "again. ";
                break;
              default:
                ret.pre ="Error";
                break;
            }
            break;
          case temp >= 20 && temp < 28:
            var rand = Math.floor((Math.random() * 5) + 1);

            switch (true) {
              case rand == 1:
                ret.pre = "Some crazy motherfuckers will go ";
                ret.color = "swimming ";
                ret.post = "already.";
                break;
              case rand == 2:
                ret.pre = "You could go to school ";
                ret.color = "half naked. ";
                break;
              case rand == 3:
                ret.pre = "Maybe ";
                ret.color = " global warming ";
                ret.post = " turns out to be true.";
                break;
              case rand == 4:
                ret.pre = "Love is in the ";
                ret.color = "air. ";
                break;
              case rand == 5:
                ret.pre = "Girls start wearing less. Get the ";
                ret.color = "fuck out. ";
                break;
              default:
                ret.pre ="Error";
                break;
            }
            break;
          case temp >= 28:
            // ITS LIKE A FUCKING OVEN
            // ITS TOO DAMN HOT
            // LIEK A FUCKING SWEATBOX
            var rand = Math.floor((Math.random() * 5) + 1);

            switch (true) {
              case rand == 1:
                ret.pre = "Its like a fucking ";
                ret.color = "oven ";
                break;
              case rand == 2:
                ret.pre = "Its too damn ";
                ret.color = "hot. ";
                break;
              case rand == 3:
                ret.pre = "Like a fucking ";
                ret.color = "sweatbox.";
                break;
              case rand == 4:
                ret.pre = "Too hot to go ";
                ret.color = "outside. ";
                break;
              case rand == 5:
                ret.pre = "Its like a fucking ";
                ret.color = "oven.";
                break;
              default:
                ret.pre ="Error";
                break;
            }
            break;

          default:
            ret.pre =  "Not supposed to happen";
        }
      }

      //Wind TO DO

      // Rain more to come
      if(rain){

        var rand = Math.floor((Math.random() * 4) + 1);
        console.log(rand);

        switch (true) {
          case rand == 1:
            ret.pre = "Get your fucking ";
            ret.color = "umbrella.";
            break;
          case rand == 2:
            ret.pre = "Its fucking ";
            ret.color = "raining ";
            ret.post = "outside.";
            break;
          case rand == 3:
            ret.pre = "Meeehh... Just stay in ";
            ret.color = "bed.";
            break;
          case rand == 4:
            ret.pre = "Meeh... Just stay in ";
            ret.color = "bed.";
            break;
          default:
            ret.pre ="";
            ret.color ="";
            break;
        }


      }

      this.text.pre = ret.pre;
      this.text.color = ret.color;
      this.text.post = ret.post;

    },

    getLatLng: function () {
      navigator.geolocation.getCurrentPosition(
        function(position){
          console.log('scheint zu gehen');
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;

          console.log(position.coords.latitude);
          console.log(position.coords.longitude);

          this.getLocation();
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

        console.log(results);

        this.location.city = results.results[4]['address_components'][0]['long_name'];
				this.location.region = results.results[4]['address_components'][1]['long_name'];
        this.location.state = results.results[4]['address_components'][2]['long_name'];
			}.bind(this));
    },

    getTime: function () {
      var datum = new Date();

      var ArrayTage = new Array("Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag");
      var ArrayMonate = new Array("JAN","FEB","MAR","APR","MAI","JUN","JUL", "AUG", "SEP", "OKT", "NOV", "DEZ");

      this.date.weekday = ArrayTage[datum.getDay()];
      this.date.month = ArrayMonate[datum.getMonth()];
      this.date.day = datum.getDate();
      this.date.time = datum.getHours() + ":" + datum.getMinutes();
      /*

      $.getJSON('http://api.geonames.org/timezoneJSON?lat=' + this.lat + '1&lng=' + this.lng + '&username=autjojo', function(results) {
        this.date.time = results.time;
      }.bind(this));

      **/
    },

    getTemp: function () {
      $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + this.lat + '&lon=' + this.lng + '&APPID=a70390a56e504a6e42fbec688616f573', function(results) {
				this.weather.current = Math.round(results['main']['temp'] - 273.15 );
				this.weather.min = Math.round(results['main']['temp_min'] - 273.15 );
				this.weather.max = Math.round(results['main']['temp_max'] - 273.15 );

        this.getText();
        this.ready = true;

			}.bind(this));

    },
  },

	ready: function (){
    var spinner = new Spinner(opts).spin(target);
    this.getTime();
    this.getLatLng();

	},

})


