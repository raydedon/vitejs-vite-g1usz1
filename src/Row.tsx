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

  return (
    <tr>
      <td>{_key}</td>
      <td>
        <input value={_value} disabled={refer} onChange={handleChange} />
      </td>
    </tr>
  );
};

export default Row;
