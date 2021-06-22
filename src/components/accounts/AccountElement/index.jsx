import React, { useCallback } from "react";
import { Card, Image } from "../../common";
import { Footer } from "./Footer";
import { Info } from "./Info";
import { Action } from "../../core/ContextActions";

export function AccountElement({ item, index }) {
  const handleClick = useCallback((event, type) => {
    event.preventDefault();
    console.log(type);
  }, []);
  return (
    <Card>
      <Image src={item.image} alt={`Logo: ${item.name}`} />
      <Info
        name={item.name}
        countryCode={item.countryCode}
        type={item.accountType.name}
        location={item.locationshortcut}
      />
      <Footer parentName={item.parent?.name}>
        <Action type="delete" onClick={handleClick} />
        <Action type="view" onClick={handleClick} />
        <Action type="change" onClick={handleClick} />
        <Action type="edit" onClick={handleClick} />
      </Footer>
    </Card>
  );
}
