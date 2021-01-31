<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Catalogue grid</ion-title>
        <ion-searchbar slot="end"/>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <router-link to="/catalogue/add">
        <ion-fab-button>
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
        </router-link>
      </ion-fab>

      <div>
      <ion-grid>
        <div class="grid-full">
          <ion-row>
            <ion-col v-for="item in items" v-bind:key="item.id" size-m display:flex>
              <ion-card>
                <div style="display: flex; align-items: center; justify-content: center">
                  <ion-img style="width: 300px; height: 220px;"  :src="item.image"></ion-img>
                </div>
                <ion-card-header>
                  <ion-card-title>{{ item.title }}</ion-card-title>
                  <ion-card-subtitle>
                    <ion-badge color="secondary" >{{ item.price }}$</ion-badge>
                  </ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  {{ item.description }}
                </ion-card-content>
                <ion-row class="cardfooter">
                  <ion-col>
                    <ion-chip color="dark" >
                      <ion-label color="dark">{{ item.category }}</ion-label>
                    </ion-chip>
                  </ion-col>
                </ion-row>
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
import { loadingController, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
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
ion-col {
  padding: 10px;
}

ion-card {
  /*display: flex;*/
  /*flex-direction: column;*/
  /*width: 100%;*/
  height: 100%;
  box-shadow: 0px 2px 5px 2px #ccc;
}

.cardfooter {
  position: absolute;
  bottom: 0;
  width: 100%;
}

ion-chip {
  position: relative;
  /*left: 190px;*/
  /*right: 10px;*/
}

ion-card-content {
  border-bottom: 20px solid transparent;
}


ion-searchbar {
  width: 18%;
  /*--box-shadow: none !important;*/
  --box-shadow: inset 0 0 3px;
}

</style>