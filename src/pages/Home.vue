<template>
    <div id="homePageContainer">
        Hi , for learning purpose I created this website.<br/>
            References are from the following websites
         
            <div>
            <a href="https://medium.com/codingthesmartway-com-blog/vue-js-routing-with-vue-router-4c428fabb078">https://medium.com/codingthesmartway-com-blog/vue-js-routing-with-vue-router-4c428fabb078</a>
            <a href="https://serversideup.net/building-page-layout-vue-router/">https://serversideup.net/building-page-layout-vue-router/</a>
            <a href="https://medium.com/hong-kong-tech/use-sass-scss-of-webpack-in-vuejs-8dde3a83611e">https://medium.com/hong-kong-tech/use-sass-scss-of-webpack-in-vuejs-8dde3a83611e</a>
            <a href="https://stackoverflow.com/questions/34623833/how-to-remove-hashbang-from-url">https://stackoverflow.com/questions/34623833/how-to-remove-hashbang-from-url</a> 
            <a href="https://github.com/vuejs/vue-router/issues/713">https://github.com/vuejs/vue-router/issues/713</a>
             </div>
             <div id="knownIssues">Some known issues</div>
             <a class="fixed" href="https://github.com/dlmanning/gulp-sass/issues/687">https://github.com/dlmanning/gulp-sass/issues/687</a>

    </div>
</template>
<script>
    export default{
        name:'Home'
    }
</script>
<style scoped lang="scss">
#homePageContainer
{
    color:#282828;
    a
    {
        display:block;
        margin:10px 10px 10px 0;
        color:$lightGreen;
        

    }
    #knownIssues
    {
        margin-top:5%;
        color:red;
        font-weight:bold;
    }
    a.fixed
    {
         text-decoration: line-through;
    }
}
</style>