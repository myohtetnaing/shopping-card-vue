<template>
    <div>
        <Master>
            <div class="container">
                <div class="row mt-3">
                    <div class="p-5 text-center bg-light">
                        <h1 class="mb-3">Home page</h1>
                        <h4 class="mb-3">Subheading</h4>
                        <a class="btn btn-primary" href="" role="button">Call to action</a>
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


<script>
import Master from '../Layout/Master.vue';
export default{
    components:{Master},
    name:"Home",
}

</script>