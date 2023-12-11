interface iLink {
  name: string;
  hash: string;
}

const linksPt: iLink[] = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Sobre',
    hash: '#about',
  },
  {
    name: 'Projetos',
    hash: '#projects',
  },
  {
    name: 'Habilidades',
    hash: '#skills',
  },
  {
    name: 'Experiência',
    hash: '#experience',
  },
  {
    name: 'Contato',
    hash: '#contact',
  },
];

const linksEng: iLink[] = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
];

const linksObj: Record<Langs, iLink[]> = {
  'pt-br': linksPt,
  'eng': linksEng,
};

export const getLinks = (lang?: Langs) => linksObj[lang ?? 'pt-br'];
