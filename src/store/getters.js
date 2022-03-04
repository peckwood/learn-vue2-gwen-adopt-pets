export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  // one common thing that you'll be using getters for is for filtering
  getAllCats: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'cat'
    })
  }

}
