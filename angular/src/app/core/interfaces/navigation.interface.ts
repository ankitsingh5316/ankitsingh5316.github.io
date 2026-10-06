export interface MenuItem {
  id: number;
  title: string;
  link: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  id: number;
  title: string;
  link: string;
}

export interface NavigationData {
  mainMenu: MenuItem[];
} 