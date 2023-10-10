<template>
    <div>
        <Master>
            <div class="container mt-3">
                <div class="row">
                    <div class="col-md-12">
                        <table class="p-2">
                            <tr>
                                <th class="title p-2">Title</th>
                                <th class="image p-2">Image</th>
                                <th class="fix p-2">+/-</th>
                                <th class="fix p-2">Qty</th>
                                <th class="fix p-2">Price</th>
                                <th class="total p-2">Total</th>
                            </tr>
                            <tr v-for="(item,itemId) in cart" :key="itemId">
                                <td class="p-2">{{item.title}}</td>
                                <td class="p-2"><img :src="item.image" width="40px" alt=""></td>
                                <td class="p-2">
                                    <span @click="addQty(item)" class="btn btn-sm btn-success">+</span><br>
                                    <span @click="reduceQty(item)" class="btn btn-sm btn-danger mt-1">-</span>
                                </td>
                                <td class="p-2">{{item.qty}}</td>
                                <td class="p-2"> $ {{item.price}}</td>
                                <td class="p-2"> $ {{(item.qty*item.price).toFixed(2)}}</td>
                            </tr>
                        </table>
                    </div>                   
                </div>
                <!-- For footer -->
            <div class="row mt-3">
                <footer class="text-center text-white" style="background-color: #f1f1f1;">
                    <!-- Grid container -->
                    <div class="container pt-4">
                        <!-- Section: Social media -->
                        <section class="mb-4">
                        <!-- Facebook -->
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i class="fab fa-facebook-f"></i
                        ></a>

                        <!-- Twitter -->
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i class="fab fa-twitter"></i
                        ></a>

                        <!-- Google -->
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i class="fab fa-google"></i
                        ></a>

                        <!-- Instagram -->
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i class="fab fa-instagram"></i
                        ></a>

                        <!-- Linkedin -->
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i class="fab fa-linkedin"></i
                        ></a>
                        <!-- Github -->
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i class="fab fa-github"></i
                        ></a>
                        </section>
                        <!-- Section: Social media -->
                    </div>
                    <!-- Grid container -->

                    <!-- Copyright -->
                    <div class="text-center text-dark p-3">
                        © 2020 Copyright:
                        <a class="text-dark" href="#">www.shop.com</a>
                    </div>
                    <!-- Copyright -->
            </footer>
            </div>
            <!-- For footer -->
            </div>
        </Master>
    </div>
    
</template>
<style>
    table,tr{
        border-bottom: 1px solid #7e7979;
        width: 100%; 
    }
    .title{
        width: 41%;       
    }
    .image{
        width: 15%;
    }
    .fix{
        width: 12%;
    }
    .total{
        width: 20%;
    }
</style>

<script>
import Master from '../Layout/Master.vue';
export default{
    components:{Master},
    name:"Cart",
    data(){
        return{
            cart:[],
        }
    },
    created(){

        this.cart = this.$root.cart;
    },
    methods:{
        addQty(item){
            item.qty++;
        },
        reduceQty(item){
            item.qty--;
            if(item.qty == 0){
                
                const indexOfProduct = this.cart.findIndex(product => {
                    return product.id === item.id;
                });
               this.cart.splice(indexOfProduct, 1);

            }
        }
    }
}
</script>