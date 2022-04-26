import './Input.css';

const input = props => {
    const errorJSX = props.error? <p className='input-error'>{props.error}</p> : null
    return (
        <div className="input-group">
            <label className='input-label'>{props.label}</label>
            <input className='input-field' type={props.type} value={props.value} onChange={props.changed} min={props.min} max={props.max} minLength={props.minLength} maxLength={props.maxLength}></input>
            {errorJSX}
        </div>
    );
}

export default input;