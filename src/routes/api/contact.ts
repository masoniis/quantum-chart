// export const post = async ({ request }) => {
//     const body = await request.formData();
//     const first = body.get("first");

//     console.log(body)
  
//     return {
//       body: {
//         first,
//       },
//     };
//   };

export async function post({params, request}) {
  const formBody = await request.formData();

  const first = formBody.get("first-name")
  const last = formBody.get("last-name")
  const email = formBody.get("email")
  const message = formBody.get("message")

  console.log("HELLOOOOOO")

  return {
    body: {
      first,
      last,
      email,
      message,
    }
  }
}