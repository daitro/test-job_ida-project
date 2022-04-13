<template>
  <section class="sidebar-block">
    <div class="form">
      <GuiInput
        :label="nameProduct.label"
        :placeholder="nameProduct.placeholder"
        v-model="nameProduct.value"
        :required="nameProduct.requiredField"
        @input="nameProduct.error = !$event"
        @blur="nameProduct.error = !nameProduct.value"
        @focus="nameProduct.error = false"
        :error="nameProduct.error"
      />
      <GuiTextArea
        :label="descriptionProduct.label"
        :placeholder="descriptionProduct.placeholder"
        v-model="descriptionProduct.value"
        :required="descriptionProduct.requiredField"
      />
      <GuiInput
        :label="imgProduct.label"
        :placeholder="imgProduct.placeholder"
        v-model="imgProduct.value"
        :required="imgProduct.requiredField"
        @input="imgProduct.error = !$event"
        @blur="imgProduct.error = !imgProduct.value"
        @focus="imgProduct.error = false"
        :error="imgProduct.error"
      />
      <GuiInput
        :label="priceProduct.label"
        :placeholder="priceProduct.placeholder"
        v-model="priceProduct.value"
        :required="priceProduct.requiredField"
        @input="priceProduct.error = !$event"
        @blur="priceProduct.error = !priceProduct.value"
        @focus="priceProduct.error = false"
        :error="priceProduct.error"
      />

      <GuiButton
        :disabled="isSubmitDisabled"
        @click.native="addNewProductCard"
      />
    </div>
  </section>
</template>

<script>
import GuiInput from "../components/Gui/GuiInput.vue";
import GuiTextArea from "../components/Gui/GuiTextArea.vue";
import GuiButton from "../components/Gui/GuiButton.vue";
import { nanoid } from "nanoid";

export default {
  data() {
    return {
      nameProduct: {
        value: "",
        placeholder: "Введите наименование товара",
        label: "Наименование товара",
        requiredField: true,
        error: false,
      },
      descriptionProduct: {
        value: "",
        placeholder: "Введите описание товара",
        label: "Описание товара",
        requiredField: false,
      },
      imgProduct: {
        value: "",
        placeholder: "Введите ссылку",
        label: "Ссылка на изображение товара",
        requiredField: true,
        error: false,
      },
      priceProduct: {
        value: "",
        placeholder: "Введите цену",
        label: "Цена товара",
        requiredField: true,
        error: false,
      },
    };
  },

  computed: {
    isSubmitDisabled() {
      return (
        !this.nameProduct.value ||
        !this.imgProduct.value ||
        !this.priceProduct.value
      );
    },
  },

  methods: {
    addNewProductCard() {
      this.cardProductsList.push({
        id: nanoid(),
        title: this.nameProduct.value,
        text: this.descriptionProduct.value,
        price: Number(this.priceProduct.value),
        img: this.imgProduct.value,
        showIconDelete: false,
      });

      this.nameProduct.value = "";
      this.descriptionProduct.value = "";
      this.imgProduct.value = "";
      this.priceProduct.value = "";
    },
  },

  props: {
    cardProductsList: {
      type: Array,
    },
  },

  components: {
    GuiInput,
    GuiTextArea,
    GuiButton,
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 332px;
  width: 100%;
  padding: 24px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
</style>
