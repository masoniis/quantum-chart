export const post = async ({ request }) => {
    const body = await request.formData();
    const email = body.get("email");
    const password = body.get("password");
  
    return {
      body: {
        email,
      },
    };
  };