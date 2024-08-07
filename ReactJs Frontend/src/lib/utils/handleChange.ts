export const handleChange =
  <T extends HTMLInputElement | HTMLSelectElement>(
    setValue: (value: string) => void
  ) =>
  (event: React.ChangeEvent<T>) => {
    setValue(event.target.value);
  };
