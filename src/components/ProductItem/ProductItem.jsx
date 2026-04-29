import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

//list sp (nhận đc ảnh, ảnh 2, tên, giá)
function ProductItem({ src, prevSrc, name, price }) {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl
    } = styles;
    return (
        <div>
            <div className={boxImg}>
                {/* img đầu tiên là ảnh gốc khi chưa hover */}
                <img src={src} alt='' />
                {/* ảnh 2 là ảnh sau khi hover */}
                <img src={prevSrc} alt='' className={showImgWhenHover} />

                {/* khi hover hiện các công cụ */}
                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>

            {/* title */}
            <div className={title}>{name}</div>
            <div className={priceCl}>{price}</div>
        </div>
    );
}

export default ProductItem;
