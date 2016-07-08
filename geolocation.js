/**
Create function `getGeo()` that returns a Promise.

This Promise will resolve to a coordinates object like:
{ lat: ..., long: ... }

if the `navigator.getGeolocation()` call is successful,
and will reject with an error message if not.
**/

function getGeo(){
  //returns a Promise
    return new Promise(function(resolve, reject) {
      console.log ('line 4');
    navigator.geolocation.getCurrentPosition(function (position) {
      var coordinates = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        };
        resolve(coordinates);

   });
 });
}
console.log('WE MADE IT');
getGeo().then(function(coordinate){
  console.log(coordinate);
});
