import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { useContactForm } from '../../hooks/useContactForm';
import { Button } from '../ui/Button';
import { COUNTRIES, COURSE_CATEGORIES } from '../../lib/constants';

const schema = z.object({
  full_name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  preferred_country: z.string().min(1, 'Select a country'),
  preferred_course: z.string().min(1, 'Select a course'),
  message: z.string().min(10, 'Message too short'),
});

export const ContactForm = ({ sourcePage = 'contact' }) => {
  const { mutateAsync, isPending } = useContactForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      preferred_country: '',
      preferred_course: '',
    },
  });

  const onSubmit = async (values) => {
    try {
      await mutateAsync({ ...values, source_page: sourcePage, status: 'new' });
      toast.success('Thanks! We will contact you shortly.');
      reset();
    } catch {
      toast.error('Unable to submit right now. Please try again.');
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <input className="w-full rounded-xl border p-3" placeholder="Full Name" {...register('full_name')} />
      {errors.full_name ? <p className="text-xs text-red-500">{errors.full_name.message}</p> : null}

      <input className="w-full rounded-xl border p-3" placeholder="Email" {...register('email')} />
      {errors.email ? <p className="text-xs text-red-500">{errors.email.message}</p> : null}

      <input className="w-full rounded-xl border p-3" placeholder="Phone Number" {...register('phone')} />
      {errors.phone ? <p className="text-xs text-red-500">{errors.phone.message}</p> : null}

      <select className="w-full rounded-xl border p-3" {...register('preferred_country')}>
        <option value="">Preferred Country</option>
        {COUNTRIES.map((country) => <option key={country} value={country}>{country}</option>)}
      </select>
      {errors.preferred_country ? <p className="text-xs text-red-500">{errors.preferred_country.message}</p> : null}

      <select className="w-full rounded-xl border p-3" {...register('preferred_course')}>
        <option value="">Preferred Course</option>
        {COURSE_CATEGORIES.map((course) => <option key={course} value={course}>{course}</option>)}
      </select>
      {errors.preferred_course ? <p className="text-xs text-red-500">{errors.preferred_course.message}</p> : null}

      <textarea className="w-full rounded-xl border p-3" rows="4" placeholder="Message" {...register('message')} />
      {errors.message ? <p className="text-xs text-red-500">{errors.message.message}</p> : null}

      <Button disabled={isPending} className="w-full">{isPending ? 'Submitting...' : 'Submit'}</Button>
    </form>
  );
};
