<script>
  import { normalizeUrl } from '../../utils';
  import { getTime } from './time';

  export let story;

  $: thumbnail = story.thumbnail;
</script>

<div class="story-card">
  <a href="{normalizeUrl(story.canonical_url)}">
    <div class="story-text" class:has-thumbnail="{thumbnail}">
      <span>{story.title}</span>
      <time datetime="{story.display_time}">{getTime(story.display_time)}</time>
    </div>
    {#if thumbnail}
      <div class="thumbnail">
        <img
          src="{thumbnail.renditions.square['120w']}"
          alt="{thumbnail.alt_text}"
        />
      </div>
    {/if}
  </a>
</div>

<style lang="scss">
  @import '@reuters-graphics/style-main/scss/fonts/mixins';

  .story-card a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    color: #404040;

    &:hover,
    &:focus {
      text-decoration: none;
      .story-text span {
        text-decoration: underline;
      }
    }

    .story-text {
      margin-right: 10px;
      width: 100%;
      &.has-thumbnail {
        width: calc(100% - 84px);
      }

      span {
        color: #404040;
        font-size: 16px;
        font-weight: 500;
        @include font-display;
        @media (min-width: 1300px) {
          font-size: 18px;
        }
      }

      time {
        @include font-display;
        margin-top: 8px;
        display: block;
        font-size: 12px;
        font-weight: 400;
        text-decoration: none !important;
      }
    }

    .thumbnail {
      width: 84px;
      height: 84px;
      flex: 0 0 84px;
      border-radius: 8px;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
