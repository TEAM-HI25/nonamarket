const PRODUCT_NAME_CHECK = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]{2,15}$/;
const PRODUCT_PRICE_CHECK = /^[0-9\\,]*$/;
const SALE_LINK_CHECK =
  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/;
const regex = { PRODUCT_NAME_CHECK, PRODUCT_PRICE_CHECK, SALE_LINK_CHECK };

export default regex;
