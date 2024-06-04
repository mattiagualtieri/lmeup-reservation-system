<template>
    <VideoComponent/>
    <SectionTitleComponent title="Prossimi eventi"/>
    <ComingEventComponent 
        title="LMEUP di Giugno" 
        date="14/06/2024" 
        location="Modena, Via Tonini 5" 
        banner="banner7" 
        info_url="https://www.instagram.com/p/C7GtksyKsgV/?igsh=b3hkNThlMTNnb3A5" />
    <SectionTitleComponent title="Eventi passati"/>
    <ComingEventComponent 
        title="Torneo di Beach Volley" 
        date="11/05/2024" 
        location="Modena, Via Tonini 5" 
        banner="banner6" 
        info_url="https://www.instagram.com/p/C6D_kRKq-ND/?igsh=OTVwYnNld3kwOXJz" />
    <EventComponent 
        title="LMEUP di Settembre" 
        date="08/09/2023" 
        location="Modena, Via Tonini 5" 
        banner="banner1" 
        photo_url="https://drive.google.com/drive/mobile/folders/1Tu9M8X1oQScTJtr_9iOYsWssSP5-SAdY?usp=sharing&fbclid=PAAaYcAajNDp5wVhzQCetY2lUfVnvNjFOo16qeWk_vp9WWnQnyVefqdKDgG6E" />
    <EventComponent 
        title="LMEUP di Luglio" 
        date="21/07/2023" 
        location="Modena, Via Tonini 5" 
        banner="banner2" 
        photo_url="https://drive.google.com/drive/mobile/folders/1QIypeI7sk53zdVJTWFO-AwaYPFXg3z6J?usp=sharing&fbclid=PAAaZvahPhM5dP06OFA7jp6i7p-B1hgCCCZYELIDKFHUXDVZje5zeolCC4Sh8"/>
    <EventComponent 
        title="LMEUP di Giugno (💧)" 
        date="09/06/2023" 
        location="Modena, Via Tonini 5" 
        banner="banner3" 
        photo_url="https://drive.google.com/drive/mobile/folders/1qzwqzbePEwxHWZ41J0hNqYhg6E8bcRps?fbclid=PAAaayX5X6PMaqWFq39YIZXP6OWP1L0LRmEc6rJGIqZRc2nkQpehF4MtOJrgw"/>
    <SeeAllButtonComponent/>
    <FooterComponent/>
</template>
  
<script>
import VideoComponent from '../components/VideoComponent.vue'
import SectionTitleComponent from '../components/SectionTitleComponent.vue'
//import ComingSoonComponent from '../components/ComingSoonComponent.vue'
import ComingEventComponent from '../components/ComingEventComponent.vue'
import EventComponent from '../components/EventComponent.vue'
import SeeAllButtonComponent from '../components/SeeAllButtonComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'HomeView',
  components: {
    VideoComponent,
    SectionTitleComponent,
    // ComingSoonComponent,
    ComingEventComponent,
    EventComponent,
    SeeAllButtonComponent,
    FooterComponent
  },
  mounted() {
    const elements = document.querySelectorAll(".fadable");

    function fadeInElements() {
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add("fade-in");
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight + 400 || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Initial check in case some elements are already in the viewport when the page loads
    fadeInElements();

    // Add event listener to check for elements when scrolling
    window.addEventListener("scroll", fadeInElements);
  }
}
</script>

<style>

.fadable {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fadable.fade-in {
  opacity: 1;
  transform: translateY(0);
}

</style>
