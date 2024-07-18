import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To eShop',
  description: 'We offer the best electronics for the lowest prices!',
  keywords: 'electronics, buy electronics, cheap electroincs',
};

export default Meta;