interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asd1234ed56fg78ef',
        user: {
          name: 'Jose das Couves',
          email: 'couves.jose@email.com',
        },
      });
    }, 2000);
  });
}
