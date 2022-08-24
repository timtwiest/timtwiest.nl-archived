<script lang="ts">
  import { SOCIAL } from "@/config";
</script>

<div class="socials">
  {#each SOCIAL as item}
    <a target="_blank" href={item.href}>
      {item.type}
    </a>
  {/each}
</div>

<style lang="scss">
  .socials {
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .socials a {
    margin-right: 10px;
  }
</style>
