import footerLogo from '@/images/svg/heart_footer.svg';

import * as styles from './footer.module.scss';

export const FooterUI = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerLayout}>
				<div className={styles.footerFormsWrapper}>
					<button className={styles.footerContactUs}>Связаться с нами</button>
					<form action='' className={styles.footerSubscriptionForm}>
						<label htmlFor='footer__email' className={styles.footerEmailLabel}>
							Подписка на рассылку
						</label>
						<input
							type='email'
							id='footer__email'
							className={styles.footerEmail}
							placeholder='Введите Email'
						/>
					</form>
				</div>
				<div className='footer__about-us-wrapper'>
					<ul className={styles.footerAboutUsList}>
						<li className={styles.footerAboutUsItem}>О нас</li>
						<li className={styles.footerAboutUsItem}>Продавать с нами</li>
						<li className={styles.footerAboutUsItem}>Клубная карта</li>
						<li className={styles.footerAboutUsItem}>Подарочные сертификаты</li>
						<li className={styles.footerAboutUsItem}>Найти магазин</li>
						<li className={styles.footerAboutUsItem}>Карьера и вакансии</li>
					</ul>
				</div>
				<div className={styles.footerLogo}>
					<img
						src={footerLogo}
						alt='логотип в виде сердца'
						className='footer__logo-image'
					/>
				</div>
			</div>
		</footer>
	);
};
