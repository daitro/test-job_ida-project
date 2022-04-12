<template>
  <div class="input">
    <label
      :class="{ input__label: true, 'input__label--require': required }"
      for=""
    >
      {{ label }}
    </label>
    <input
      class="input__field"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
    />
    <p class="input__text-error" v-if="error">Поле является обязательным</p>
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
    error: {
      type: Boolean,
    },
  },

  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
    onBlur(event) {
      this.$emit("blur", event.target.value);
    },
    onFocus() {
      this.$emit("focus");
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;

  &__field {
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 8px 12px;
    line-height: 20px;

    &::-webkit-input-placeholder {
      color: #b4b4b4;
    }
  }

  &__text-error {
    position: absolute;
    top: 56px;
    font-size: 8px;
    line-height: 20px;
    color: #ff8484;
  }

  &__label {
    font-size: 10px;
    line-height: 20px;

    &--require {
      position: relative;
      &::after {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #ff8484;
        position: absolute;
      }
    }
  }
}
</style>
