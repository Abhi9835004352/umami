import { Form, FormField, FormSubmitButton, Row, TextField, Button } from '@umami/react-zen';
import { useApi } from '@/components/hooks';
import { DOMAIN_REGEX } from '@/lib/constants';
import { useMessages } from '@/components/hooks';

export function WebsiteAddForm({
  teamId,
  onSave,
  onClose,
}: {
  teamId?: string;
  onSave?: () => void;
  onClose?: () => void;
}) {
  const { formatMessage, labels, messages } = useMessages();
  const { post, useMutation } = useApi();
  const { mutate, error, isPending } = useMutation({
    mutationFn: (data: any) => post('/websites', { ...data, teamId }),
  });

  const handleSubmit = async (data: any) => {
    mutate(data, {
      onSuccess: async () => {
        onSave?.();
        onClose?.();
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit} error={error?.message}>
      <FormField
        label={formatMessage(labels.name)}
        data-test="input-name"
        name="name"
        rules={{ required: formatMessage(labels.required) }}
      >
        <TextField autoComplete="off" />
      </FormField>

      <FormField
        label={formatMessage(labels.domain)}
        data-test="input-domain"
        name="domain"
        rules={{
          required: formatMessage(labels.required),
          pattern: { value: DOMAIN_REGEX, message: formatMessage(messages.invalidDomain) },
        }}
      >
        <TextField autoComplete="off" />
      </FormField>
      <Row justifyContent="flex-end" paddingTop="3" gap="3">
        {onClose && (
          <Button isDisabled={isPending} onPress={onClose}>
            {formatMessage(labels.cancel)}
          </Button>
        )}
        <FormSubmitButton data-test="button-submit" isDisabled={false}>
          {formatMessage(labels.save)}
        </FormSubmitButton>
      </Row>
    </Form>
  );
}
