import { isSameDay } from 'date-fns';
import { Loading, Icon, StatusLight } from '@umami/react-zen';
import { Bolt, Eye } from '@/components/icons';
import { useSessionActivityQuery, useTimezone } from '@/components/hooks';
import styles from './SessionActivity.module.css';
import { Fragment } from 'react';

export function SessionActivity({
  websiteId,
  sessionId,
  startDate,
  endDate,
}: {
  websiteId: string;
  sessionId: string;
  startDate: Date;
  endDate: Date;
}) {
  const { formatTimezoneDate } = useTimezone();
  const { data, isLoading } = useSessionActivityQuery(websiteId, sessionId, startDate, endDate);

  if (isLoading) {
    return <Loading position="page" />;
  }

  let lastDay = null;

  return (
    <div className={styles.timeline}>
      {data.map(({ id, createdAt, urlPath, eventName, visitId }) => {
        const showHeader = !lastDay || !isSameDay(new Date(lastDay), new Date(createdAt));
        lastDay = createdAt;

        return (
          <Fragment key={id}>
            {showHeader && (
              <div className={styles.header}>{formatTimezoneDate(createdAt, 'PPPP')}</div>
            )}
            <div className={styles.row}>
              <div className={styles.time}>
                <StatusLight color={`#${visitId?.substring(0, 6)}`}>
                  {formatTimezoneDate(createdAt, 'pp')}
                </StatusLight>
              </div>
              <Icon>{eventName ? <Bolt /> : <Eye />}</Icon>
              <div>{eventName || urlPath}</div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
