// In this we have learnt how to use redux toolkit
// It is generally used to so that we can use our state all over our projects
// Earlier I can only use it within a component
// We use Redux Toolkit instead of Redux because it is newer version of redux

// We first make the project and component
// We then create slice in which we name it then 
// We then pass its initial state 
// We then add the reducers 
// Reducers is basically the action or the function to be performed
// We then define the reducer action
// We for example have used one action that adds the item to the cart 
// We then just write action payload that helps to make the changes
// After that we have exported the method add and remove and cartSlicer's reducer function
// We have to create a store that have all the slices and it acts as a centre for all the sources
// We have just imported the cartslice and stored in the variable cart
// We have used the map method again to map all the data coming from the api

// Where we have to use the state we import use selector or the use dispatch 
// Where we have to provide the change we use the useDispatch method

// for eg in this we have used a function that call the dispatch function and add the product to the cart 

// We use the useSelector where we have to display the changes 
// For eg we have used the useSelector in the navbar where we have shown the number of items in the cart
// To use the useSelector 
// We first have to import it then we have to store the change(state) in the variable and then tell which state we have to use
// We then use the variable