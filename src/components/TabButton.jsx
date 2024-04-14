// export default function TabButton({ children, onSelect }) {
//   return (
//     <li>
//       <button onClick={onSelect}>{children}</button>
//     </li>
//   );
// }

export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
