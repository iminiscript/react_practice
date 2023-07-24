import React, {useState} from 'react'

export const Form = () => {

    const [formDate, setFormDate] = useState(
        { 
            firstName: "", 
            lastName: "", 
            email: "", 
            textArea:"",
            isChecbox: true,
            employment: "",
            cars: "",
        }
    );

    //console.log(formDate);
    const handleClick = (event) => {
        const {name, value, type, checked } = event.target;
        setFormDate( prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = (event) => {


        event.preventDefault();
        console.log(formDate);
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text'
            placeholder='First Name'
            onChange={handleClick}
            name="firstName"
            value={formDate.firstName}
            />
            <input type='text'
            placeholder='Last Name'
            onChange={handleClick}
            name="lastName"
            value={formDate.lastName}
            />
            <input type='text'
            placeholder='Email'
            onChange={handleClick}
            name="email"
            value={formDate.email}
            />
            < textarea value={formDate.textArea} 
              placeholder='Comments'
              onChange={handleClick}
              name='textArea'
            />
            <input type='checkbox'
            onChange={handleClick}
            name="isChecbox"
            id='isChecbox'
            value={formDate.isChecbox}
            />
            <label htmlFor='isCheckbox'>Checkbox</label>
            <input type='radio' 
                id="part-time" 
                name="employment" 
                value="partTime" 
                onChange={handleClick}
            />
            <label htmlFor='part-time'>Part Time</label>
            <input type='radio' 
                id="full-time" 
                name="employment" 
                value="fullTime" 
                onChange={handleClick}
            />
            <label htmlFor='full-time'>Full Time</label>
            <input type='radio' 
                id="half-time" 
                name="employment" 
                value="halfTime" 
                onChange={handleClick}
            />
            
            <label htmlFor='half-time'>half Time</label>
            <select name="cars" value={formDate.cars} onChange={handleClick} id="cars">
            <option value="">Choose from bottom</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>

            <button>Submit</button>
        </form>
    </div>
  )
}
