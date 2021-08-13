import React from "react"

const ContactInfo = props => {
  const { values, handleChange, next} = props
  return(
      <>
        <label for="name" >
          Name
          <input
            type="text"
            name="name"
            value={values.name}
            // to invoke the handleChange method, you need to specify a name to it so that the state will change accordingly
            onChange={handleChange('name')}
          />
        </label ><br />
        <label for="email">
          Email
          <input
            type="text"
            name="email"
            value={values.email}
            // to invoke the handleChange method, you need to specify a name to it so that the state will change accordingly
            onChange={handleChange('email')}
          />
        </label ><br />
    
      <button onClick={next}>Next</button>
    </>
  )
}
export default ContactInfo;