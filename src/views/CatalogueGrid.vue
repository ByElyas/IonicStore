<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Catalogue grid</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div cards>
      <ion-grid>
        <div class="grid-full">
          <ion-row>
            <ion-col v-for="item in items" v-bind:key="item.id" size-sm>
              <ion-card>
                <ion-img style="width: 400px; height: 330px;"  :src="item.image"></ion-img>
                <ion-card-header>
                  <ion-card-title>{{ item.title }}</ion-card-title>
                  <ion-card-subtitle>Price: <strong>{{ item.price }}</strong></ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  {{ item.description }}
                </ion-card-content>
                <ion-chip color="secondary">
                  <ion-label color="dark">{{ item.category }}</ion-label>
                </ion-chip>
              </ion-card>
            </ion-col>
          </ion-row>
        </div>
      </ion-grid>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import axios from 'axios';

export default {
  name: 'CatalogueList',
  data () {
    return {
      items: [],
      coses : 12
    }
  },
  mounted() {
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
          this.items = response.data
        })
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}


</style>