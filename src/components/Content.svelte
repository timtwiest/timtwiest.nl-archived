<div class="content">
  <div class="content__container">
    <slot />
  </div>
</div>

<style lang="scss">
  .content {
    margin-top: 3.2rem;
    width: 100%;
    max-width: 920px;
    padding-left: 1.15rem;
    padding-right: 1.15rem;

    @media (min-width: 980px) {
      max-width: 980px !important;
    }

    @media (min-width: 640px) {
      padding-left: 2rem;
      padding-right: 2rem;
      max-width: 640px;
    }
  }
</style>
