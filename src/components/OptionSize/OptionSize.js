import PropTypes from 'prop-types';
import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import shortid from 'shortid';

const OptionSize = ({sizes, setCurrentSize, currentSize}) => {

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {sizes.map((size) =>(
                    <li key={shortid()}>
                    <button onClick={() => {setCurrentSize(size.name)}} type="button" className={clsx(size.name === currentSize && styles.active)}>{size.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    )    
}

OptionSize.propTypes={
    sizes: PropTypes.array,
    setCurrentSize: PropTypes.func,
    currentSize: PropTypes.string,
};

export default OptionSize;