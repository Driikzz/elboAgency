const toggle = () => {
    setOPen(!open);
  };
  
  return (
    <div>
      <button onClick={toggle}>toggle</button>
      {open && (
        <div className="toggle">
          <h4>toggle</h4>
        </div>
      )}
    </div>
  );