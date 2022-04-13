<template>
  <main class="main">
    <h1 class="header">Добавление продукта</h1>
    <div class="main__container">
      <aside class="main__sidebar">
        <SideBar
          :cardProductsList="cardProductsList"
          @addProduct="onAddProduct"
          :sortType="sortType"
          @onChangeSortType="sortType = $event"
        />
      </aside>
      <div class="products-list">
        <div class="row">
          <CardProduct
            v-for="cardProduct in sortCardProductsList"
            :key="cardProduct.id"
            :product="cardProduct"
            :cardProductsList="cardProductsList"
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
  components: {
    SideBar,
    CardProduct,
  },
  data() {
    return {
      cardProductsList: [
        {
          id: 0,
          title: "Наименование товара",
          text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 10000,
          img: "/img/camera.jpg",
        },
        {
          id: 1,
          title: "Наименование товара",
          text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 1000,
          img: "/img/camera.jpg",
        },
        {
          id: 2,
          title: "Наименование товара",
          text: "Довольно-таки интересное описание товара в несколько строк",
          price: 20000,
          img: "/img/camera.jpg",
        },
        {
          id: 3,
          title: "Наименование товара",
          text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 10000,
          img: "/img/camera.jpg",
        },
        {
          id: 4,
          title: "Наименование товара",
          text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 1000,
          img: "/img/camera.jpg",
        },
        {
          id: 5,
          title: "Наименование товара",
          text: "Довольно-таки интересное описание товара в несколько строк",
          price: 20000,
          img: "/img/camera.jpg",
        },
      ],
      sortType: "",
    };
  },
  methods: {
    deleteProductCard(id) {
      this.cardProductsList = this.cardProductsList.filter(
        (elem) => elem.id !== id
      );

      localStorage.setItem("items", JSON.stringify(this.cardProductsList));
    },
    onAddProduct(product) {
      this.cardProductsList.push(product);

      localStorage.setItem("items", JSON.stringify(this.cardProductsList));
    },
  },
  computed: {
    sortCardProductsList() {
      if (this.sortType === "По возрастанию цены") {
        return [...this.cardProductsList].sort((a, b) => a.price - b.price);
      }

      if (this.sortType === "По убыванию цены") {
        return [...this.cardProductsList].sort((a, b) => b.price - a.price);
      }

      if (this.sortType === "По наименованию") {
        return [...this.cardProductsList].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      }

      return this.cardProductsList;
    },
  },

  created() {
    const productFromLS = localStorage.getItem("items");

    if (productFromLS) {
      this.cardProductsList = JSON.parse(productFromLS);
    } else {
      localStorage.setItem("items", JSON.stringify(this.cardProductsList));
    }
  },
};
</script>

<style lang="scss" scoped>
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
