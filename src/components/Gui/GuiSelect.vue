<template>
  <select class="select" :value="value" @change="onChange">
    <option disabled value="" selected>{{ placeholder }}</option>
    <option
      class="select__option"
      v-for="item of options"
      :key="item"
      :value="item"
    >
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
    },
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  methods: {
    onChange(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 122px;
  height: 36px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 24px 10px 16px;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  cursor: pointer;
  appearance: none;
  background: url("../../../public/icons/arrow_drop-down.svg") no-repeat;
  background-position: 90% 50%;

  &__option {
    color: rgb(53, 53, 53);
  }
}
</style>
