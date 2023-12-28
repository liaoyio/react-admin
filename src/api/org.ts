import { ORG_LIST } from './_db';
import { Organization } from '#/entity';
// export const getOrgList = () => http.get<Organization[]>({ url: '/org' });

export function getOrgList() {
  return ORG_LIST as Organization[];
}
