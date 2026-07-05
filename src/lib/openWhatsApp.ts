import { contactConfig } from './contactConfig';

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
