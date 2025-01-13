declare module "react-tilt" {
  import { Component } from "react";

  export interface TiltProps {
    options?: any; // Define your options type here
    className?: string;
    children?: React.ReactNode;
  }

  export default class Tilt extends Component<TiltProps> {}
}
