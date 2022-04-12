<template>
  <section class="sidebar-block">
    <div class="form">
      <GuiInput
        :label="nameProduct.label"
        :placeholder="nameProduct.placeholder"
        v-model="nameProduct.value"
        :required="nameProduct.requiredField"
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
      />
      <GuiInput
        :label="priceProduct.label"
        :placeholder="priceProduct.placeholder"
        v-model="priceProduct.value"
        :required="priceProduct.requiredField"
      />

      <GuiButton />
    </div>
  </section>
</template>

<script>
import GuiInput from "../components/Gui/GuiInput.vue";
import GuiTextArea from "../components/Gui/GuiTextArea.vue";
import GuiButton from "../components/Gui/GuiButton.vue";

export default {
  data() {
    return {
      nameProduct: {
        value: "",
        placeholder: "Введите наименование товара",
        label: "Наименование товара",
        requiredField: true,
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
      },
      priceProduct: {
        value: "",
        placeholder: "Введите цену",
        label: "Цена товара",
        requiredField: true,
      },
    };
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
