import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '@/apis/categoriesService';
import styles from '../styles.module.scss';

function ProductsMenu() {
    const {
        menu,
        menuDropdownWrap,
        menuDropdown,
        menuGroup,
        menuGroupTitle,
        menuChildLink
    } = styles;

    const [categories, setCategories] = useState([]);

    //nếu có dữ liệu thì setCategories, nếu không thì setCategories rỗng
    useEffect(() => {
        getCategories()
            .then((res) => setCategories(res.categories ?? []))
            .catch(() => setCategories([]));
    }, []);

    return (
        <div className={menuDropdownWrap}>
            <div className={menu}>Sản phẩm</div>

            {/* nếu có dữ liệu thì hiển thị danh mục sản phẩm, nếu không thì hiển thị rỗng */}
            {categories.length > 0 && (
                <div className={menuDropdown}>
                    {categories.map((parent) => (
                        <div key={parent.id} className={menuGroup}>
                            <div className={menuGroupTitle}>
                                {parent.name}
                            </div>
                            {(parent.children ?? []).map((child) => (
                                <Link
                                    key={child.id}
                                    className={menuChildLink}
                                    to={`/danh-muc/${child.slug}`}
                                >
                                    {child.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductsMenu;