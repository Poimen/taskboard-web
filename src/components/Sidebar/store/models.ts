export class MenuItem {
  constructor(public name: string, public icon: string, public tooltop: string, public routeTo: string) {
  }
}

export class MenuSection {
  constructor(public name: string, public items: MenuItem[]) {
  }
}

export class SidebarState {
  constructor(public menus: MenuSection[]) {
  }
}
