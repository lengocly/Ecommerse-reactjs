import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import useTranslateX from './translateXImage';

// sau phần sản phẩm PopularProduct
function SaleHomepage() {
    const { container, title, des, boxBtn, boxImage } = styles;

    const { translateXPosition } = useTranslateX();

    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{
                    // áp dụng hiệu ứng trượt sang 2 bên cho ảnh khi cuộn xuống dưới
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
            >
                <img
                    src='https://macone.vn/wp-content/uploads/2025/03/macbook-air-m4-skyblue-gallery1-202503-1024x787.jpeg'
                    alt=''
                />
            </div>
            <div>
                <h2 className={title}>Sale từng bừng</h2>
                <p className={des}>Số lượng có hạn nhanh tay rinh quà.</p>
                <div className={boxBtn}>
                    <Button content={'Tìm hiểu'} isPrimary={false} />
                </div>
            </div>
            <div
                className={boxImage}
                style={{
                    // áp dụng hiệu ứng trượt sang 2 bên cho ảnh khi cuộn xuống dưới
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
            >
                <img
                    src='https://macone.vn/wp-content/uploads/2025/09/MacBook-Pro-M5-Screen-.png'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomepage;
