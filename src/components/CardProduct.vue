<template>
  <transition name="slide-fade">
    <div
      class="card-wrapper col"
      @mouseover="onMouseover"
      @mouseleave="onMouseleave"
    >
      <div class="card-product">
        <img
          class="card-product__icon"
          src="/icons/delete.svg"
          v-if="showIconDelete"
          @click="onClick"
        />
        <img class="card-product__img" :src="`${img}`" alt="Изображение" />
        <div class="card-product__description">
          <h2 class="card-product__title">{{ title }}</h2>
          <p class="card-product__text">{{ text }}</p>
          <p class="card-product__price">{{ price }} руб.</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    onMouseover() {
      this.$emit("mouseover");
    },
    onMouseleave() {
      this.$emit("mouseleave");
    },
    onClick() {
      this.$emit("delete");
    },
  },

  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    price: {
      type: String,
    },
    img: {
      type: String,
    },
    showIconDelete: {
      type: Boolean,
    },
    cardProductsList: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.card-product {
  transition: box-shadow 0.5s;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 326px;
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
    right: -18px;
    top: -18px;
    cursor: pointer;
  }

  &__description {
    padding: 0 16px 24px;
  }

  &__img {
    width: 100%;
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin: 16px 0;
  }

  &__text {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #3f3f3f;
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
  padding: 0 12px 0 12px;
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
</style>
