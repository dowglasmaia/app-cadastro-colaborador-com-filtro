import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
 
  {
    divider: true
  },

  { name: 'Colaborador',
    url: '/colaborador',
    icon: 'fas fa-users',
    children: [
      {
        name: 'Cadastrar',
        url: '/colaborador/cadastro',
        icon: 'fas fa-plus'
      },
      {
        name: 'Consultar',
        url: '/colaborador/lista',
        icon: 'fas fa-filter'
      },
    ]
   },

  {
    divider: true
  },
  

  /////
  {
    name: 'Github',
    url: 'https://github.com/dowglasmaia',
    icon: 'fa-github',
    class: 'mt-auto',
    variant: 'dark',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'LinkdIn',
    url: 'www.linkedin.com/in/dowglasmaia',
    icon: 'icon-layers',
    variant: 'primary',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
