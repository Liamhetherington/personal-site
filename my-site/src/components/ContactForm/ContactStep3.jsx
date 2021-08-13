import React from "react"

const ContactNotes = props => {
  const { values, handleChange, handleSubmit} = props
  return(
      <>
        <label for="name" >
          Tell us a little bit more about what you're looking for!
          <input
            type="text"
            name="notes"
            value={values.notes}
            // to invoke the handleChange method, you need to specify a name to it so that the state will change accordingly
            onChange={handleChange('notes')}
          />
        </label ><br />
    
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
export default ContactNotes;