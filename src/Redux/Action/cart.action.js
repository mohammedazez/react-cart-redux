// Buat tipe action
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const handlePlus = () => {
  return {
    type: INCREMENT,
  };
};

export const handleMinus = () => {
  return {
    type: DECREMENT,
  };
};
