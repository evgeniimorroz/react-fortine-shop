export const Footer = () => {
  return (
    <footer className='page-footer   teal accent-3'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a
            className='grey-text text-lighten-4 right'
            href='https://https://github.com/evgeniimorroz/react-fortine-shop'
            rel='noreferrer'
            traget='_blank'
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};
