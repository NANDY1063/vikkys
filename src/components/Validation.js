export const validateField = (name, value, values = {}) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required.";
        if (!/^[A-Za-z\s]+$/.test(value));
        break;
  
      case "ecno":
        if (!value) return "ECNO is required.";
        if (!/^\d{4}$/.test(value));
        break;
  
      case "mobile":
        if (!value) return "Mobile number is required.";
        if (!/^\d{9}$/.test(value)) ;
        break;
  
      case "branch":
      case "currentBranch":
        if (!value || value === "Select") return `${formatLabel(name)} is required.`;
        break;
  
      case "pin":
        if (!value) return "PIN is required.";
        if (value.length < 4) return "PIN must be at least 4 digits.";
        break;
  
      case "confirmPin":
        if (!value) return "Please confirm your PIN.";
        if (value !== values.pin) return "PINs do not match.";
        break;
  
      default:
        return "";
    }
  
    return "";
  };

  const formatLabel = (field) => {
    const labelMap = {
      currentBranch: "Current Branch",
      branch: "Branch",
    };
    return labelMap[field] || field.charAt(0).toUpperCase() + field.slice(1);
  };
  