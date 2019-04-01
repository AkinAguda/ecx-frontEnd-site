/* eslint-disable default-case */
const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN SIDE DRAWER':
      return {
        isOpen: true,
      };
    case 'CLOSE SIDE DRAWER':
      return {
        isOpen: false,
      };
  }
  return state;
};

export default reducer;
