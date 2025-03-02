import { FC } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import LeftImage1 from './LeftImage1';
import RightImage1 from './RightImage1';

/**
 * Props for `Service`.
 */
export type ServiceProps = SliceComponentProps<Content.ServiceSlice>;

/**
 * Component for "Service" Slices.
 */
const Service: FC<ServiceProps> = (slice) => {
	return (
		<>
			<LeftImage1 {...slice} />
			<RightImage1 {...slice} />
		</>
	);
};

export default Service;
