const STORAGE_KEY = "evalData";

/**
 * Always returns an array
 * Never crashes
 */
export const getRestaurants = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading localStorage", error);
    return [];
  }
};

/**
 * Accepts only array
 */
export const saveRestaurants = (restaurants) => {
  if (!Array.isArray(restaurants)) {
    console.error("saveRestaurants expects an array");
    return;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(restaurants));
};
