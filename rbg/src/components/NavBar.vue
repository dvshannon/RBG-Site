<template>
    <div id="nav">
        <div id="rbg-icon">
            <img alt="RBG Logo" src="../assets/RBG_vertical_logo.png" @click='gohome'>
        </div>
        <div id="nav-text">
            <router-link to="/home">Home</router-link>
            <router-link to='/news'>News</router-link>
            <router-link to='/shop'>Shop</router-link>
            <router-link to='/teams'>Teams</router-link>
            <router-link to='/events'>Events</router-link>
            <router-link to='/photos'>Photos</router-link>
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        methods: {
            gohome: function() {
                this.$router.push('/home');
            }
        }
    }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
    #nav {
        position: absolute;
        width: 1196px;
        height: 89px;
        left: 37px;
        top: 26px;
    }
    #rbg-icon, img {
        position: absolute;
        width: 125px;
        height: 89px;
        left: 37px;
        top: 26px;
    }
    #nav-text {
        position: absolute;
        width: 534px;
        height: 24px;
        left: 699px;
        top: 58px;
        line-height: 24px;
        /* identical to box height */

        text-align: center;

        color: #FFFFFF;
    }
    router-link, #nav-text a {
        padding: 0 15px;
        text-decoration: none;
        font-family: 'Rubik', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        color: #FFF;
    }
</style>