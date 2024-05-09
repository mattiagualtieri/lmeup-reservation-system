<template>
    <div>
        <SectionTitleComponent title="Chi siamo"/>
        <div class="images">
            <div class="image-container"><img src="../assets/about2.jpg" class="fadable"></div>
            <div class="image-container"><img src="../assets/about1.jpg" class="fadable"></div>
        </div>
        <SectionTitleComponent title="Perché lo facciamo"/>
        <div class="images">
            <div class="text-container">
                <p>
Quante volte anche Noi ce lo siamo chiesti. <br>
Cercando di approcciare con razionalità qualcosa che ci sembrava, e tuttora ci sembra, così irrazionale. <br>
Cercando di dare forma e significato a progetti che nemmeno Noi, il 26 Giugno 2021, sapevamo di avere. <br>
<br>
Data non a caso. Data nella quale, quasi per scherzo, abbiamo dato forma al nostro primo evento. <br>
Data di Italia - Austria agli europei, data del gol annullato ad Arnautovic, del gol di Chiesa; insomma ce lo ricordiamo tutti. <br>
Data in cui, spinti soltanto dal voler uscire dalla monotonia del Covid e dal genuino desiderio di condividere con più persone possibili un momento di svago, unione e divertimento, si è tenuta la prima "Le Mille e Una Polli". <br>
Settanta persone circa, perlopiù amici, due maxi schermi con la partita della nazionale, qualche drink e un po’ di musica.  <br>
Siamo nati così, e non poteva essere altrimenti, per una quindicina di ragazzi che si conoscono da sempre, che sono cresciuti correndo sullo stesso prato in cui hanno deciso di rendere l’illusione che avevano un po’ più reale. <br>
C’è una famosa citazione di Michael Jordan che riassume molto bene proprio questo concetto: “I limiti, come le paure, sono spesso soltanto illusioni”. <br>
Ed è grazie a questa frase che ci siamo resi conto che non aveva senso porci limiti, che la nostra illusione poteva davvero trasformarsi in realtà. <br>
Ed è così che, l’estate successiva, abbiamo deciso di replicare. <br>
Senza maxi schermi stavolta, solo qualche drink, un po’ di musica, e la voglia di divertirsi. <br>
Per dimostrare, in primis a noi stessi, che basta davvero poco per stare bene. <br>
Che non serve andare alla ricerca di chissà quale discoteca, chissà quale privè, chissà quale esorbitante ticket di ingresso. <br>
Almeno, questo è ciò che avremmo voluto venisse offerto a Noi quando abbiamo cominciato, ed è ciò che continuiamo a voler offrire a chi sceglie di sceglierci. <br>
Perché siamo in continua evoluzione, ma mai tradiremo ciò che ci ha mosso fin dall’inizio. <br>
Fin dal 26 Giugno 2021, con settanta persone, arrivando all’8 Settembre 2023, quando eravate più di 1500. <br>
Perché non c’è ricompensa economica che tenga. <br>
Non c’è soddisfazione più grande per noi, una quindicina di ragazzi normali, di vedere realizzata la nostra illusione, che illusione non è stata. <br>
<br>
Noi siamo questo. <br>
Noi siamo Voi. Semplicemente dall’altra parte del bancone. E avervi di fronte è la soddisfazione più grande.  <br>
Ecco perché lo facciamo.
                </p>
            </div>
        </div>
        <FooterComponent/>
    </div>
</template>

<script>
import SectionTitleComponent from '../components/SectionTitleComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    name: 'AboutView',
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

<style>

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