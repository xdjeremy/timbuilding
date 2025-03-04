import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';
import DefaultCTA from "./DefaultCTA";
import CTATwoButtons from "./CTATwoButtons";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ( slice ) => {

	return (
		<>
			<DefaultCTA {...slice} />
			<CTATwoButtons {...slice} />
		</>
	);
};

export default CallToAction;
