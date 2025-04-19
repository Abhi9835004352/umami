import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@umami/react-zen';

export interface FilterButtonsProps {
  items: { id: string; label: string }[];
  value: string;
  onChange?: (value: string) => void;
}

export function FilterButtons({ items, value, onChange }: FilterButtonsProps) {
  const [selected, setSelected] = useState(value);

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <ToggleGroup value={[selected]} onChange={e => handleChange(e[0])}>
      {items.map(({ id, label }) => (
        <ToggleGroupItem key={id} id={id}>
          {label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
