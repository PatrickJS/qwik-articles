export function BlogIndex(props: { children: any }) {
  return (
    <>
      <div>
        <h1>Blog</h1>
        <div>{props.children}</div>
      </div>
    </>
  );
}
