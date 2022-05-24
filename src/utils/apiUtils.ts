export const request = async (options:any) => {

    let token: any = JSON.parse(localStorage.getItem('jwtToken') as string);

    const headers = new Headers({
      'Content-Type': 'application/json'
    });
  
    if (localStorage.getItem("jwtToken")) {
      headers.append(
        'Authorization',
        `Bearer ${token}`
      );
    }
  
    const defaults = { headers };
    options = Object.assign({}, defaults, options);
  
    try {
      const response = await fetch(options.url, options);
      const json =
        response.status === 204 || response.status === 202
          ? undefined
          : await response.json();
      return response.ok ? json : Promise.reject(json);
    } catch (error) {
      throw error;
    }
  };
  
  export default request;