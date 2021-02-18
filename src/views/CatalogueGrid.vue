<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>

        <ion-grid>
          <ion-row class="ion-align-items-center">
            <ion-col  size-lg="4" size-xs="12">
              <ion-title>Catalogue Grid</ion-title>
            </ion-col>
            <ion-col size-lg="8"  size-xs="12">
              <ion-searchbar placeholder="Search product"></ion-searchbar>
            </ion-col>
          </ion-row>
        </ion-grid>

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
          <ion-icon size="large" :md="add" />
        </ion-fab-button>
        </router-link>
      </ion-fab>

      <div v-if="data">
      <ion-grid>
        <div class="grid-full">
          <ion-row>
            <ion-col v-for="item in items" v-bind:key="item.id" size-m display:flex>
              <ion-card @click="showDescription(item)">
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


      <!-- Skeleton screen -->
      <div v-if="!data">

        <ion-grid>
          <div class="grid-full">
            <ion-row>
              <ion-col v-for="item in items" v-bind:key="item.id" size-m display:flex>
                <ion-card >
                  <div style="display: flex; align-items: center; justify-content: center">
                    <ion-img style="width: 300px; height: 220px;"></ion-img>
                  </div>
                  <ion-card-header>
                    <ion-card-title>
                      <ion-skeleton-text animated style="width: 100%"></ion-skeleton-text>
                      <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
                    </ion-card-title>
                    <ion-card-subtitle>
                      <ion-badge color="secondary" ></ion-badge>
                    </ion-card-subtitle>
                  </ion-card-header>

                  <ion-card-content>
                    <ion-skeleton-text animated ></ion-skeleton-text>
                    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
                    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
                    <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>
                  </ion-card-content>
                  <ion-row class="cardfooter">
                    <ion-col>
                      <ion-chip color="dark" style="width: 30%">
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
import { IonSkeletonText, alertController, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import axios from 'axios';
import { add } from 'ionicons/icons';
import {ref} from "@vue/reactivity";

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
  },
  // COSA DE SKELETON
  setup() {
    const data = ref();

    setTimeout(() => {
      data.value = {};
    }, 3000);

    return { data, add }
  },

  methods: {
    async showDescription($item) {
      const alert = await alertController
          .create({
            cssClass: 'cardDetail',
            header: $item.title ,
            subHeader: $item.price + "$",
            message: $item.description,
            buttons: [
              {
                text: 'Buy',
                role: 'buy',
                cssClass: 'buy-Button'
              },
              {
                text: 'Add to list',
                role: 'addToList',
                cssClass: 'addToList-Button'
              },

              {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'cancel-Button'
              }
            ],

          });
      return alert.present();
    },

  }
}
</script>

<style scoped>



/* Cosa de css de botóns descripció productes */
.cardDetail {
  --background: #e5e5e5;
}

/*.cardDetail .addToList-Button {*/
/*  color: red;*/
/*}*/


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

ion-searchbar {
  margin: auto;
  width: 300px !important;
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





/* Custom Skeleton Line Height and Margin */
.custom-skeleton ion-skeleton-text {
  line-height: 13px;
}

.custom-skeleton ion-skeleton-text:last-child {
  margin-bottom: 5px;
}



</style>