
var app = new Vue({
     el: '#app',
     data: {
        product: 'Socks',
        image: './assets/vmSocks-green.jpg',
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
          {
            variantId: 2234,
            variantColor: 'green',
            variantImage: './assets/vmSocks-green.jpg'
          },
          {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: './assets/vmSocks-blue.jpg'
          }
        ],
        cart: 0
     },
     methods: {
         addToCart() {
             this.cart += 1
         },
         subtractFromCart() {
             this.cart -= 1
         },
         // Instead of writing out an anonymous function like
         // updateProduct: function(variantImage), we can use the ES6
         // shorthand and just say updateProduct(variantImage).
         // These are equivalent ways of saying the same thing.
         updateProduct(variantImage) {
             this.image = variantImage
         }
     }
 })
