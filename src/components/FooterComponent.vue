<template>
    <div class="footer">
        <div class="socials">
            Seguici su Instagram <a href="https://instagram.com/lemilleeunapolli_?igshid=MzRlODBiNWFlZA==" class="instagram-link"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        </div>
        <div class="bottom-navbar">
            <ul class="bottom-navigation">
                <li><router-link to="/shop">Shop</router-link></li>
                <li>|</li>
                <li><router-link to="/photos">Foto</router-link></li>
                <li>|</li>
                <li><router-link to="/">Home</router-link></li>
                <li>|</li>
                <li><router-link to="/FAQs">FAQs</router-link></li>
                <li>|</li>
                <li><router-link to="/about">About</router-link></li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'FooterComponent'
}
</script>
  
<style scoped>

.footer {
    margin-top: 64px;
}

a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.socials {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
}

.instagram-link {
    margin-left: 5px;
}

.bottom-navbar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.bottom-navigation {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 450px) {
    .socials {
        font-size: 20px;
    }

    .bottom-navigation {
        font-size: 14px;
    }
}

</style>