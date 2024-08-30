import './App.css';
import Datatable from './Datatable';

/**
 * each element is an array containing a key and Value
 * key will always be a string
 * value may be an actual value like color code or number or boolean
 * OR
 * value may be derived by referencing to another key via "ref"
 */

const data = [
  ['Street.Level0.Color', '#FEFEFE'],
  ['Street.Level1.Color', ['ref', 'Street.Level0.Color']],
  ['Street.Level2.Color', ['ref', 'Street.Level0.Color']],
  ['Street.Level3.Color', ['ref', 'Street.Level0.Color']],

  ['Tributary.LineWidth', ['ref', 'River.Level1.LineWidth']],
  ['River.Level1.LineWidth', ['ref', 'River.Level3.LineWidth']],
  ['River.Level2.LineWidth', 3],
  ['River.Level3.LineWidth', 4],
];

/**
 * The app should render a table such that -
 * First column displays the string
 * Second column displays the value in an editable input
 * If the value is a reference, the input should be
 *  - disabled
 *  - render the value of the referenced key
 * Modifying the referenced key value should update the other disabled keys input values
 */

export default function App() {
  return (
    <>
      <div className="App">
        <Datatable data={data} />
      </div>
    </>
  );
}
