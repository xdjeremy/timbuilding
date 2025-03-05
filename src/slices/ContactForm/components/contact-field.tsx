import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Textarea,
} from '@relume_io/relume-ui';
import { FC } from 'react';
import {
	ControllerRenderProps,
	FieldValues,
	useFormContext,
} from 'react-hook-form';
import { z } from 'zod';
import { ContactSchema } from './contact-schema';

interface ContactFieldProps {
	name: keyof z.infer<typeof ContactSchema>;
	label: string;
	type: 'text' | 'textarea';
	disabled?: boolean;
}

const ContactField: FC<ContactFieldProps> = (props) => {
	const form = useFormContext();

	return (
		<FormField
			control={form.control}
			name={props.name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{props.label}</FormLabel>
					<FormControl>
						<FieldTypes
							type={props.type}
							field={field}
							disabled={props.disabled}
						/>
					</FormControl>
					<FormMessage className='text-red-700' />
				</FormItem>
			)}
		/>
	);
};

export default ContactField;

const FieldTypes = ({
	type,
	field,
	disabled,
}: {
	type: 'text' | 'textarea';
	field: ControllerRenderProps<FieldValues, string>;
	disabled?: boolean;
}) => {
	switch (type) {
		case 'text':
			return <Input {...field} disabled={disabled} />;
		case 'textarea':
			return <Textarea {...field} disabled={disabled} />;
		default:
			return null;
	}
};
