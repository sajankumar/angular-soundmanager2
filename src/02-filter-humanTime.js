ngSoundManager.filter('humanTime', function () {
        return function (input) {
          //do not use this method calling. It will slow down the code execution. 
            /*function pad(d) {
                return (d < 10) ? '0' + d.toString() : d.toString();
            }*/
            
            var min = (input / 1000 / 60) << 0,
                sec = Math.round((input / 1000) % 60);
           var padMin = (min < 10) ? '0' + min.toString() : min.toString();
           var padSec =  (sec < 10) ? '0' + sec.toString() : sec.toString();
            return padMin + ':' + padSec;
        };
    });
