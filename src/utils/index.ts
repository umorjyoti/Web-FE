export function getUserJWT(): string | null {
    try {
      // Access localStorage safely using optional chaining
      const token = localStorage?.getItem('userJWT');
  
      // Check if token exists and is not an empty string
      if (typeof token === 'string' && token.length > 0) {
        return token;
      } else {
        return null; // Return null if token is missing or empty
      }
    } catch (error) {
      console.error('Error retrieving user JWT from localStorage:', error);
      return null; // Return null in case of errors
    }
  }

  export function saveUserJWT(token: string): void {
    try {
      if (typeof token !== 'string' || token.length === 0) {
        throw new Error('Invalid token: Token must be a non-empty string.');
      }
      localStorage.setItem('userJWT', token);
    } catch (error) {
      console.error('Error saving user JWT to localStorage:', error);
    }
  }

  export function deleteUserJWT(): void {
    try {
      localStorage.removeItem('userJWT');
    } catch (error) {
      console.error('Error deleting user JWT from localStorage:', error);
    }
  }