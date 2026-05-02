import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function Banner() {
    const { container, content, title, des } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>BetaTech</h1>
                <div className={des}>Khám phá laptop phù hợp với bạn.</div>
                <Button content={'Khám phá ngay'} />
            </div>
        </div>
    );
}

export default Banner;
