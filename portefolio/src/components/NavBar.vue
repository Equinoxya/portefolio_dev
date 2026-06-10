<<template>
    <nav class="navbar">
        <span class="logotitle">
        <div class="logo"></div>
        <h1 class="titre">Portfolio</h1>
        </span>
        <ul class="links">
            <li><a href="">A propos</a></li>
            <li><a href="">Parcours</a></li>
            <li><a href="">Projets</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
</template>

<style scoped>
    .navbar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 0;
    border-bottom: 1px solid rgb(209, 208, 208);
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgb(209, 208, 208);
    }
    .titre{
        font-size: 45px;
    }
    ul{
        display: flex;
        justify-content: space-evenly;
        width: 50%;
        align-items: center;
    }
    li{
        list-style: none;
        font-size: 25px;
    }
    a{
        text-decoration: none;
        color: black;
    }
</style>