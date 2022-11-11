<template>
    <div class="container">
        <!-- <Form v-slot="{ errors }">
            <Field type="text" :rules="validEmail" name="email" class="form-control" placeholder="Email" v-model="emailInput" /> <br>
            <span>{{ errors.email }}</span>
        </Form> -->

        <div class="row">
            <div class="col-sm-4" style="margin-left: 38%; margin-top: 10%;">
                <h3 style="text-align: center;">Sign in</h3>

                    <input type="text" name="email" class="form-control" placeholder="Email" v-model="emailInput"> <br>

                    <input type="password" name="password" class="form-control" placeholder="Password" v-model="passwordInput"> <br>
                    <div style="margin-left: 25%;">
                        <router-link to="/registerVue" class="btn btn-success">Register</router-link> &emsp; 
                        <button v-on:click="login" class="btn btn-primary">Login</button>   
                    </div>

            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';

export default {

    data(){
        return {
            passwordInput: "",
            emailInput: "",
            status: 2,
            user: [],
        };
    },
    
    created() {
        axios
        .get('http://localhost:7882/hochtml/user.php')
        .then(response => (this.user = response.data))
        .catch(error => console.log(error));
    },
    
    methods: {

        login() {
            this.user.forEach((value, index) => {
            if (this.emailInput === value.email && this.passwordInput === value.password) {
                this.status = 1;
                console.log(value.email);
            } 
            });

            if (this.status == 2) {
                alert('Đăng nhập thất bại! ');
            } else {
                this.$router.push('/Home');
                alert('Đăng nhập thành công! ');
            }
        },

    }

}

</script>

<script setup>



</script>

<style scoped>

</style>