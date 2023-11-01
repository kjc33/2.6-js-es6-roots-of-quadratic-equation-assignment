let roots = (a, b, c) => {
    const discriminant = b**2 - 4*a*c;
  
    if (discriminant < 0) {
      return "Complex roots";
    }
  
    const x1 = (-b + Math.sqrt(discriminant)) / (2*a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2*a);
  
    return [x1, x2];
  };
  
  console.log(roots(2, 12, 10));