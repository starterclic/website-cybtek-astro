import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
      
    {
      text: 'Assistants',
      href: getPermalink('/ia/agents'),
    },
    {
      text: 'Services',
      href: getPermalink('/ia/services'),
    },
    {
      text: 'Support ',
      href: getPermalink('/support/gpt'),
    },
    {
      text: 'Tarifs',
      href: getPermalink('/tarifs'),
    },
    
  ],
  actions: [{ text: '🪄 Discuter avec Cybot, propulsé par GPT!', href: 'https://cybtek.fr/support', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '🛠️ Produit',
      links: [
        { text: '🔧 Fonctionnalités', href: '#' },
        { text: '🔒 Sécurité', href: '#' },
        { text: '👥 Équipe', href: '#' },
        { text: '🏢 Entreprise', href: '#' },
        { text: '📝 Projets IA', href: '#' },
        { text: '💵 Tarifs', href: '#' },
        { text: '📚 Ressources', href: '#' },
      ],
    },
    {
      title: '🖥️ Plateforme',
      links: [
        { text: '🤝 Partenaires', href: '#' },
        { text: '🚀 StartIA', href: '#' },
        { text: '🧠 GPT', href: '#' },
        { text: '🔗 Langchain', href: '#' },
      ],
    },
    {
      title: '💼 Support',
      links: [
        { text: '📄 Docs', href: '#' },
        { text: '🛠️ Services Professionnels', href: '#' },
        { text: '🎓 Compétences', href: '#' },
        { text: '📈 Statut', href: '#' },
      ],
    },
    {
      title: '🏢 Entreprise',
      links: [
        { text: 'ℹ️ À Propos', href: '#' },
        { text: '✍️ Blog', href: '#' },
        { text: '🛒 Boutique', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '📝 Conditions', href: getPermalink('/terms') },
    { text: '🔒 Politique de Confidentialité', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://cybtek.fr/favicon/favicon-32x32.png" alt="Cybtek logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://cybtek.fr/">Cybtek</a> · Tous droits réservés.
  `,
};
