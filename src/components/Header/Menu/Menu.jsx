import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Menu({ content, href }) {
    const { menu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleClickShowLogin = () => {
        if (content === 'Đăng nhập') {
            setIsOpen(true);
            setType('login');
        }
    };

    if (href && href !== '#') {
        return (
            <Link to={href} className={menu}>
                {content}
            </Link>
        );
    }

    return (
        <div className={menu} onClick={handleClickShowLogin}>
            {content}
        </div>
    );
}

export default Menu;
