<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Catalogue list</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item v-for="item in items" v-bind:key="item.id">
          <ion-label class="ion-text-wrap" >
            <div style="height:300px;float:left">
              <ion-img style="width: 400px; height: 330px;"  :src="item.image"></ion-img>
            </div>
            <h1>{{ item.title }}</h1>
            <h2>Price: <strong>{{ item.price }}€</strong></h2>
            <p>{{ item.description }}</p>
            <ion-chip color="secondary">
              <ion-label color="dark">{{ item.category }}</ion-label>
            </ion-chip>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-infinite-scroll
          @ionInfinite="loadData($event)"
          threshold="100px"
          id="infinite-scroll"
          :disabled="isDisabled"
      >
        <ion-infinite-scroll-content
            loading-spinner="bubbles"
            loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>


    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonContent, IonHeader, IonMenuButton,  IonInfiniteScroll,  IonInfiniteScrollContent, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import axios from 'axios';
import { defineComponent, ref} from 'vue';

export default {
  name: 'CatalogueList',
  data() {
    return {
      items: [],
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
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonPage,
    IonTitle,
    IonToolbar
  },

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