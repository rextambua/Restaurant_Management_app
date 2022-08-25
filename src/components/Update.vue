<template>
    <Header />
    <h1>Hello User, Welcome to the Update Resto page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact" />
        <button @click="update" type="button">Update Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue'
export default ({
    name: 'update-page',
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
        async update() {
            const result = await axios.put('http://localhost:3000/restaurants/' + this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (result.status == 200) { this.$router.push({ name: 'Home-page' }) }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-infos');
        if (!user) { this.$router.push({ name: 'SignUp' }) }

        const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id)
        this.restaurant = result.data
    },

})
</script>