interface CreateUserRequest {
  name: string
  email: string
  password: string
}

export async function createUser({ email, name, password }: CreateUserRequest) {
  await fetch('http://localhost:3333/register', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ email, name, password }),
  })
}
