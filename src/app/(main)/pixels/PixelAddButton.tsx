import { useMessages, useModified, useNavigation } from '@/components/hooks';
import { Button, Icon, Modal, Dialog, DialogTrigger, Text, useToast } from '@umami/react-zen';
import { Plus } from '@/components/icons';
import { PixelAddForm } from './PixelAddForm';

export function PixelAddButton() {
  const { formatMessage, labels, messages } = useMessages();
  const { toast } = useToast();
  const { touch } = useModified();
  const { teamId } = useNavigation();

  const handleSave = async () => {
    toast(formatMessage(messages.saved));
    touch('boards');
  };

  return (
    <DialogTrigger>
      <Button data-test="button-website-add" variant="primary">
        <Icon>
          <Plus />
        </Icon>
        <Text>{formatMessage(labels.addPixel)}</Text>
      </Button>
      <Modal>
        <Dialog title={formatMessage(labels.addPixel)} style={{ width: 400 }}>
          {({ close }) => <PixelAddForm teamId={teamId} onSave={handleSave} onClose={close} />}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
