<div class="posts">
  <h2 class="posts__title head-sm">Recent posts</h2>
  <ul class="posts__list">
    <slot />
  </ul>
</div>

<style lang="scss">
  .posts {
    margin-top: 2.3rem;

    &__title {
      margin-bottom: 0.5rem;
    }

    &__list {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
</style>
