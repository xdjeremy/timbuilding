import { FC } from 'react';
import { ServiceProps } from '..';
import { OutlineSpark, PinkCircle } from '@/constants/icons';
import ImageBlock from './ImageBlock';
import ContentBlock from './ContentBlock';
import ButtonGroup from './ButtonGroup';
import { Bounded } from '@/components/Bounded';
import Container from '@/components/Container';

const LeftImage1: FC<ServiceProps> = ({ slice }) => {
	const { badge, image, title, description, button } = slice.primary;

	if (slice.variation !== 'default') return null;

	return (
		<Bounded as='section' data-slice-variation={slice.variation}>
			<Container>
				<div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20 relative'>
					<ImageBlock image={image} />
					<div className='order-1 md:order-2'>
						{slice.variation === 'default' && (
							<ContentBlock
								badge={badge as string}
								title={title}
								description={description}
								items={slice.primary.items}
							/>
						)}
						<ButtonGroup button={button} />
					</div>
					<PinkCircle className='w-[73px] h-[73px] absolute -top-10 end-px right-6 md:w-[94px] md:h-[94px]' />
					<OutlineSpark className='w-[34px] h-[55px] absolute -top-2 end-px -right-2 md:w-[51px] md:-right-4 md:top-4' />
				</div>
			</Container>
		</Bounded>
	);
};

export default LeftImage1;
