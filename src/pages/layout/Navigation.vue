 <template>
 <nav>
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="signup">Sign Up</a></li>
            <li><a href="login">Login</a></li>
            <li><a href="listUsers">List All Users</a></li>
        </ul>
    </nav>
</template>
<script>
export default
{
    name:'Navigation'
}
</script>
<style scoped lang="scss">
nav {
    background-color: #333;
    margin: 0;
    overflow: hidden;
    margin-bottom:5%;
    ul{
        margin: 0;
        padding: 0;
        li {
                /* This allow us to arrange list items in a row, without using float */
                display: inline-block;
                list-style-type: none;
                 a {
                        color: #aaa;
                        background-color:inherit;
                        display: block;
                        line-height: 2em;
                        padding: 0.5em 0.5em;
                        text-decoration: none;
                    }
            }
    }
}
</style>