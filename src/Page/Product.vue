<template>
    <div>
   
        <Master>
            <!-- Loader -->
            <Loader v-show="isLoade"/>
            <span class="text-left mx-1" v-for="(err, i) in errMsg" :key="i"><i>{{ err }} </i></span> 
            
            <!-- Loader -->

            <!-- For Content -->
            <div v-show="!isLoade" class="container">
                <div class="row mt-2">
                    <div class="col-md-3" v-for="(product, productId) in products" :key="productId" >
                        <div class="card p-2 m-2" >
                            <div class="card-header bg-light">{{product.title}}</div>
                            <div class="card-body">
                                <img :src="product.image" alt="Not Photo" width="100%" height="100%">
                            </div>
                            <!-- <div class="card-footer bg-light">
                                <span><small>{{product.description}}</small></span>
                            </div> -->
                            <div class="card-footer">
                                <a type="button"><small>{{ more ="Detail more..."}}</small></a>
                            </div>
                            <div class="card-footer bg-light">
                                <span><small> ${{product.price}}</small></span>
                                
                                <a @click="addtoCart(product)" class="btn btn-sm btn-dark float-end">Add to Cart</a>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
            <!-- For Content -->

            <!-- For footer -->
            <div class="row" v-show="!isLoade">
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
        </Master>
    </div>
  
</template>


<script>
import Master from '../Layout/Master.vue'
import Loader from '../Component/Loader.vue'
import axios from 'axios';
const url1 = 'https://fakestoreapi.com/products';
const url2 = 'https://dummyjson.com/products';
export default{
    components:{Master,Loader},
    name:"Product",
    data(){
        return {
            isLoade:true,
            products:[],
            errMsg:[],
        };
    },
    created(){
        axios.get(url1)
            .then(res=>{
                this.products = res.data;
                this.isLoade = false;
            })
            .catch(err=>{
                this.errMsg = [err.message,'Please, reconnect your nectwork connection!']          
            })
    },
    methods:{
        addtoCart(product){
        var cart = this.$root.cart;
        var id = cart.find((Id)=>{
                return Id.id==product.id
        });

        if(id){
            id.qty++;
        }else{
            cart.push({...product,qty:1});
        }
       

        }
    }
};
</script>