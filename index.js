console.log('/************************** Debug **************************/')
console.time('Full script');

const productInfo = document.querySelector('.main-product-container');

/**
* Function return first DOMelement by selector
*
* @param {string} selector
* @param {nodeElement=} from
* @return {nodeElement}
*/
const getElem = (selector, from = productInfo) => {
  return from.querySelector(selector);
}

/**
* Function return data for first product block from:
* - children of .main-product-container
* - window.tc_vars
*
* @return {object}
*/
const getDataProduct = () => {

  /**
  * Save path product without name in arrCategoriesPath{object}
  *
  * @type arrFullProductPath{array} !array with all DOMelements of path
  * @type arrCategoriesPath{array} !array with elements of path without product name
  */
  const arrFullProductPath = [].slice.call(productInfo.querySelectorAll('.breadcrumb-wrapper > .breadcrumb-item')),
        arrCategoriesPath = [];
  for(let i = 0, len = arrFullProductPath.length - 1; i < len; i++) {
    arrCategoriesPath[i] = arrFullProductPath[i].textContent.trim();
  }

  /**
  * Save all data about color variations in arrProductColors{array}
  *
  * @type arrElemetntsColors{array} !array with all DOMelements for change color
  * @type arrProductColors{array} !array with elements of path without product name
  */
  const arrElemetntsColors = [].slice.call(productInfo.querySelectorAll('#product-thumnail .swiper-wrapper > *')),
        arrProductColors = [];
  for(let i = 0, len = arrElemetntsColors.length; i < len; i++) {
    const buttonColor = arrElemetntsColors[i].querySelector('a'),
          nameColor = buttonColor.getAttribute('data-title'),
          imgColor = buttonColor.querySelector('img'),
          idColor = buttonColor.id;
    arrProductColors[i] = {
      idColor: idColor,
      imgColor: imgColor,
      nameColor: nameColor
    };
  }

  /**
  * Save all data about sizes in objProductSizes{object}
  *
  * @type productSizeInputs{nodeList} !nodeList with all input:hidden with info about productSize and quantity
  * @type objProductSizes{object} !object with objects with info for product size
  */
  const productSizeInputs = productInfo.querySelectorAll('.product-size > input[type="hidden"]'),
        objProductSizes = {};
  for(let i = 0, len = productSizeInputs.length; i < len; i++) {
    const productSizeSplit = productSizeInputs[i].id.split('_'),
          productSizeId = productSizeSplit[0],
          productSizeOption = productSizeSplit[1],
          productSizeValue = productSizeInputs[i].value;
    objProductSizes[productSizeId] = {...objProductSizes[productSizeId], ...{[productSizeOption]: productSizeValue}};
  }

  const productArticle = getElem('.ref-product') ? getElem('.ref-product').textContent.trim() : null,
        productBrandImg = getElem('.brand > img'),
        productButtonWishList = getElem('#add_to_wishlist_button'),
        productName = getElem('#productName') ? getElem('#productName').textContent.trim() : null,
        productRating = getElem('.product-rating-wrapper'),
        productPrice = +(tc_vars['product_unitprice_ati']),
        productPromo = getElem('#promo_percent') ? getElem('#promo_percent').textContent.trim() : null,
        productOldPrice = getElem('#old_price') ? getElem('#old_price').textContent.trim() : null,
        productSliderBox = getElem('.prod_box_content'),
        productReservation = getElem('#tab-store'),
        productAddToCart = getElem('.add_to_cart'),
        helpWidthSelectSize = getElem('#Sizolution'),
        tableWithSize = getElem('.guide_size'),
        inputForEmail = getElem('.alert-email-available-container'),
        productDesc = getElem('.concuPourBloc.concuPourBlocExpressBuy') ? getElem('.concuPourBloc.concuPourBlocExpressBuy').textContent.trim() : null,
        productDescCatch = getElem('.catchline') ? getElem('.catchline').textContent.trim() : null;

  return {
    arrCategoriesPath: arrCategoriesPath,
    productArticle: productArticle,
    productBrandImg: productBrandImg,
    productButtonWishList: productButtonWishList,
    productName: productName,
    productRating: productRating,
    productDesc: productDesc,
    productDescCatch: productDescCatch,
    arrProductColor: arrProductColors,
    objProductSizes: objProductSizes,
    productPrice: productPrice,
    productPromo: productPromo,
    productOldPrice: productOldPrice,
    productSliderBox: productSliderBox,
    productReservation: productReservation,
    productAddToCart: productAddToCart,
    helpWidthSelectSize: helpWidthSelectSize,
    tableWithSize: tableWithSize,
    inputForEmail: inputForEmail
  }
}

/**
* Function return data for second product block from:
* -
* -
* -
*
* @return {object}
*/
const getSecondDataProduct = () => {



  return {

  }
}

/**
* Create header element
*
* @param {object} data
* @return {object}
*/
const createHeaderElement = (data) => {
  const element = document.createElement('div');
        element.id = 'kam_header-product-info';
        element.innerHTML = `
            <div class="kam_header-product-info_slider">
              <!-- insert slider box element -->
            </div>
            <div class="kam_header-product-info_about">
              <div class="kam_header-product-info_path-article">
                <div class="kam_header-product-info_path">
                  ${data.arrCategoriesPath.join('<span class="kam_separator">\\</span>')}
                </div>
                <div class="kam_header-product-info_article">
                  ${data.productArticle}
                </div>
              </div>
              <div class="kam_header-product-info_name-brand">
                <h2 class="kam_header-product-info_product-name">
                  ${data.productName.toUpperCase()}
                </h2>
              </div>
              <div class="kam_header-product-info_rating-wish">
                <div class="kam_header-product-info_rating">
                  <!-- insert product rating element -->
                </div>
                <div class="kam_header-product-info_wish">
                  <!-- insert product wish element -->
                </div>
              </div>
              <div class="kam_header-product-info_description">
                <p>${data.productDesc}</p>
                <p>${data.productDescCatch}</p>
              </div>
              <div class="kam_header-product-info_color-size"></div>
              <div class="kam_header-product-info_price-add-reserve">
                <div class="kam_header-product-info_price">
                  ${data.productPrice} P
                </div>
                <div class="kam_header-product-info_add">
                  <!-- insert product button add to cart -->
                </div>
                <div class="kam_header-product-info_reserve">
                  <!-- insert product button reserve -->
                </div>
              </div>
              <div class="kam_header-product-info_footer">
                <div class="kam_header-product-info_mark">
                  Цены и количество в интернет-магазине могут отличаться от магазинов
                </div>
                <div class="kam_header-product-info_amount">
                  <!-- insert product amount element -->
                </div>
              </div>
            </div>
          `;

  /**
  *
  *
  */
  const insertElement = (selector, elem, pos = 'afterBegin') => {
    element.querySelector(selector).insertAdjacentElement(pos, elem);
  }

  /**
  *
  *
  */
  const insertSizeElement = (sizes) => {
    const sizeElement = document.createElement('div');
          sizeElement.className = "kam_header-product-info_size";
          sizeElement.setAttribute('data-select', 'null');
    for(let i in sizes) {
      if(i == 'add') continue;
      let available = 'kam_size-available';
      if(sizes[i].availability == "U") {
        available = 'kam_size-unavailable';
      }
      sizeElement.innerHTML += `<div class="kam_header-product-info_size-element ${available}" data-size-id="${i}" data-size-avail="${available}" data-size-quantity="${sizes[i].quantity}">${sizes[i].desc}</div>`;
    }

    const allSizeElement = [].slice.call(sizeElement.querySelectorAll('.kam_header-product-info_size-element'));

    /**
    *
    *
    */
    const selectSize = (elem) => {
      const choice = {
        id: elem.getAttribute('data-size-id'),
        quantity: elem.getAttribute('data-size-quantity'),
        name: elem.textContent.trim()
      }

      allSizeElement.forEach(e => e.classList.remove('kam_size-active'));
      elem.classList.add('kam_size-active');
      elem.parentNode.setAttribute('data-select', JSON.stringify(choice));
      element.querySelector('.kam_header-product-info_amount').innerHTML = choice.quantity + " шт.";
    }

    allSizeElement.forEach(e => {
      e.addEventListener('click', () => selectSize(e));
    });

    return sizeElement;
  }

  insertElement('.kam_header-product-info_slider', data.productSliderBox);
  insertElement('.kam_header-product-info_product-name', data.productBrandImg, 'afterEnd');
  insertElement('.kam_header-product-info_rating-wish', data.productRating);
  insertElement('.kam_header-product-info_rating-wish', data.productButtonWishList, 'beforeEnd');
  insertElement('.kam_header-product-info_add', data.productAddToCart);
  insertElement('.kam_header-product-info_reserve', data.productReservation);
  insertElement('.kam_header-product-info_color-size', insertSizeElement(data.objProductSizes));



  return element;
}

/**
*
*
*/
const renderElements = (header, second) => {
  productInfo.insertAdjacentElement('afterBegin', header);
}

/**
*
*
*/
const deleteElements = (selectorHeader, selectorSecond) => {

}

deleteElements('.main-product-container', null);

renderElements(createHeaderElement(getDataProduct()), null);

// 100% = 80px
// 80% = 64px
// 60% = 48px
// 40% = 32px
// 20% = 16px
// .node$
// var nod5 = window.getComputedStyle(
//      document.querySelector('.note4'), ':after'
// ).getPropertyValue('width');





const pageInfo = {...getDataProduct(), ...getSecondDataProduct()};
console.log(pageInfo);
console.timeEnd('Full script');
console.log('/************************** Debug **************************/');
