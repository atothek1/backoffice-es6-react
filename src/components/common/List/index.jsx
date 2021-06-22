import React from "react";

export function List({ data, component, emptyComponent }) {
  if (data.length === 0) {
    return React.createElement(
      emptyComponent
        ? emptyComponent
        : () => {
            return <p>No Data Found</p>;
          }
    );
  }
  const elements = data.map((item, index) =>
    React.createElement(component, { key: item.id, item, index })
  );
  return <React.Fragment>{elements}</React.Fragment>;
}
