import { ChangeEventHandler } from 'react';

interface IRowProps {
  _key: string;
  _value: string;
  onChange: (key: any, event: any) => void;
  refer: boolean;
}
const Row = ({ _key, _value, onChange, refer }: IRowProps) => {
  const handleChange: ChangeEventHandler = (e) => {
    onChange(_key, e);
  };

  const type = _key.includes('Color') ? 'text' : 'number';

  return (
    <tr>
      <td>{_key}</td>
      <td>
        <input value={_value} disabled={refer} onChange={handleChange} type={type}  />
      </td>
    </tr>
  );
};

export default Row;
