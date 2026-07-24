import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tsiresyrazak26@gmail.com",
    href: "mailto:tsiresyrazak26@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+261389899778",
    href: "tel:+261389899779"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Antananarivo",
    href: "#"
  },

]


export const Contact = () => {
  return (
    <section
    id="testimonials"
    className="py-32 relative overflow-hidden">

    </section>
  );
};

