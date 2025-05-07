import { useMessages, useModified } from '@/components/hooks';
import {
  Row,
  Pressable,
  Icon,
  Icons,
  Modal,
  DialogTrigger,
  Dialog,
  Text,
  useToast,
} from '@umami/react-zen';
import { TeamMemberEditForm } from './TeamMemberEditForm';

export function TeamMemberEditButton({
  teamId,
  userId,
  role,
  onSave,
}: {
  teamId: string;
  userId: string;
  role: string;
  onSave?: () => void;
}) {
  const { formatMessage, labels, messages } = useMessages();
  const { toast } = useToast();
  const { touch } = useModified();

  const handleSave = () => {
    toast(formatMessage(messages.saved));
    touch('teams:members');
    onSave?.();
  };

  return (
    <DialogTrigger>
      <Pressable>
        <Row alignItems="center" gap>
          <Icon>
            <Icons.Edit />
          </Icon>
          <Text>{formatMessage(labels.edit)}</Text>
        </Row>
      </Pressable>
      <Modal>
        <Dialog title={formatMessage(labels.editMember)}>
          {({ close }) => (
            <TeamMemberEditForm
              teamId={teamId}
              userId={userId}
              role={role}
              onSave={handleSave}
              onClose={close}
            />
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
