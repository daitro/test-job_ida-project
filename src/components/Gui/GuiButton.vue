<template>
  <button class="button" :disabled="disabled">Добавить товар</button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  background: #7bae73;
  border-radius: 10px;
  line-height: 20px;
  color: white;
  padding: 10px 16px;
  margin-top: 8px;
  font-family: "Inter-regular";
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;

  &:hover {
    background: #8fc187;
  }

  &[disabled] {
    background: #eeeeee;
    color: #b4b4b4;

    &:hover {
      background: #eeeeee;
      cursor: default;
    }
  }
}
</style>
