import { TMarketingFormUIProps } from './type';

import * as styles from './marketing-form.module.scss';
import { Preloader } from '../preloader';

export const MarketingFormUI = ({
	shopsList,
	selectedShop,
	suggestions,
	selectedSuggestion,
	generatedUrl,
	handleShopUpdate,
	handleSuggestionChange,
	handleSubmit,
	isLoading,
}: TMarketingFormUIProps) => {
	return (
		<main className={styles.main}>
			<h2 className={styles.formHeading}>Тестовая формочка для маркетинга</h2>

			<form name='marketing' className={styles.form} onSubmit={handleSubmit}>
				<label htmlFor='productSelect'>Выберите продукт</label>
				<select
					value={selectedShop}
					onChange={handleShopUpdate}
					name='productSelect'
				>
					{shopsList.map((shop) => (
						<option key={shop.id} value={shop.name}>
							{shop.name}
						</option>
					))}
				</select>

				<div className={styles.suggestionsContainer}>
					<h3>Предложения:</h3>
					{isLoading ? (
						<Preloader />
					) : (
						<ul>
							{suggestions.map((suggestion) => (
								<li key={suggestion.id} className={styles.suggestionItem}>
									<input
										type='radio'
										name='suggestion'
										value={suggestion.id}
										onChange={handleSuggestionChange}
										checked={selectedSuggestion === suggestion.id.toString()}
									/>
									<img
										src={suggestion.image}
										alt={suggestion.name}
										className={styles.suggestionImage}
									/>
									<div className={styles.suggestionInfo}>
										<span className={styles.suggestionName}>
											{suggestion.name}
										</span>
										<a
											href={suggestion.url}
											target='_blank'
											rel='noopener noreferrer'
											className={styles.suggestionLink}
										>
											Подробнее
										</a>
									</div>
								</li>
							))}
						</ul>
					)}
				</div>

				<button type='submit' className={styles.submitButton}>
					Submit
				</button>
			</form>

			{generatedUrl && (
				<div className={styles.generatedUrlContainer}>
					<h3>Сгенерированный URL:</h3>
					<input
						type='text'
						value={generatedUrl}
						readOnly
						className={styles.generatedUrlInput}
					/>
				</div>
			)}
		</main>
	);
};
