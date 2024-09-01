import { ChangeEvent, FormEvent } from 'react';

export type TSearchFormUIProps = {
	searchTerm: string;
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: FormEvent) => void;
};
