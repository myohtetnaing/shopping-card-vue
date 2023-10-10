<template>
    <div class="container">
        <!-- Navbar -->
        <Nav />
        <!-- Navbar -->

        <!-- Content -->
         <slot></slot>
        <!-- Content -->
    </div>

</template>


<script>
import Nav from './Nav.vue';
export default{
    components:{Nav},
    name:'Master'
}
</script>