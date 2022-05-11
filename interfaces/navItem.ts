interface INavItem {
  id: number,
  order: number,
  title: string,
  url: string
  subNav: any[]
}

export default INavItem