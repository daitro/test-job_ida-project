<template>
  <transition name="slide-fade">
    <div
      class="card-wrapper col"
      @mouseover="showIconDelete = true"
      @mouseleave="showIconDelete = false"
    >
      <div class="card-product">
        <transition name="fade">
          <img
            class="card-product__icon"
            src="/icons/delete.svg"
            v-if="showIconDelete"
            @click="onClick"
          />
        </transition>
        <div
          class="card-product__img"
          :style="{ 'background-image': `url(${product.img})` }"
        ></div>
        <div class="card-product__description">
          <h2 class="card-product__title">{{ product.title }}</h2>
          <p class="card-product__text">
            {{ product.text }}
          </p>
          <p class="card-product__price">{{ formattedPrice }} руб.</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showIconDelete: false,
    };
  },
  props: {
    cardProductsList: {
      type: Array,
    },
    product: {
      type: Object,
    },
  },
  methods: {
    onClick() {
      this.$emit("delete");
    },
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat("ru-RU").format(this.product.price);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-product {
  transition: box-shadow 0.5s;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.1);
  }

  &__icon {
    display: block;
    position: absolute;
    right: -12px;
    top: -12px;
    cursor: pointer;
  }

  &__description {
    padding: 0 16px 24px;
  }

  &__img {
    height: 200px;
    border-radius: 4px 4px 0 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #3f3f3f;
    margin: 16px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    height: 80px;
    color: #3f3f3f;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__price {
    margin-top: 32px;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #3f3f3f;
  }
}

.card-wrapper {
  padding: 0 8px 0 8px;
}

.col {
  width: 100%;

  @media screen and(min-width:882px) {
    width: 50%;
  }

  @media screen and(min-width:1200px) {
    width: 33.33%;
  }
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s;
}

.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
