import React from 'react'

export const FormChuckJokes = () => {
    return (
        <form id="formChuckJokes">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" id="firstName" value="Chuck"/>
          <label htmlFor="LastName">Last Name:</label>
          <input type="text" name="lastName" id="lastName" value="Norris"/>
          <label htmlFor="numberJokes">Number of Jokes:</label>
          <select name="numberJokes" id="numberJokes" defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <input type="submit" value="Get Joke"/>
        </form>
    )
}
