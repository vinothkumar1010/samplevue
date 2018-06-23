<template>
    <div id="notFoundHolder">
        <div id="notFound">
            <img :src="require('../../assets/notfound.jpg')">
        </div>
        <div id="notFoundText">
            Developers went to brew some coffee !! Hold on a moment !! They will come back and fix the issue !!
        </div>
    </div>
</template>
<script>
    export default
    {
        name:'NotFound'
    }
</script>
<style scoped lang="scss">
#notFoundHolder
{
    display:block;
    
   div
    {
        display:inline-block;
        width:49%;
        vertical-align:top;
        color:#1AB7EA;
    }   
}
</style>