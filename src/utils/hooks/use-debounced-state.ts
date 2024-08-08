import {
	useCallback,
	useRef,
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
} from 'react';

export function useDebouncedState<S>(
	initialState: S,
	delay: number
): [state: S, setState: Dispatch<SetStateAction<S>>] {
	const [originState, setOriginState] = useState(initialState);
	const [debouncedState, setDebouncedState] = useState(initialState);

	useEffect(() => {
		const t = setTimeout(() => {
			setDebouncedState(() => ({
				...originState,
			}));
		}, delay);

		return () => {
			clearTimeout(t);
		};
	}, [originState, delay]);

	return [debouncedState, setOriginState];
}

export const useDebounce = <T extends unknown[]>(
	callback: (...args: T) => void,
	delay: number
) => {
	const timer = useRef<NodeJS.Timeout>();

	const debouncedCallback = useCallback(
		(...args: T) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}

			timer.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay]
	);

	return debouncedCallback;
};
