export const ContactList = ({ names }) => {
  console.log(names);
  return (
    <ul>
      {names.names.map(n => (
        <li key={n.id}>
          {n.name} {n.number}
        </li>
      ))}
    </ul>
  );
};
