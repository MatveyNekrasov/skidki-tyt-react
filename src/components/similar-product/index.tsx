import { SimilarProductUI } from '@/components/ui/similar-product';
import { TSimilarProductProps } from './type';

export const SimilarProduct = ({ product }: TSimilarProductProps) => {
	return <SimilarProductUI product={product} />;
};
