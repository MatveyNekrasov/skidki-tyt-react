import * as styles from './logo.module.scss';

import logo from '../../../images/svg/logo1.svg';

export const Logo = () => {
	return (
		<>
			<a href='/' className={styles.logo}>
				<img src={logo} alt='Основной логотип' className={styles.logoImg} />
			</a>
			<a href='/' className={styles.link}>
				<h1 className={styles.title}>
					Скидки - <span className={styles.accent}>тут</span>
				</h1>
			</a>
		</>
	);
};
