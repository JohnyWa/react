import React, {useState} from 'react';

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value)
    };

    const clear = () => setValue('');

    return {
        required: {value, onChange},
        value,
        clear
    }

}

function UseCustomHook() {
    const input = useInput('');
    const lastName = useInput('');

    const submitHandler = event => {
        event.preventDefault();

        console.log({
            input: input.value,
            lastName: lastName.value
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" {...input.required} />
                <button onClick={input.clear}>Clear</button>
                <hr />
                <input type="text"  {...lastName.required}  />
                <button onClick={lastName.clear}>Clear</button>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UseCustomHook;
