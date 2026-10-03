type LinkType = {
  name: string;
  href: string;
};

export const navBarLinks: LinkType[] = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Library',
    href: '/s'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact',
    href: '/contact'
  },
  {
    name: 'Settings',
    href: '/settings'
  }
]

export const authLinks: LinkType[] = [
  {
    name: 'Sign in',
    href: '/sign-in'
  },
  {
    name: 'Sign up',
    href: '/sign-up'
  }
]

export const footerLinks: LinkType[] = [
  ...navBarLinks,
  {
    name: 'Terms and Conditions',
    href: '/terms'
  }
]
