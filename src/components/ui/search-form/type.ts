import { ChangeEvent } from 'react';

export type TSearchFormUIProps = {
	searchTerm: string;
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
