export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  email = 'email',
  
}

export interface Contact {
  github: string
  site: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  github: 'manoj8861',
  site: 'manojkumargk.com',
  links: {
    github: 'https://github.com/manoj8861',
    linkedin: 'https://linkedin.com/in/manojkumargk',
    email: 'mailto:manojkumar.g.k@outlook.com',
    
  },
};
