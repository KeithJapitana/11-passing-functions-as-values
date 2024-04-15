// export default function TabButton({ children, onSelect }) {
//   return (
//     <li>
//       <button onClick={onSelect}>{children}</button>
//     </li>
//   );
// }

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
