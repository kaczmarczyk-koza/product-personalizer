import { useState, useMemo } from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductOption from '../ProductOption/ProductOption';

const Product = ({name, title, basePrice, colors, sizes}) => {

  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const price = useMemo(() => {
    const sizeSeleced = sizes.find(size => size.name === currentSize);
    return basePrice + sizeSeleced.additionalPrice;
  }, [sizes, currentSize, basePrice]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Name ', title);
    console.log('Price ', price);
    console.log('Size ', currentSize);
    console.log('Color ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default Product;