import { API_URL, PREFIX_PRODUCT } from "./const.js";
import { 
  modalProduct,
  ingredientsCalories,
  ingredientsList,
  modalProductDescription,
  modalProductImage,
  modalProductPriceCount,
  modalProductTitle,
  modalProductBtn
} from "./elements.js";
import { getData } from "./getData.js";

export const openModal = async (id) => {
  const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`);
  modalProductTitle.textContent = product.title;
  modalProductImage.src = `${API_URL}/${product.image}`;
  modalProductPriceCount.textContent = product.price;
  ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`;
  modalProductDescription.textContent = product.description;
  ingredientsList.textContent = '';
  
  const ingredientsListItems = product.ingredients.map((item) => {
    const li = document.createElement('li');
    li.classList.add('ingredients__item');  
    li.textContent = item;
    return li;
  });

  modalProductBtn.dataset.idProduct = product.id;
  
  ingredientsList.append(...ingredientsListItems);
  modalProduct.classList.add('modal_open');
};