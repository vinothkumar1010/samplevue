<template>
    <div id="loginContainer">
         <div>
                <label for="username">User Name</label>
                <input type="text" name="username" id="username" v-model="User.username"/>
            </div>
            <div>
                <label for="passwor">Password</label>
                <input type="password" name="password" id="password" v-model="User.password"/>
            </div>
            <input type="button" v-on:click="Login" value="Login"/>
    </div>
</template>
<script>
 import axios from 'axios';
const sampleVueService = `http://${window.location.hostname}:3001`
    export default{
        name:'Login',
        data(){
            return{
                User:{
                   username:'',
                    password:'',
                    emailid:''
                }
            }
        },
        methods:{
            Login(){
                alert("login called");
                axios.post(`${sampleVueService}/api/v1/auth`,this.user).
                then(response=>{
                    console.log(response)
                }).catch(response => {
                                console.log(response);  
                    });
            }
        }
    }
</script>
<style scoped lang="scss">
#loginContainer
{

   
}
</style>