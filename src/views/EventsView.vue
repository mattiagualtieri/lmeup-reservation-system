<template>
    <SectionTitleComponent title="2024"/>
    <EventComponent 
        title="LMEUP di Giugno" 
        date="14/06/2024" 
        location="Modena, Via Tonini 5" 
        banner="banner7" 
        photo_url="https://drive.google.com/drive/folders/1ZoMv-SsSmhXbVchO4vHsI2nTcPBoA4ds" />
    <SectionTitleComponent title="2023"/>
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
        title="LMEUP di Giugno" 
        date="09/06/2023" 
        location="Modena, Via Tonini 5" 
        banner="banner3" 
        photo_url="https://drive.google.com/drive/mobile/folders/1qzwqzbePEwxHWZ41J0hNqYhg6E8bcRps?fbclid=PAAaayX5X6PMaqWFq39YIZXP6OWP1L0LRmEc6rJGIqZRc2nkQpehF4MtOJrgw"/>
    <SectionTitleComponent title="2022"/>
    <EventComponent 
        title="LMEUP di Settembre" 
        date="16/09/2022" 
        location="Modena, Via Tonini 5" 
        banner="banner4" 
        photo_url="https://drive.google.com/drive/mobile/folders/12sxRduh5OjLwIjWOqJ7mAPbHxOjRWVNv?fbclid=PAAaYNTwNmwbhnaGXsM2WY1IH4enSAIFpUh2DoiGCta0_BfbIirBBvS8xg1Ds" />
    <EventComponent 
        title="LMEUP di Giugno" 
        date="24/06/2022" 
        location="Modena, Via Tonini 5" 
        banner="banner5" 
        photo_url=""/>
    <FooterComponent/>
</template>

<script>
import SectionTitleComponent from '../components/SectionTitleComponent.vue'
import EventComponent from '../components/EventComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'EventsView',
  components: {
    SectionTitleComponent,
    EventComponent,
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