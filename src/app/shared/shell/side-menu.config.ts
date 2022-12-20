export default interface SideMenuModal{
  icon: string;
  url: string;
  title: string;
}

export const sideManuConfigData : SideMenuModal[] = [

  {
    url:'/app',
    icon: 'home',
    title: 'Home'
  },
  {
    url:'admin/users',
    icon: 'person',
    title: 'Users'
  },
  {
    url:'admin/users',
    icon: 'info',
    title: 'About'
  },
  {
    url:'admin/organization',
    icon: 'info',
    title: 'Organization'
  },
]
