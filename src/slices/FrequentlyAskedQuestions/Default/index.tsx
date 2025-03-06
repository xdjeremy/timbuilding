import { Bounded } from '@/components/Bounded';
import { PrismicRichText } from '@/components/PrismicRichText';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@relume_io/relume-ui';
import { Sparkle } from 'lucide-react';
import React, { FC } from 'react';
import { FrequentlyAskedQuestionsProps } from '..';
import { JSXMapSerializer } from '@prismicio/react';
import Container from '@/components/Container';

const component: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className='rb-5 mb-5 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl'>
      {children}
    </h2>
  ),
  paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};

const DefaultFAQs: FC<FrequentlyAskedQuestionsProps> = ({ slice }) => {
  const { faqs, text } = slice.primary;

  if (slice.variation !== 'default') return null

  return (
    <Bounded
			as='section'
			className='font-redhat text-brand-dark-blue px-[5%] py-16 md:py-24 lg:py-28 border-b-4 border-black relative'>
			<Container className='grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20'>
				<div>
					<PrismicRichText field={text} components={component} />
					<div className='mt-6 md:mt-8 relative'>
						<Sparkle className='w-[107px] h-[150px] absolute fill-[#DB2777] stroke-1 -top-12 left-32 md:top-1/2 md:left-32 lg:left-40 lg:w-[170px]' />
						<Sparkle className='w-[75px] h-[100px] absolute fill-[#FBBF24] stroke-1 left-52 top-8 md:top-28  md:left-56 lg:left-72 lg:w-[108px]' />
					</div>
				</div>
				<Accordion type='multiple' className='mt-20 md:mt-0'>
					{faqs.map(({ question, answer }) => (
						<AccordionItem key={question} value={`item-${question}`}>
							<AccordionTrigger className='md:py-5 md:text-md'>
								{question}
							</AccordionTrigger>
							<AccordionContent className='md:pb-6'>
								<PrismicRichText field={answer} components={component} />
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</Container>
		</Bounded>
  );
};

export default DefaultFAQs;