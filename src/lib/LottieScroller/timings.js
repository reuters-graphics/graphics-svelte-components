export class Timings {
  constructor(durationInSeconds = 0, durationInFrames = 0) {
    this.durationInFrames = durationInFrames;
    this.durationInSeconds = durationInSeconds;
    this.framesPerSecond = durationInFrames / durationInSeconds;
  }

  setTotalHeight(
    totalHeight = null,
    pixelsPerSecond = 500,
    customTimings = []
  ) {
    this.customTimings = customTimings;
    if (totalHeight) {
      this.totalHeight = totalHeight;
      return;
    }
    if (customTimings.length === 0)
      return this.durationInSeconds * pixelsPerSecond;
    let totalPixels = 0;
    let customizedSeconds = 0;
    for (const customTiming of customTimings) {
      const [start, end] = customTiming.seconds || [0, 0];
      const multiplier = customTiming.timing || 0;
      const duration = end - start;
      totalPixels += duration * pixelsPerSecond * multiplier;
      customizedSeconds += duration;
    }
    totalPixels +=
      (this.durationInSeconds - customizedSeconds) * pixelsPerSecond;
    this.totalHeight = totalPixels;
  }

  /**
   * Normalize progress from scroller
   * @param {*} rawProgress
   * @returns Progress between 0 and 1
   */
  getNormalizedProgress(rawProgress) {
    return Math.max(Math.min(rawProgress, 1), 0);
  }

  getFrame(rawProgress = 0) {
    const progress = this.getNormalizedProgress(rawProgress);
    const progressInSeconds = this.durationInSeconds * progress;
    console.log(progressInSeconds);
  }
}
