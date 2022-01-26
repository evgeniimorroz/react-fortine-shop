import { useEffect } from 'react';

const Alert = (props) => {
  const { name = '', handleCloseAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(handleCloseAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-line
  }, [name]);

  return <div id='toast-container'>{name} добавлен в корзину</div>;
};

export { Alert };
