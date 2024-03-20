function Page() {
  const fakeProps = {
    title: "some title",
    description: "kjfhsalkjdflkNFJBAKJFBLAEBJ",
  };

  //const title = fakeProps.title;
  //const description = fakeProps.description;
  const { title, description } = fakeProps;
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <h2>This is a page component</h2>
    </>
  );
}

export default Page;
