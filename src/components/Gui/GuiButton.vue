<template>
  <input
    class="button"
    :disabled="disabled"
    type="submit"
    value="Добавить товар"
  />
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
  cursor: pointer;

  &[disabled] {
    background: #eeeeee;
    color: #b4b4b4;
  }

  &:hover {
    background: #8fc187;
  }
}
</style>
