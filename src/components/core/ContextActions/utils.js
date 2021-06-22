export function getIconByType(type) {
  switch (type) {
    case "edit":
      return "faEdit";
    case "delete":
      return "faTrash";
    case "view":
      return "faEye";
    case "change":
      return "faExchangeAlt";
    default:
      return null;
  }
}
