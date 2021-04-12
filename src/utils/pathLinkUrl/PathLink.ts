  import { urlRoute } from './url';

class PathLink {
  path: string;
  name: string;
  link: any;

  constructor(path: string, name: string, link?: any) {
    this.path = urlRoute(path);
    this.name = name;
    this.link =
      link && typeof link === 'function'
        ? (p: any) => urlRoute(link(p))
        : () => urlRoute(link) || urlRoute(path);
  }
}

export default PathLink;