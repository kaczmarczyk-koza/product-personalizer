import propTypes from 'prop-types';
import styles from './ProductImage.module.scss';

const ProductImage = ({name, title, currentColor}) => {
    return (
        <div className={styles.imageContainer}>
            <img 
            className={styles.image}
            alt={title}
            src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
    )
}

ProductImage.porpTypes = {
    name: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    currentColor: propTypes.string.isRequired,
}

export default ProductImage;