/**
 * =============================================================================
 * TRANG CHI TIẾT SẢN PHẨM (/product/:id)
 * =============================================================================
 * - Đọc id từ URL, gọi API getProductById, hiển thị gallery + thông tin + breadcrumb.
 * - Giao diện tham khảo shop điện tử: 2 cột, ảnh lớn + thumbnail, giá, thông số, CTA.
 * =============================================================================
 */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';
import { getProductById } from '@/apis/productsService';
import styles from './styles.module.scss';

const IMG_FALLBACK =
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=960&h=960&q=80';

function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        let cancelled = false;
        setError('');
        setProduct(null);
        setActiveIdx(0);
        getProductById(id)
            .then((data) => {
                if (!cancelled) setProduct(data.product);
            })
            .catch(() => {
                if (!cancelled) setError('Không tải được sản phẩm. Kiểm tra API hoặc ID.');
            });
        return () => {
            cancelled = true;
        };
    }, [id]);

    if (error) {
        return (
            <>
                <MyHeader />
                <main className={styles.wrap}>
                    <p className={styles.err}>{error}</p>
                    <Link to='/'>← Về trang chủ</Link>
                </main>
                <MyFooter />
            </>
        );
    }

    if (!product) {
        return (
            <>
                <MyHeader />
                <main className={styles.wrap}>
                    <p className={styles.loading}>Đang tải…</p>
                </main>
                <MyFooter />
            </>
        );
    }

    const images =
        product.images && product.images.length > 0 ? product.images : [IMG_FALLBACK];
    const mainSrc = images[Math.min(activeIdx, images.length - 1)] || IMG_FALLBACK;
    const cat = product.category;
    const parentCat = cat?.parent;

    return (
        <>
            <MyHeader />
            <main className={styles.wrap}>
                <nav className={styles.breadcrumb} aria-label='Breadcrumb'>
                    <Link to='/'>Trang chủ</Link>
                    <span className={styles.crumbSep}>›</span>
                    {parentCat ? (
                        <>
                            <span className={styles.crumbMuted}>{parentCat.name}</span>
                            <span className={styles.crumbSep}>›</span>
                        </>
                    ) : null}
                    {cat ? (
                        <>
                            <span className={styles.crumbMuted}>{cat.name}</span>
                            <span className={styles.crumbSep}>›</span>
                        </>
                    ) : null}
                    <span className={styles.crumbCurrent}>{product.name}</span>
                </nav>

                <div className={styles.grid}>
                    <div className={styles.gallery}>
                        <div className={styles.mainShot}>
                            <img
                                src={mainSrc}
                                alt={product.name}
                                onError={(e) => {
                                    e.currentTarget.src = IMG_FALLBACK;
                                }}
                            />
                        </div>
                        <div className={styles.thumbs}>
                            {images.map((src, i) => (
                                <button
                                    key={i}
                                    type='button'
                                    className={
                                        i === activeIdx ? styles.thumbActive : styles.thumb
                                    }
                                    onClick={() => setActiveIdx(i)}
                                >
                                    <img src={src} alt='' />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.info}>
                        <h1 className={styles.title}>{product.name}</h1>
                        <p className={styles.price}>{product.price}</p>
                        <p className={styles.stock}>
                            {product.stock > 0
                                ? `Còn ${product.stock} sản phẩm`
                                : 'Tạm hết hàng'}
                        </p>

                        <div className={styles.trust}>
                            <p>✓ Hàng chính hãng BetaTech</p>
                            <p>✓ Giá đã bao gồm VAT</p>
                            <p>✓ Giao hàng toàn quốc</p>
                        </div>

                        <div className={styles.specs}>
                            <h2 className={styles.specsTitle}>Thông số kỹ thuật</h2>
                            <dl className={styles.specList}>
                                {product.cpu ? (
                                    <>
                                        <dt>CPU</dt>
                                        <dd>{product.cpu}</dd>
                                    </>
                                ) : null}
                                {product.ram ? (
                                    <>
                                        <dt>RAM</dt>
                                        <dd>{product.ram}</dd>
                                    </>
                                ) : null}
                                {product.storage ? (
                                    <>
                                        <dt>Ổ cứng / Dung lượng</dt>
                                        <dd>{product.storage}</dd>
                                    </>
                                ) : null}
                                {product.screen ? (
                                    <>
                                        <dt>Màn hình</dt>
                                        <dd>{product.screen}</dd>
                                    </>
                                ) : null}
                                {!product.cpu &&
                                !product.ram &&
                                !product.storage &&
                                !product.screen ? (
                                    <dd className={styles.specEmpty}>
                                        Xem mô tả trên bao bì hoặc liên hệ tư vấn.
                                    </dd>
                                ) : null}
                            </dl>
                        </div>

                        <div className={styles.actions}>
                            <button type='button' className={styles.btnPrimary}>
                                Mua ngay
                            </button>
                            <div className={styles.btnRow}>
                                <button type='button' className={styles.btnSecondary}>
                                    Thêm vào giỏ
                                </button>
                                <button type='button' className={styles.btnSecondary}>
                                    Mua trả góp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <MyFooter />
        </>
    );
}

export default ProductDetailPage;
