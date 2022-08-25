<template>
    <Header />
    <h1>Hello User, Welcome to the Add Resto page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact" />
        <button @click="add" type="button">Add New Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue'
export default ({
    name: 'add-page',
    components: {
        Header,
    },
    data() {
        return {
            restaurant: {
                name: "",
                address: "",
                contact: "",
            }
        }
    },
    methods: {
        async add() {
            console.log(this.restaurant);
            const result = await axios.post('http://localhost:3000/restaurants', {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (result.status == 201) { this.$router.push({ name: 'Home-page' }) }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-infos');
        if (!user) { this.$router.push({ name: 'Home-page' }) }
    },
})
</script>
