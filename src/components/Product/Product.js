import { useState } from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Product = ({id, name, title, basePrice, colors, sizes}) => {

  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = () => {
    const sizeSeleced = sizes.find(size => size.name === currentSize);
    return basePrice + sizeSeleced.additionalPrice;
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) =>(
                <li key={name}>
                  <button onClick={() => {setCurrentSize(size.name)}} type="button" className={clsx(size.name === currentSize && styles.active)}>{size.name}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) =>(
                  <li key={color}>
                    <button onClick={() => {setCurrentColor(color)}} type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} />
                  </li>
                ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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