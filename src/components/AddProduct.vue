<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Add Product</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>


      <div class="formulari">
        <ion-list>
          <ion-item>
            <!-- Input with placeholder -->
            <ion-label>Producte name: </ion-label>
            <ion-input placeholder="Nom"></ion-input>
          </ion-item>
          <ion-item>
            <!-- Number type input -->
            <ion-label>Price:</ion-label>
            <ion-input type="number" placeholder="999.9"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Description:</ion-label>
<!--            <ion-input type="text"></ion-input>-->
            <ion-textarea border="grey"></ion-textarea>
          </ion-item>
          <ion-item>
            <ion-label>Category</ion-label>
            <ion-select value="dog">
              <ion-select-option value="men clothing">men clothing</ion-select-option>
              <ion-select-option value="jewelery">jewelery</ion-select-option>
              <ion-select-option value="electronics">electronics</ion-select-option>
              <ion-select-option value="women clothing">women clothing</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label>Image URL:</ion-label>
            <ion-input type="url" placeholder="URL"></ion-input>
          </ion-item>
        </ion-list>


        <router-link to="/catalogue/grid">
          <ion-button type="submit" color="primary">Afegir!</ion-button>
        </router-link>
      </div>



    </ion-content>
  </ion-page>
</template>


<script>
import { IonButtons, IonInput, IonContent, IonHeader, IonMenuButton,  IonInfiniteScroll,  IonInfiniteScrollContent, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default {
  name: "AddProduct",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },
}
</script>

<style scoped>

ion-input {
  width: 18%;
  /*--box-shadow: none !important;*/
  --box-shadow: inset 0 0 3px;
}

.formulari {
  /*padding-left: 50px;*/
  /*padding-top: 50px;*/
  padding: 40px;
}

</style>