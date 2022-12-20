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
    url:'users',
    icon: 'person',
    title: 'Users'
  },
  {
    url:'users',
    icon: 'info',
    title: 'About'
  },
  {
    url:'organization',
    icon: 'info',
    title: 'Organization'
  },
]
