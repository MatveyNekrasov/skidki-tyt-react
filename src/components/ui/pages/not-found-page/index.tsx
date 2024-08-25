import { Link } from 'react-router-dom';
import * as styles from './not-found-page.module.scss';

export const NotFoundPageUI = () => (
	<div className={styles.notFoundWrapper}>
		<div className={styles.notfound}>
			<div className={styles.notfound404}>
				<div></div>
				<h1>404</h1>
			</div>
			<h2>Page not found</h2>
			<p>
				The page you are looking for might have been removed had its name
				changed or is temporarily unavailable.
			</p>
			<Link to='/'>home page</Link>
		</div>
	</div>
);
