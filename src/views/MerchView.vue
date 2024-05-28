<template>
  <div>
      <SectionTitleComponent title="Compra il merch"/>
      <div class="images">
          <div class="text-container">
              <p>
                Il merchandising targato LMEUP è disponibile sul sito <a href="https://www.gibischool.it/">www.gibischool.it</a> o acquistabile ai nostri eventi.
              </p>
          </div>
      </div>
      <div class="button-container">
        <a href="https://www.gibischool.it/" target="https://www.gibischool.it/" class="button green-button">Vai allo shop</a>
      </div>
      <SectionTitleComponent title="&quot;Il vecchio di Cog&quot;"/>
      <div class="images">
          <div class="text-container">
              <p>
                Maglietta rappresentante la famosa statua situata nel centro di Cognento. Un antico proverbio africano recita: "Vede più un vecchio seduto che un giovane in piedi".
              </p>
          </div>
          <div class="image-container"><img src="../assets/tshirt1.jpg" class="fadable"></div>
          <div class="image-container"><img src="../assets/tshirt1.jpg" class="fadable"></div>
          <div class="image-container"><img src="../assets/tshirt1.jpg" class="fadable"></div>
      </div>
      <SectionTitleComponent title="&quot;Il 10 Cognento&quot;"/>
      <div class="images">
          <div class="text-container">
              <p>
                Su cui ogni cognentese che si rispetti è salito almeno una volta, sempre in ritardo quando sei in anticipo e sempre in anticipo quando sei in ritardo.
              </p>
          </div>
          <div class="image-container"><img src="../assets/tshirt1.jpg" class="fadable"></div>
          <div class="image-container"><img src="../assets/tshirt1.jpg" class="fadable"></div>
          <div class="image-container"><img src="../assets/tshirt1.jpg" class="fadable"></div>
      </div>
      <SectionTitleComponent title="&quot;Il Pigugnino&quot;"/>
      <div class="images">
          <div class="text-container">
              <p>
                Un quarto per un Pigugno in poli? Celebre gioco di carte molto in voga sul suolo cognentese. Per maggiori info, visitare la pagina su <a href="https://it.wikipedia.org/wiki/Pigugno">Wikipedia</a>
              </p>
          </div>
          <div class="image-container"><img src="../assets/tshirt1.jpg" class="fadable"></div>
          <div class="image-container"><img src="../assets/tshirt1.jpg" class="fadable"></div>
          <div class="image-container"><img src="../assets/tshirt1.jpg" class="fadable"></div>
      </div>
      <FooterComponent/>
  </div>
</template>

<script>
import SectionTitleComponent from '../components/SectionTitleComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'MerchView',
  components: {
    SectionTitleComponent,
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

<style scoped>

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

.button-container {
    display: flex;
    justify-content: center;
    margin-bottom: 52px;
    margin-top: 52px;
}

.images {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: auto;
}

img {
  border-radius: inherit;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 85%;
  height: auto;
}

.text-container {
  text-align: left;
  padding-left: 32px;
  padding-right: 32px;
}

p {
  font-size: 24px;
}

@media (max-width: 850px) {
  .images {
      display: block;
  }

  .image-container {
      width: 100%;
      margin-bottom: 48px;
  }
}

</style>