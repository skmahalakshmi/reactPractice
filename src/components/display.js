import  React from 'react';
const Display=(({days,hours,minutes,seconds})=>{
    return(
        <div>
<h1>SALES COUNTDOWN TIMER</h1>
<h2>offer ends in</h2>
<table>
    <tbody>
        <tr>
            <td>{days}</td>&nbsp;&nbsp;
            <td>{hours}</td>&nbsp;&nbsp;
            <td>{minutes}</td>&nbsp;&nbsp;
            <td>{seconds}</td>
        </tr>
        <tr>
            <th>DAYS</th>&nbsp;&nbsp;
            <th>HOURS</th>&nbsp;&nbsp;
            <th>MINUTES</th>&nbsp;&nbsp;
            <th>SECONDS</th>
        </tr>
    </tbody>
</table>
</div>

    )
})
export default Display;