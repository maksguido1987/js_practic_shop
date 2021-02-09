class Products {
   constructor() {
      this.classNameActive = " products-element__btn_active";
      this.labelAdd = "Добавить в корзину";
      this.labelRemove = "Удалить из корзины";
   }
   render() {
      const productsStore = localeStorageUtil.getProducts(); // данные из хранилища
      let htmlCatalog = '';
      CATALOG.forEach(({ id, name, image, price }) => {

         let activeText = '';
         let activeClass = '';

         if (productsStore.indexOf(id) === -1) {  // если в ls нет id, значит добавляем, иначе удаляем
            activeText = this.labelAdd;
         } else {
            activeText = "Удалить из корзины";
            activeClass = this.classNameActive;
         }

         htmlCatalog += `
         <li class="products-element">
            <span class="products-element__name">${name}</span>
            <img class="products-element__img" src="${image}">
            <span class="products-element__price">
               👍 ${price.toLocaleString()} USD
            </span>
            <button class="products-element__btn${activeClass}">${activeText}</button>
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