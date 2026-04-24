import styles from './styles.module.scss';

// go to shop
function Button({ content }) {
    const { btn } = styles;
    return <button className={btn}>{content}</button>;
}

export default Button;
