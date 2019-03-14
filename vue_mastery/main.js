Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    `
});

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
        <div class="product-image">
            <img :src="image" />
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else
                :class="{ 'strike-through': !inStock }"
                >
                Out of stock
            </p>
            <p>{{ sale }}</p>
            <p>Shipping: {{ shipping }}</p>

            <product-details :details="details"></product-details>

            <div class="color-box"
                v-for="(variant, index) in variants"
                :key="variant.variantId"
                :style="{ backgroundColor: variant.variantColor }"
                @mouseover="updateProduct(index)"
                >
            </div>

            <!-- We can use expressions inside an element’s class binding
                to evaluate whether a class should appear or not -->

            <!-- ** You can calso bind an entire class object or array of
                classes to an element. See ex. below -->
            <!--  <div :class="[activeClass, errorClass]"></div> -->
            <button v-on:click="addToCart"
                :disabled="!inStock"
                :class="{ disabledButton: !inStock}"
                >Add to Cart
            </button>

            <div class="cart">
                <p>Cart ({{ cart }})</p>
            </div>
        </div>

    </div>
    `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: './assets/vmSocks-green.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: './assets/vmSocks-blue.jpg',
                    variantQuantity: 0
                }
            ],
            cart: 0,
            onSale: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
       },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            return (this.onSale) ? this.title + ' are on sale!' : this.title + ' are not on sale'
        },
        shipping() {
            if (this.premium) {
                return "Free"
            } else {
                return 2.99
            }
        }
    }
});

var app = new Vue({
     el: '#app',
     data: {
         premium: true
     }
 })
