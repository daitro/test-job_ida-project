<template>
  <div class="card-wrapper col">
    <div class="card-product">
      <img
        class="card-product__img"
        :src="`/img/${img}.jpg`"
        alt="Изображение"
      />
      <div class="card-product__description">
        <h2 class="card-product__title">{{ title }}</h2>
        <p class="card-product__text">{{ text }}</p>
        <p class="card-product__price">{{ price }} руб.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style lang="scss">
.card-product {
  display: flex;
  flex-direction: column;
  max-width: 326px;
  width: 100%;
  margin-bottom: 16px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

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
</style>
