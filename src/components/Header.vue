<template>
    <div class="nav">
        <router-link to="/">Home </router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <a href="#" @click="logout">Logout</a>
    </div>
</template>
<script>
export default {
    name: "Header-page",

    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'Login-page' })
        }
    }
}
</script>



<style>
.nav {
    background-color: purple;
    overflow: hidden;
}

.nav a {
    float: left;
    color: white;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
    cursor: pointer;
}

.nav a:hover {
    background: green;
    color: white;

}
</style>