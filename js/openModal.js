import { 
  modalProduct,
  ingredientsCalories,
  ingredientsList,
  modalProductDescription,
  modalProductImage,
  modalProductPriceCount,
  modalProductTitle
} from "./elements.js";

export const openModal = (product) => {
  modalProductTitle.textContent = product.title;
  modalProductImage.src =  product.image;
  modalProductPriceCount.textContent = product.price;
  ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`;
  modalProductDescription.textContent = product.description;
  
  const ingredientsListItems = product.ingredients.map((item) => {
    const li = document.createElement('li');
    li.classList.add('ingredients__item');  
    li.textContent = item;
    return li;
  });
  
  ingredientsList.textContent = '';
  ingredientsList.append(...ingredientsListItems);

  modalProduct.classList.add('modal_open');
};