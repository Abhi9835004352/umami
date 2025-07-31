import { UseQueryOptions } from '@tanstack/react-query';
import { DATA_TYPE, PERMISSIONS, ROLES } from './constants';
import { TIME_UNIT } from './date';

export type ObjectValues<T> = T[keyof T];

export type ReactQueryOptions<T = any> = Omit<UseQueryOptions<T, Error, T>, 'queryKey' | 'queryFn'>;

export type TimeUnit = ObjectValues<typeof TIME_UNIT>;
export type Permission = ObjectValues<typeof PERMISSIONS>;
export type Role = ObjectValues<typeof ROLES>;
export type DynamicDataType = ObjectValues<typeof DATA_TYPE>;

export interface Auth {
  user?: {
    id: string;
    username: string;
    role: string;
    isAdmin: boolean;
  };
  grant?: Permission[];
  shareToken?: {
    websiteId: string;
  };
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
  value?: string;
  unit?: TimeUnit;
  num?: number;
  offset?: number;
}

export interface DynamicData {
  [key: string]: number | string | number[] | string[];
}

export interface QueryOptions {
  joinSession?: boolean;
  columns?: Record<string, string>;
  limit?: number;
  prefix?: string;
}

export interface QueryFilters
  extends DateParams,
    FilterParams,
    SortParams,
    PageParams,
    SegmentParams {
  cohortFilters?: QueryFilters;
}

export interface DateParams {
  startDate?: Date;
  endDate?: Date;
  unit?: string;
  timezone?: string;
  compareDate?: Date;
}

export interface FilterParams {
  path?: string;
  referrer?: string;
  title?: string;
  query?: string;
  host?: string;
  os?: string;
  browser?: string;
  device?: string;
  country?: string;
  region?: string;
  city?: string;
  language?: string;
  event?: string;
  search?: string;
  tag?: string;
  eventType?: number;
  segment?: string;
  cohort?: string;
  compare?: string;
}

export interface SortParams {
  orderBy?: string;
  sortDescending?: boolean;
}

export interface PageParams {
  page?: number;
  pageSize?: number;
}

export interface SegmentParams {
  segment?: string;
  cohort?: string;
}

export interface PageResult<T> {
  data: T;
  count: number;
  page: number;
  pageSize: number;
  orderBy?: string;
  sortDescending?: boolean;
  search?: string;
}
