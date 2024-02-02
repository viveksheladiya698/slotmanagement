import { useState } from 'react';
import './App.css';

function App() {

  let [a1, seta1] = useState('');
  let [a2, seta2] = useState('');
  let [sl, setsl] = useState([]);

  let cal = () => {

    let ar1 = [], ar2 = [];
    let s1, s2, e1, e2;
    let slt, fin = [];
    if (a1.includes(":") && a2.includes(":")) {
      ar1 = a1.split(":");
      ar2 = a2.split(":");
      s1 = ar1[0];
      s2 = ar1[1];
      e1 = ar2[0];
      e2 = ar2[1];
      for (let i = s1; i <= e1;) {
        s2 = parseInt(s2) + 10;
        if (s2 > 60) {
          s2 = (s2 - 50) - 10;
          s1++;
          i++;
        }
        if (s1 >= e1 && s2 >= e2) {
          break;
        }
        slt = s1 + ":" + s2;
        console.log(slt);
        fin.push(slt);
      }
      setsl(fin);
    }
    else {
      alert("enter valid value");
    }

  }

  return (
    <div className="App">
      <div className="input-box d-flex">
        <div className="i1 p-2">
          <span>Slot 1: </span> <input type="text" onChange={(e) => { seta1(e.target.value) }}></input>
        </div>
        <div className="i2 p-2">
          <span>Slot 2: </span><input type="text" onChange={(e) => { seta2(e.target.value) }}></input>
        </div>
      </div>
      <div className="output d-flex">
        <div className="out-btn p-2">
          <input type="button" value="Slots" onClick={() => { cal(); }}></input>
        </div>
      </div>


      <div className="screen">
        <div className="d-flex">
          <table>

            {
              sl.map((ele) => {
                return (
                  <tr>
                    <td>{ele}</td>
                  </tr>
                )
              })
            }
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
