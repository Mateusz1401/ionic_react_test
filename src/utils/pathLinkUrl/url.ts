const ROUTING_PREFIX: string = '/';

export const urlRoute = (url: string) => {
  return url
    ? `${ROUTING_PREFIX ? `${ROUTING_PREFIX}` : ''}${url}`.replace(/\/\//g, '/')
    : '';
};