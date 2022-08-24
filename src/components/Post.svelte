<script lang="ts">
  const { title, summary, url, lang, original, publishedAt } = $$props;

</script>

<article class="article">
  <a href={original?.external ? original?.url : url} class="article__title">{title}</a>
  <div class="article__excerpt">{summary}</div>
  <span class="article__publishedAt">{publishedAt}</span>
</article>

<style lang="scss">
  .article {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    &__title {
      font-weight: 600;
      color: #18181b;
    }

    &__excerpt {
      margin-top: .27rem;
    }

    &__publishedAt {
      margin-top: 5px;
      color: #767070;
      font-size: .8rem;
    }
  }
</style>
