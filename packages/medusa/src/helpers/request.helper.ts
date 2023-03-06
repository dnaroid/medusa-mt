export const getStoreIdByDomain = (req): string => {
  const domain = req.headers.origin?.split('.')[0].split('//')[1];
  // @ts-ignore
  return domain ? global.domainByStore[domain] ?? null : null
}
