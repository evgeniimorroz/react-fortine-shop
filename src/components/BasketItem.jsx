const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decrQuantity = Function.prototype,
  } = props;

  return (
    <div className='collection'>
      <li className='collection-item'>
        {name}{' '}
        <i
          className=' material-icons basket-quantity'
          onClick={() => decrQuantity(id)}
        >
          remove
        </i>
        x {quantity}{' '}
        <i
          className=' material-icons basket-quantity'
          onClick={() => incQuantity(id)}
        >
          add
        </i>
        {price * quantity} UAH
        <span
          className='secondary-content'
          onClick={() => removeFromBasket(id)}
        >
          <i className='material-icons'>clear</i>
        </span>
      </li>
    </div>
  );
};

export { BasketItem };
