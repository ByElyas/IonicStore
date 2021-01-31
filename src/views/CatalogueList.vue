<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Catalogue list</ion-title>
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
        <ion-fab-button>
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>


      <ion-list>
        <ion-item v-for="item in items" v-bind:key="item.id">
          <ion-label class="ion-text-wrap" >
            <div style="height:300px;float:left;">
              <ion-img style="width: 300px; height: 220px;"  :src="item.image"></ion-img>
            </div>
            <div text-wrap>
              <h1>{{ item.title }}</h1>
            </div>
            <ion-badge color="secondary" >{{ item.price }}$</ion-badge>
            <p>{{ item.description }}</p>
            <ion-chip color="secondary">
              <ion-label color="dark">{{ item.category }}</ion-label>
            </ion-chip>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-infinite-scroll threshold="5%" @ionInfinite="loadData">
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more products..."
        ></ion-infinite-scroll-content>
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
      posts: null,
      items: [],
      i: 0,
      showLoader: true,
      itemCount: 5
    }
  },
  created() {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        res.json().then(data => {
          setTimeout(() => {
            this.posts = data.reverse();
            
            for (; this.i < 5; this.i++) {
              this.items.push(this.posts[this.i]);
            }
            
            this.showLoader = false;
          }, 3000)
        })
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
  methods: {
    loadData(event) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const vm = this;
      const max = this.i +5 ;
      setTimeout(function () {
        for (; vm.i < max; vm.i++) {
          const val = vm.posts[vm.i];
          vm.items.push(val);
        }
        event.target.complete();
      }, 1000)
    }
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

ion-searchbar {
  width: 18%;
  /*--box-shadow: none !important;*/
  --box-shadow: inset 0 0 3px;
}
</style>