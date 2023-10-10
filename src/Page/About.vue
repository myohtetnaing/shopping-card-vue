<template>

    <Master>
        <div class="container">
            <div class="row m-3 p-3">
                <div class="text-center">
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>Resize the browser window to see that this page is responsive by the way.</p>
                </div>
            </div>
            <div class="row m-3 p-3">
                <div class="col-md-4"></div>
                <div class="col-md-4 text-center"><h2>Our Team</h2></div>
                <div class="col-md-4"></div>
            </div>
            <div class="row m-3 p-3">
                <div class="col-md-4">
                    <div class="card">
                    <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style="width:100%">
                    <div class="container">
                        <h2>Jane Doe</h2>
                        <p class="title">CEO & Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button class="btn btn-dark btn-block">Contact</button></p>
                    </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                    <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Mike" style="width:100%">
                    <div class="container">
                        <h2>Mr.Myo Htet Naing</h2>
                        <p class="title">Art Director</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>myohtetnaing.dev@gmail.com</p>
                        <p><button class="btn btn-dark btn-block">Contact</button></p>
                    </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                    <img src="https://www.w3schools.com/w3images/team3.jpg" alt="John" style="width:100%">
                    <div class="container">
                        <h2>John Doe</h2>
                        <p class="title">Designer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button class="btn btn-dark btn-block">Contact</button></p>
                    </div>
                    </div>
                </div>
            </div>  
            <!-- For footer -->
            <div class="row">
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
</template>


<script>
import Master from '../Layout/Master.vue';
export default{
    components:{Master},
    name:"About",
}
</script>