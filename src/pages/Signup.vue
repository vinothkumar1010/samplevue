<template>
    <div id="signUpContainer">
            <div>
                <label for="username">User Name</label>
                <input type="text" name="username" id="username" v-model="User.username"/>
            </div>
            <div>
                <label for="passwor">Password</label>
                <input type="password" name="password" id="password" v-model="User.password"/>
            </div>
            <div>
                <label for="email_id">Email Id</label>
                <input type="text" name="emailid" id="emailid" v-model="User.emailid"/>
            </div>
            <div>
                <label for="dateofbirth">Date of Birth</label>
                <input type="text" name="dateofbirth" id="dateofbirth" v-model="User.dateofbirth"/>
            </div>

            <div>
                    <input type="button" value="button" v-on:click="submitSignUp"/>
            </div>
    </div>
</template>
<script>
import axios from 'axios';
const sampleVueService = `http://${window.location.hostname}:3001`

    export default{
        name:'Signup',  
        data(){
            return{
                User:{
                    username:'',
                    password:'',
                    emailid:'',
                    dateofbirth:''
                }
            }
        },
        methods:{
            submitSignUp () { 
                alert("user");
                axios.post(`${sampleVueService}/api/v1/signup`, this.User)
                    .then(response => {
                        console.log(response);
      alert(response.data);
      console.log(response.data);
      this.$cookie.set('token', token, '1D')
    }).catch(response => {
                                console.log(response);  
                    })
            }
        }
        
    }
</script>
<style scoped lang="scss">
label
{
    min-width:100px;
    display:inline-block;
}
div
{
    margin-bottom:1%;
}
</style>