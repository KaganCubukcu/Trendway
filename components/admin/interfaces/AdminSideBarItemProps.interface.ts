import { IconType } from "react-icons";

export interface AdminSideBarItemPropsInterface {
  selected?: boolean;
  name: string;
  icon: IconType;
  url: string;
}
