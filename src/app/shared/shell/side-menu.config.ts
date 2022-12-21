export default interface SideMenuModal{
  icon: string;
  url: string;
  title: string;
}

export const sideManuConfigDataUser : SideMenuModal[] = [

  {
    url:'/app/admin',
    icon: 'home',
    title: 'Home'
  },
  {
    url:'users',
    icon: 'person',
    title: 'Users'
  },
  {
    url:'/users',
    icon: 'info',
    title: 'About'
  },
  {
    url:'organization',
    icon: 'info',
    title: 'Organization'
  },
]

export const sideManuConfigDataOrg : SideMenuModal[] = [

  {
    url:'/app/organization',
    icon: 'home',
    title: 'Home'
  },
  {
    url:'users',
    icon: 'person',
    title: 'Users'
  },
  {
    url:'organization',
    icon: 'info',
    title: 'Organization'
  },
]
