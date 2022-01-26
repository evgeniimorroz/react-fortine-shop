import { BasketItem } from './BasketItem';

const BasketLIst = (props) => {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decrQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>
        Корзина
        <span className='right'>
          <i className='material-icons' onClick={handleBasketShow}>
            clear
          </i>
        </span>
      </li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decrQuantity={decrQuantity}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: {totalPrice} UAH
      </li>

      <button className='secondary-content blue darken-4 right btn-small buy-btn'>
        Оформить
      </button>
    </ul>
  );
};

export { BasketLIst };
