import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import styles from './ProductOption.module.scss';
import PropTypes from 'prop-types';


const ProductOption = ({submitHandler, sizes, currentSize, setCurrentSize, colors, currentColor, setCurrentColor}) => {

  return (
    <form onSubmit={submitHandler}>
      <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
      <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <Button className={styles.button} >
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductOption.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default ProductOption;