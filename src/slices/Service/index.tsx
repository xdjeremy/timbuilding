import { FC } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import LeftImage1 from './LeftImage1';

/**
 * Props for `Service`.
 */
export type ServiceProps = SliceComponentProps<Content.ServiceSlice>;

/**
 * Component for "Service" Slices.
 */
const Service: FC<ServiceProps> = ( slice ) => {
  console.log(slice.slice.primary)
	return (
		<>
			<LeftImage1 {...slice} />
		</>
	);
};

export default Service;
