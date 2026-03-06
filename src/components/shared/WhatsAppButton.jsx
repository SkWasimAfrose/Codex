import { FaWhatsapp } from 'react-icons/fa';
import { BRAND } from '../../lib/constants';

export const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${BRAND.whatsappNumber}`}
    className="fixed bottom-6 right-6 z-[9999] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg ring-8 ring-green-200/40"
    aria-label="Contact on WhatsApp"
  >
    <FaWhatsapp />
  </a>
);
