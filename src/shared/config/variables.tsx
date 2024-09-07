type Platform = {
  slug: string;
  title: string;
  color: string;
  icon: string;
};

export const platforms: Record<string, Platform> = {
  facebook: {
    slug: 'facebook',
    title: 'Facebook',
    color: 'bg-[#0065f7] text-white',
    icon: '/facebook.svg'
  },
  instagram: {
    slug: 'instagram',
    title: 'Instagram',
    color: 'bg-[#e92a95] text-white',
    icon: '/instagram.svg'
  },
  linkedin: {
    slug: 'linkedin',
    title: 'Linkedin',
    color: 'bg-[#0c61bf] text-white',
    icon: '/linkedin.svg'
  },
  telegram: {
    slug: 'telegram',
    title: 'Telegram',
    color: 'bg-[#259fdc] text-white',
    icon: '/telegram.svg'
  },
  tiktok: {
    slug: 'tiktok',
    title: 'Tiktok',
    color: 'bg-black text-white',
    icon: '/tiktok.svg'
  },
  whatsapp: {
    slug: 'whatsapp',
    title: 'Whatsapp',
    color: 'bg-[#24cc63] text-white',
    icon: '/whatsapp.svg'
  },
  youtube: {
    slug: 'youtube',
    title: 'Youtube',
    color: 'bg-[#f70000] text-white',
    icon: '/youtube.svg'
  }
};