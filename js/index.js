const modalProduct = document.querySelector('.modal_product');
const catalogList = document.querySelector('.catalog__list');


const product = {
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

const modalProductTitle = document.querySelector('.modal-product__title ');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductDescription = document.querySelector('.modal-product__description');
const modalProductPriceCount = document.querySelector('.modal-product__price-count');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsCalories = document.querySelector('.ingredients__calories');

modalProductTitle.textContent = product.title;
modalProductImage.src =  product.image;
modalProductPriceCount.textContent = product.price;
ingredientsCalories.textContent = product.calories;
modalProductDescription.textContent = product.description;
ingredientsList.textContent = '';


const ingredientsListItems = product.ingredients.map((item) => {
  const li = document.createElement('li');
  li.classList.add('ingredients__item');  
  li.textContent = item;
  return li;
});

ingredientsList.append(...ingredientsListItems);



catalogList.addEventListener('click',(event) => {
  const target = event.target;

  if  (
        target.closest('.product__detail') || 
        target.closest('.product__image')
      ) {
    modalProduct.classList.add('modal_open');
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
