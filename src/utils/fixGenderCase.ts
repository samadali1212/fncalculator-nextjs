
// This is a utility function to fix the gender case issue in the data
// It recursively updates all instances of "Male" to "male" and "Female" to "female" in an object or array

export function fixGenderCaseInData(data: any): any {
  if (typeof data !== 'object' || data === null) {
    return data;
  }
  
  if (Array.isArray(data)) {
    return data.map(item => fixGenderCaseInData(item));
  }
  
  const result: any = {};
  
  for (const key in data) {
    if (key === 'gender') {
      if (data[key] === 'Male') {
        result[key] = 'male';
      } else if (data[key] === 'Female') {
        result[key] = 'female';
      } else {
        result[key] = data[key];
      }
    } else if (typeof data[key] === 'object' && data[key] !== null) {
      result[key] = fixGenderCaseInData(data[key]);
    } else {
      result[key] = data[key];
    }
  }
  
  return result;
}
