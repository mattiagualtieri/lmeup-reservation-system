<template>
    <div class="event-container fadable">
        <div class="event">
            <div class="banner" :class="classes"></div>
            <div class="event-right-content">
                <div class="info">
                    <div class="event-title">
                        {{ title }}
                    </div>
                    <div class="event-date">
                        {{ date }}
                    </div>
                    <div class="event-location">
                        {{ location }}
                    </div>
                </div>
                <div class="buttons">
                    <button class="button white-button disabled">Feedbacks</button>
                    <a :href="photo_url" target="_blank" class="button green-button">Vai alle foto</a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'EventComponent',
    props: {
        title: String,
        date: String,
        location: String,
        banner: String,
        photo_url: String
    },
    computed: {
        classes () {
            return this.banner;
        }
    },
    methods: {
        setPhotoUrl() {

        }
    }
}
</script>
  
<style scoped>

.event-container {
    padding: 50;
    margin-bottom: 64px;
    margin-left: 10%;
    margin-right: 10%;
}

.event {
    display: flex;
    border-radius: 16px;
    background-color: rgb(248, 248, 248)
}

.banner {
    border-radius: inherit;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 90%;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}

.banner1 {
    background-image: url('../assets/banner1.jpg');
}

.banner2 {
    background-image: url('../assets/banner2.jpg');
}

.banner3 {
    background-image: url('../assets/banner3.jpg');
}

.banner4 {
    background-image: url('../assets/banner4.jpg');
}

.banner5 {
    background-image: url('../assets/banner5.jpg');
}

.banner6 {
    background-image: url('../assets/banner6.jpeg');
}

.banner7 {
    background-image: url('../assets/banner7.jpg');
}

.event-right-content {
    display: grid;
    width: 100%;
}

.info {
    margin-top: 32px;
    margin-left: 24px;
}

.event-title {
    font-size: 42px;
    font-weight: bold;
}

.event-date {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
}

.event-location {
    margin-top: 10px;
    font-size: 16px;
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 24px;
}

.button {
    border-radius: 16px;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border: 2px solid #006321;
}

.green-button {
    background-color: #006321;
    color: white;
}

.green-button:hover {
    background-color: white; 
    color: black; 
    border: 2px solid #006321;
}

.white-button {
    background-color: white; 
    color: black;
}

/*
.white-button:hover {
    background-color: #006321;
    color: white; 
    border: 2px solid #006321;
}
*/

.disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

@media (max-width: 850px) {
    .event-container {
        padding: 24px;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 16px;
    }

    .event {
        display: block;
    }

    .banner {
        width: 100%;
        height: 250px;
        border-radius: inherit;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .buttons {
        margin-top: 32px;
    }

    .info {
        margin-top: 16px;
        margin-left: 24px;
    }
    
    .event-title {
        font-size: 28px;
        font-weight: bold;
    }

    .button {
        border-radius: 16px;
        padding: 12px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        border: 2px solid #006321;
    }
}

</style>