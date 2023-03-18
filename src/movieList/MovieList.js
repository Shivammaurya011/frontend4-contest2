import React from 'react'
import './style.css';

function MovieList(movArr) {
  var arr = movArr.movArr;
  console.log(arr);
  return (
    <div className='list'>
      <table className='table'>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
        {
          arr.map((data)=>{
            return (
              <tr>
                <td>{data.title}</td>
                <td>{data.genre}</td>
                <td>{data.year}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default MovieList
