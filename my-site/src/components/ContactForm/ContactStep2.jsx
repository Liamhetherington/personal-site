import React from "react"

const ContactService = props => {
  const { values, handleChange, next, back } = props
  return(
      <>
        <label for="service" >
          What kind of project are you interested in?
          <input
            type="select"
            name="service"
            value={values.service}
            

            // to invoke the handleChange method, you need to specify a name to it so that the state will change accordingly
            onChange={handleChange('service')}
          />
        </label ><br />
    
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  )
}
export default ContactService;