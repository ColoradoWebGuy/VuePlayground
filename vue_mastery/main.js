
// this object has a variety of optional properties that give the instance
// the ability to store data and perform actions.
 var app = new Vue({
     // forming a relationship between the instance, 'app' and that
     // portion of the DOM 'div#app'
     el: '#app',
     data: {
         product: "Socks",
         description: "A pair of warm, fuzzy socks"
     }
 })
