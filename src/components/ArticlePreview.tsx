interface Props {
  filename: string;
  value: string;
}

export const ArticlePreview = (props: Props) => {
  return (
    <div>
      <div class="p-1">
        <a href="article">{props.filename} (the link is just for show)</a>
      </div>
      <article>{props.value}</article>
    </div>
  );
};
