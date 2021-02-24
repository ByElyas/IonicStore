<template>
  <ion-header>
    <ion-toolbar color="success">
      <ion-title >Producte comprat!</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    S'ha comprat el producte: {{ producte }}

  </ion-content>
  <ion-button size="large" color="secondary" @click="returnToDescription()">Tornar a la descripcio</ion-button>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import {modalController} from "@ionic/core";

export default defineComponent({
  name: 'buyingActionModal',
  props: {
    title: { type: String, default: 'Super Modal' },
  },
  data() {
    return {
      producte: this.title,
    }
  },
  methods: {
    returnToDescription() {
      // AQUI CODI QUE TANQUI EL MODAL
      modalController.dismiss();
    },
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar }
});
</script>

<style>


</style>