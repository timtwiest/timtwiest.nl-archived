<footer class="footer">
  <div class="footer__container">
    <p class="footer__container__text">&copy; 2022. All rights reserved.</p>
  </div>
</footer>

<style lang="scss">
  .footer {
    width: 100%;
    max-width: 920px;
    margin: 2rem 0;
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

    &__container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      &__text {
        color: #767070;
        font-size: .80rem;
        letter-spacing: -.006em;
      }
    }
  }
</style>
