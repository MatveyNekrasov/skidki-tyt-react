import { TSaleDetailsUIProps } from './type';

import * as styles from './sale-details.module.scss';

import bookmarkImage from '@/images/svg/bookmark.svg';

export const SaleDetailsUI = ({ saleData }: TSaleDetailsUIProps) => {
	const {
		image,
		description,
		price,
		priceOffPercent,
		salePrice,
		shopImg,
		shortName,
		url,
		feature,
	} = saleData;

	return (
		<main className={styles.main}>
			<div className={styles.layout}>
				<article className={styles.saleCard}>
					<div className={styles.imageWrapper}>
						<img
							src={image}
							alt='Картинка товара'
							className={styles.productImage}
						/>
						{/* <div className='product-card__image-slider-wrapper'></div> */}
					</div>
					<div className={styles.productInfo}>
						<h2 className={styles.productTitle}>{shortName}</h2>
						<div className={styles.productDescription}>{description}</div>
					</div>
					{feature && (
						<>
							<h3 className={styles.featuresTitle}>Особенности товара</h3>
							<div className={styles.featuresText}>{feature}</div>
						</>
					)}
					<button type='button' className={styles.favoriteButton}>
						<img
							src={bookmarkImage}
							alt='Поместить в закладки'
							className={styles.favoriteImage}
						/>
					</button>
				</article>
			</div>
			<aside className={styles.asideInfo}>
				<div className={styles.priceInfo}>
					<div className={styles.prices}>
						<p className={styles.salePrice}>{`${price} ₽`}</p>
						<p className={styles.priceOffPercent}>{`${priceOffPercent}%`}</p>
						<p className={styles.fullPrice}>{`${salePrice} ₽`}</p>
					</div>
					<a
						href={url}
						className={styles.productButton}
						target='_blank'
						rel='noreferrer'
					>
						Перейти к товару
					</a>
				</div>
				<div className={styles.shopInfo}>
					<img
						src={shopImg}
						alt='Иконка магазина'
						className={styles.shopImage}
					/>
					<button className={styles.shopButton} type='button'>
						Все товары магазина
					</button>
				</div>
			</aside>
		</main>
	);
};
