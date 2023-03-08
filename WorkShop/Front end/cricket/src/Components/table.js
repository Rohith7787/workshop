import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function Table1() {
    const [data, setData] = useState([]);

    function init() {
        axios.get('http://localhost:8080/findall')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const deleteData = (player_id) => {
        axios.delete(`http://localhost:8080/delete/${player_id}`)
          .then((response) => {
            const newdata = data.filter((item) => item.player_id !== player_id);
            setData(newdata);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const updateData = (player_id, newData) => {
        axios.put(`http://localhost:8080/updatedata`, newData)
          .then((response) => {
            const newdata = data.map((item) => {
              if (item.player_id === player_id) {
                return { ...item, ...newData };
              }
              return item;
            });
            setData(newdata);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    

    useEffect(() => { init() }, [])
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>Player_id</th>
                    <th>Player_Age</th>
                    <th>Avg_StrikeRate</th>
                    <th>Total_Runs</th>
                    <th>Total_Wickets</th>
                    
                    
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.player_id}>
                        <td>{user.player_id}</td>
                        <td>{user.player_age}</td>
                        <td>{user.avg_strikerate}</td>
                        <td>{user.total_runs}</td>
                        <td>{user.totalwickets}</td>
                       <td><button
                       className="btn btn-primary"
                       onClick={() => deleteData(user.player_id)}
                     >
                       Delete
                     </button>
                <td><button
                className="btn btn-secondary"
                onClick={() => {
                  const newData = prompt("Enter new data:");
                  if (newData) {
                    updateData(user.player_id, { player_age: newData });
                  }
                }}
              >
                Update
              </button>
</td></td>
                     
                    </tr>

                ))}
            </tbody>
        </table>
    );
}
