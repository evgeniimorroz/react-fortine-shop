export const GoodsItem = (props) => {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className='card hoverable'>
      <div className='card-image '>
        <img src={full_background} alt={name} />
      </div>
      <div className='card-content'>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </button>
        {/* {<span className='card-title'>{name}</span>} */}
        {<span className='right'>{price} UAH</span>}
      </div>
    </div>
  );
};
