import { cartInit } from "./cart.js";
import { createCardProduct } from "./createCardProduct.js";
import { 
  catalogList,
  modalProduct,
} from "./elements.js";
import { navigationListContoller } from "./navigationListContoller.js";
import { openModal } from "./openModal.js";
import { renderListProduct } from "./renderListProduct.js";

catalogList.addEventListener('click',(event) => {
  const target = event.target;

  if  (
        target.closest('.product__detail') || 
        target.closest('.product__image')
      ) {
    const id = target.closest('.product').dataset.idProduct;
    openModal(id);
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
  navigationListContoller(renderListProduct);
  cartInit();
};

init();
