import { Row, Text } from '@umami/react-zen';
import { CURRENT_VERSION, HOMEPAGE_URL } from '@/lib/constants';

export function Footer() {
  return (
    <Row as="footer">
      <a href={HOMEPAGE_URL} target="_blank">
        <Text weight="bold">umami</Text> {`v${CURRENT_VERSION}`}
      </a>
    </Row>
  );
}
