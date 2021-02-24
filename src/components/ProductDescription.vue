<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
      <ion-badge color="secondary" slot="end" >{{ price }}$</ion-badge>
    </ion-toolbar>
  </ion-header>
  <ion-content class="item-content">
<!--    <ion-img [src]='{{ image }}'/>-->
    <ion-content class="item-description">
      {{ description }}
      <div class="item-image">
        <ion-img :src="this.image"/>
      </div>
    </ion-content>

  </ion-content>
  <ion-button color="success" @click="buyingAction()">Buy!</ion-button>
  <ion-button color="secondary" @click="addToListAction()">Add to list</ion-button>
  <ion-button color="medium" @click="closeDescription()">Close</ion-button>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
import {modalController} from "@ionic/core";
import BuyingAction from '../components/BuyingAction';
import AddToListAction from '../components/AddToListAction';

export default defineComponent({
  name: 'descriptionModal',
  props: {
    title: { type: String },
    image: {type: String },
    description: {type: String },
    price: {type: String},
  },
  data() {
    return {

    }
  },
  methods: {
    closeDescription() {
      // AQUI CODI QUE TANQUI EL MODAL
      modalController.dismiss();
    },
    async buyingAction() {
      const modal = await modalController
          .create({
            component: BuyingAction,
            cssClass: 'my-buyaction-class',
            componentProps: {
              title: this.title,
            },
          })
      return modal.present();
    },
    async addToListAction() {
      const modal = await modalController
          .create({
            component: AddToListAction,
            cssClass: 'my-addtolist-class',
            componentProps: {
              title: this.title,
            },
          })
      return modal.present();
    },
  } ,
  components: { IonContent, IonHeader, IonTitle, IonToolbar }
});
</script>
<style>

ion-badge {
  font-size: medium;
}


/* Aqui lo content no aplica lo css: lo text es veu molt pegat a la card. Fa falta revisar*/
.item-content {
  margin-top: 50px;
}

.item-content .item-description {
  margin: auto;

  /*height: auto;*/
}


.item-content .item-image {
  margin-top: 40px !important;
  width: 40%;
  margin: auto;
}
</style>