
import React, { createContext, useReducer, useEffect } from 'react';

const DashboardContext = createContext();

const initialState = {
  categories: []
};

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget]
              }
            : category
        )
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter((widget) => widget.id !== action.payload.widgetId)
              }
            : category
        )
      };
    default:
      return state;
  }
};

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  useEffect(() => {
    // Load initial data from JSON
    fetch('/dashboardConfig.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_CATEGORIES', payload: data.categories });
      });
  }, []);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => React.useContext(DashboardContext);
 