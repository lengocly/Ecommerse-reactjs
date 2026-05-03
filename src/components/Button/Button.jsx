import styles from './styles.module.scss';
import classNames from 'classnames';

// go to shop
// có 2 loại button: primaryBtn và secondaryBtn, mặc định là primaryBtn, nếu muốn là secondaryBtn thì truyền isPrimary = false vào props
function Button({ content, isPrimary = true }) {
    const { btn, primaryBtn, secondaryBtn } = styles;
    return (
        <button
            className={classNames(btn, {
                [primaryBtn]: isPrimary,
                [secondaryBtn]: !isPrimary
            })}
        >
            {content}
        </button>
    );
}
//

export default Button;
