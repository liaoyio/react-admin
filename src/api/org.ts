import http from '@/utils/request';
import { Organization } from '#/entity';

export const getOrgList = () => http.get<Organization[]>({ url: '/org' });
