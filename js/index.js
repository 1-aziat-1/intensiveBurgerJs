import { createCardProduct } from "./createCardProduct.js";
import { 
  catalogList,
  modalProduct,
} from "./elements.js";
import { navigationListContoller } from "./navigationListContoller.js";
import { openModal } from "./openModal.js";
import { renderListProduct } from "./renderListProduct.js";


const burgerMax = {
  title: 'burger Mask',
  price: 10000,
  weight: 5000,
  calories: 15000,
  description: 'ogromn',
  image: '../img/burger2.jpg',
  ingredients: [
    'bulocjhka',
    'meso',
  ]
}

catalogList.addEventListener('click',(event) => {
  const target = event.target;

  if  (
        target.closest('.product__detail') || 
        target.closest('.product__image')
      ) {
    openModal(burgerMax);
    
  }
});

modalProduct.addEventListener('click',(event) => {
  const target = event.target;

  if (
      target.closest('.modal__close') ||
      target === modalProduct
    ) {
    modalProduct.classList.remove('modal_open');
  }
});

const init = () => {
  renderListProduct();
  navigationListContoller();
};

init();
