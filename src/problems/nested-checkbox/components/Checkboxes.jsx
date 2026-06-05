import { useState, useRef, useEffect } from "react";

const Checkboxes = ({ checkbox, onCheckedChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const checkboxRef = useRef(null);

  useEffect(() => {
    checkboxRef.current.indeterminate = checkbox.indeterminate;
  }, [checkbox.indeterminate])

  return (
    <div style={{ marginLeft: '16px' }}>
      <span>
        {checkbox?.children?.length > 0 && <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '-' : '+'}</button>}
        <input ref={checkboxRef} type="checkbox" checked={checkbox.checked} onChange={() => onCheckedChange(checkbox.id, checkbox.checked)} />
        <span>{checkbox.label}</span>
      </span>
      {isOpen && checkbox?.children && checkbox?.children?.length > 0 &&
        checkbox?.children?.map((child) =>
          <Checkboxes key={child.id} checkbox={child} onCheckedChange={onCheckedChange} />
        )}
    </div>
  )
}

export default Checkboxes;