const URL = `${process.env.NEXT_PUBLIC_API_URL}/contactus`;

interface Body {
  name: string;
  email: string;
  message: string;
}

const submitContactUs = async (body: Body): Promise<null> => {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return res.json();
};

export default submitContactUs;
