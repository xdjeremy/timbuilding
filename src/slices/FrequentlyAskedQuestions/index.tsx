import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';
import CenteredFAQs from './Centered';
import DefaultFAQs from './Default';

/**
 * Props for `FrequentlyAskedQuestions`.
 */
export type FrequentlyAskedQuestionsProps =
	SliceComponentProps<Content.FrequentlyAskedQuestionsSlice>;

/**
 * Component for "FrequentlyAskedQuestions" Slices.
 */
const FrequentlyAskedQuestions: FC<FrequentlyAskedQuestionsProps> = (slice) => {
	return (
		<>
			<DefaultFAQs {...slice} />
			<CenteredFAQs {...slice} />
		</>
	);
};

export default FrequentlyAskedQuestions;
