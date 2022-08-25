<template>
    <Header />
    <h1>Hello {{ name }}, Welcome to the homepage</h1>
    <table border="1">

        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td>
                <router-link :to="'/update/' + item.id">Update</router-link>
                <button @click="deleteResto(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios';
export default ({
    name: 'Home-page',
    components: {
        Header,
    },
    data() {
        return {
            name: '',
            restaurant: [],
        }
    },
    methods: {
        async deleteResto(id) {
            let result = await axios.delete('http://localhost:3000/restaurants/' + id);
            console.log(result);
            if (result.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-infos');
            this.name = JSON.parse(user).name
            if (!user) { this.$router.push({ name: 'SignUp' }) }
            let result = await axios.get('http://localhost:3000/restaurants');
            console.log(result);
            this.restaurant = result.data
        }
    },
    async mounted() {
        this.loadData();
    },
})
</script>
<style>
td {
    width: 160px;
    height: 50px;
}

button {
    margin-left: 10px;
}

table {
    width: 100%;
}
</style>
