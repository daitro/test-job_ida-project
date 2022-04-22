<template>
  <main class="main">
    <div class="header-block">
      <h1 class="header">Добавление товара</h1>
      <GuiSelect
        :options="selectSort.options"
        :placeholder="selectSort.placeholder"
        v-model="sortType"
      />
    </div>
    <div class="main__container">
      <aside
        :class="{ main__sidebar: true, 'main__sidebar--fixed': sideBarFixed }"
      >
        <SideBar
          :cardProductsList="cardProductsList"
          @addProduct="onAddProduct"
        />
      </aside>
      <div
        :class="{ 'products-list': true, 'products-list--fixed': sideBarFixed }"
      >
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
import GuiSelect from "../components/Gui/GuiSelect.vue";

export default {
  components: {
    SideBar,
    CardProduct,
    GuiSelect,
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
      selectSort: {
        value: "",
        options: ["По возрастанию цены", "По убыванию цены", "По наименованию"],
        placeholder: "По умолчанию",
      },
      sideBarFixed: false,
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
    onScrollHandler(event) {
      let windowScrollTop = event.target.documentElement.scrollTop;
      this.sideBarFixed = windowScrollTop > 59;
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
  mounted() {
    window.document.addEventListener("scroll", this.onScrollHandler, {
      passive: true,
    });
  },
  beforeDestroyed() {
    window.document.removeEventListener("scroll", this.onScrollHandler);
  },
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px;
  background: rgba(255, 254, 251, 0.8);

  &__container {
    display: block;

    @media screen and(min-width:687px) {
      display: flex;
      flex-direction: row;
    }
  }

  &__sidebar {
    position: static;
    flex: none;
    max-width: 332px;
    width: 100%;

    &--fixed {
      position: fixed;
      top: 24px;
    }
  }
}

.header-block {
  display: flex;
  justify-content: space-between;
  max-width: 1356px;
  width: 100%;
}

.header {
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  margin-bottom: 16px;
  margin-right: 16px;
}

.products-list {
  margin-top: 24px;

  @media screen and(min-width:687px) {
    margin-left: 16px;
    margin-top: 0;
  }

  &--fixed {
    @media screen and(min-width:687px) {
      margin-left: 348px;
    }
  }
}

.row {
  max-width: 1028px;
  margin: 0 -8px 0 -8px;
  display: flex;
  flex-wrap: wrap;
}
</style>
