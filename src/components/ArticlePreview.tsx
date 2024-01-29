type Props = { filename: string; children: any };

export function ArticlePreview(props: Props) {
  return (
    <>
      <div>
        <h1>Article Preview</h1>
        <div>{props.children}</div>
      </div>
    </>
  );
}
