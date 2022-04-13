<template>
  <div class="input">
    <label
      :class="{ input__label: true, 'input__label--require': required }"
      for=""
    >
      {{ label }}
    </label>
    <textarea
      class="input__field"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="changeInput"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
  },
  methods: {
    changeInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  &__label {
    font-size: 10px;
    line-height: 20px;

    &--require {
      &::after {
        content: "*";
        color: red;
      }
    }
  }

  &__field {
    height: 108px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 8px 12px;
    line-height: 20px;

    &::-webkit-input-placeholder {
      color: #b4b4b4;
    }
  }
}
</style>
