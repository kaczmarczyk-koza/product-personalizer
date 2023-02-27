import { useState } from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductOption from '../ProductOption/ProductOption';

const Product = ({name, title, basePrice, colors, sizes}) => {

  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const getPrice = () => {
    const sizeSeleced = sizes.find(size => size.name === currentSize);
    return basePrice + sizeSeleced.additionalPrice;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Name ', title);
    console.log('Price ', getPrice());
    console.log('Size ', currentSize);
    console.log('Color ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductOption
          submitHandler={submitHandler}
          sizes={sizes} 
          setCurrentSize={setCurrentSize}
          currentSize={currentSize}
          colors={colors} 
          setCurrentColor={setCurrentColor} 
          currentColor={currentColor} 
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  basePrice: PropTypes.number,
  colors: PropTypes.array,
  sizes: PropTypes.array,
}

export default Product;