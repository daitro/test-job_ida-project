<template>
  <main class="main">
    <h1 class="header">Добавление продукта</h1>
    <div class="main__container">
      <aside class="main__sidebar">
        <SideBar :cardProductsList="cardProductsList" />
      </aside>
      <div class="products-list">
        <div class="row">
          <CardProduct
            v-for="cardProduct in cardProductsList"
            :key="cardProduct.id"
            :product="cardProduct"
            :cardProductsList="cardProductsList"
            @mouseover="cardProduct.showIconDelete = true"
            @mouseleave="cardProduct.showIconDelete = false"
            @delete="deleteProductCard(cardProduct.id)"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import CardProduct from "../components/CardProduct.vue";

export default {
  data() {
    return {
      cardProductsList: [
        {
          id: 0,
          title: "Наименование товара",
          text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 10000,
          img: "/img/camera.jpg",
          showIconDelete: false,
        },
        {
          id: 1,
          title: "Наименование товара",
          text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 1000,
          img: "/img/camera.jpg",
          showIconDelete: false,
        },
        {
          id: 2,
          title: "Наименование товара",
          text: "Довольно-таки интересное описание товара в несколько строк",
          price: 20000,
          img: "/img/camera.jpg",
          showIconDelete: false,
        },
      ],
    };
  },

  methods: {
    deleteProductCard(id) {
      return (this.cardProductsList = this.cardProductsList.filter(
        (elem) => elem.id !== id
      ));
    },
  },

  components: {
    SideBar,
    CardProduct,
  },
};
</script>

<style lang="scss">
.main {
  max-width: 1440px;
  margin: 0 auto;
  padding: 36px;
  background: rgba(255, 254, 251, 0.8);

  &__sidebar {
    position: static;
    max-width: 332px;
    width: 100%;

    @media screen and(min-width:687px) {
      position: fixed;
    }
  }
}

.header {
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
}

.products-list {
  @media screen and(min-width:687px) {
    margin-left: 356px;
  }
}

.row {
  margin: 0 -12px 0 -12px;
  display: flex;
  flex-wrap: wrap;
}
</style>
