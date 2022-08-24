<script lang="ts">
  import { NAVIGATION } from "@/config";
</script>

<nav class="nav">
  <div class="nav__container">
    <a href="/" class="nav__container__wave">&#128075;</a>
    <ul class="nav__container__links">
      {#each NAVIGATION as item}
        <li class="nav__container__links__link">{item.title}</li>
      {/each}
    </ul>
  </div>
</nav>

<style lang="scss">
  .nav {
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
      justify-content: space-between;
      align-items: center;

      &__wave {
        font-size: 1.75rem;
        animation-name: wave-animation;
        animation-duration: 2.5s;
        animation-iteration-count: 1;
        transform-origin: 70% 70%;
        cursor: pointer;
        text-decoration: none;

        @keyframes wave-animation {
          0% {
            transform: rotate(0.0deg)
          }
          10% {
            transform: rotate(22.0deg)
          }
          20% {
            transform: rotate(-10.0deg)
          }
          30% {
            transform: rotate(18.0deg)
          }
          40% {
            transform: rotate(-7.0deg)
          }
          50% {
            transform: rotate(12.0deg)
          }
          60% {
            transform: rotate(0.0deg)
          }
          100% {
            transform: rotate(0.0deg)
          }
        }
      }

      &__links {
        list-style-type: none;

        &__link {
          font-size: 1rem;
        }
      }
    }

  }
</style>
