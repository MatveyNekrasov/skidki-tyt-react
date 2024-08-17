import * as styles from './header.module.scss';

import { Logo } from '@/components/ui/logo';
import { ShopList } from '@/components/shop-list';
import { SearchForm } from '@/components/search-form';
import { MenuList } from '@/components/menu-list';
import { SortButton } from '@/components/sort-button';

export const HeaderUI = () => {
	return (
		<header>
			<div className={styles.wrapper}>
				<div className={styles.layout}>
					{/* <details className='mobile__header__menu'>
						<summary className='mobile__header__menu-title'>
							<img
								src='./svg/icon_menu.svg'
								alt='Графический элемент,
            указывающий на возможность раскрытия меню'
								className='mobile__header__menu-image'
							/>
						</summary>
					</details> */}
					<Logo />
					<ShopList />
					<SearchForm />
				</div>
			</div>
			<div className={styles.menuWrapper}>
				<nav className={styles.menu}>
					<MenuList />
					<SortButton />
				</nav>
			</div>
		</header>
	);
};
