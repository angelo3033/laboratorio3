const Statistics = (props) => {

    let {good, neutral, bad} = props

    return (
        <div>
            <h1>Statistics</h1>
            {good || neutral || bad ?
            <div>
                <p>good: {good}</p>
                <p>neutral: {neutral}</p>
                <p>bad: {bad}</p>
                <p>all: {props.all}</p>
                <p>average: {props.average}</p>
                <p>positive: {props.positive} %</p>
            </div>
            :
                <h4>No feedback given</h4>
            }  
        </div>
    )
}

export default Statistics