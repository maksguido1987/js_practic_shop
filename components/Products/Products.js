class Products {
   render() {
      let htmlCatalog = '';
      CATALOG.forEach(({id, name, image, price}) => {
         htmlCatalog += `
         <li class="products-element">
            <span class="products-element__name">${name}</span>
            <img class="products-element__img" src="${image}">
            <span class="products-element__price">
               👍 ${price.toLocaleString()} USD
            </span>
            <button class="products-element__btn">Добавить в корзину</button>
         </li>
         `;
      });
      const html = `
         <ul class="products-container">
            ${htmlCatalog}
         </ul>
      `;
      ROOT__PRODUCTS.innerHTML = html;
   }
}

const productsPage = new Products();
productsPage.render();