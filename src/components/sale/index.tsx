import { SaleUI } from '@/components/ui/sale';
import { TSaleProps } from './type';

export const Sale = ({ sale }: TSaleProps) => {
	return <SaleUI sale={sale} />;
};
