const formatObject = (obj, level = 0) => { 
    let result = "";

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const padding = "  ".repeat(level); // Indentation for nested levels
            if (typeof obj[key] === "object" && obj[key] !== null) {
                result += `${padding}${key}:\n`;
                result += formatObject(obj[key], level + 1); // Recursively format nested objects
            } else {
                result += `${padding}${key}: ${obj[key]}\n`;
            }
        }
    }

    return result;
};



  export default formatObject;