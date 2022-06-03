import * as bodymovin from 'lottie-web';

// import bodymovin from 'lottie-web';
import { assets } from '$app/paths';
import urljoin from 'proper-url-join';

class AnimationMaker {
  constructor(opts) {
    this.defaults = {
      playbackConst: 50,
      widthRatio: 1.78,
    };

    for (const key in this.defaults) {
      this[key] = this.defaults[key];
    }

    this.options = opts;
    for (const key in opts) {
      this[key] = opts[key];
    }

    this.setDefaults();
    return this;
  }

  setDefaults() {
    this.$el = document.querySelector(
      `.lottie-container[data-id='${this.id}']`
    );
    this.$canvas = document.getElementById(`${this.id}`);
    this.$scrollTrigger = this.$el.querySelector('.scroll-trigger');
    this.$blurbs = this.$el.querySelectorAll('.blurb');
    if (this.includeSmall && this.smallWidthRatio) {
      this.largeWidthRatio = this.widthRatio;
      this.widthRatio =
        window.innerWidth < 600 ? this.smallWidthRatio : this.largeWidthRatio;
    }

    this.cvs = document.getElementById(this.id);
    this.ctx = this.cvs.getContext('2d');
    this.sizeCTX();
    this.renderAnimation();
    this.render();
  }

  sizeCTX() {
    this.w_height = window.innerHeight;
    this.w_width = window.innerWidth;
    if (!this.fullFrame) {
      this.height =
        this.w_height > this.w_width / this.widthRatio
          ? this.w_width / this.widthRatio
          : this.w_height;
      this.width =
        this.w_height > this.w_width / this.widthRatio
          ? this.w_width
          : this.w_height * this.widthRatio;
    } else {
      this.height =
        this.w_height > this.w_width / this.widthRatio
          ? this.w_height
          : this.w_width / this.widthRatio;
      this.width =
        this.w_height > this.w_width / this.widthRatio
          ? this.w_height * this.widthRatio
          : this.w_width;
    }
    this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
  }

  renderAnimation() {
    this.sizeLoaded =
      window.innerWidth < 600 && this.includeSmall ? this.id + '_sm' : this.id;
    this.animation = bodymovin.loadAnimation({
      renderer: 'canvas',
      loop: false,
      autoplay: false,
      rendererSettings: {
        context: this.ctx,
        scaleMode: 'noScale',
        clearCanvas: true,
      },
      path: urljoin(assets, `lottie/${this.id}.json`),
    });

    this.animation.addEventListener('data_ready', () => {
      this.lastFrame = parseFloat(this.animation.animationData.op);
      this.firstFrame = parseFloat(this.animation.animationData.ip);
      this.frameRate = this.animation.animationData.fr;
      this.duration = this.lastFrame - this.firstFrame;
      this.$scrollTrigger.setAttribute(
        'style',
        `height:${this.duration * this.playbackConst}px;`
      );

      [].forEach.call(this.$blurbs, (el, index) => {
        let height =
          index === 0
            ? ((index + 0.5) * (this.duration * this.playbackConst)) /
              this.blurbs.length /
              2
            : ((index + 0.5) * (this.duration * this.playbackConst)) /
              this.blurbs.length;
        if (!isNaN(parseFloat(el.getAttribute('seconds')))) {
          height =
            parseFloat(el.getAttribute('seconds')) *
            this.frameRate *
            this.playbackConst;
        }
        el.setAttribute('style', `top:${height}px;`);
      });
    });

    this.animation.resize.bind(this.animation);
  }

  render() {
    window.addEventListener('scroll', () => {
      this.scrollAnimate(this.$scrollTrigger);
      this.scrollStick(this.$el);
    });
    window.addEventListener(
      'resize',
      this.debounce((event) => {
        this.resize();
      }, 100)
    );
  }

  resize() {
    if (this.includeSmall && this.smallWidthRatio) {
      this.widthRatio =
        window.innerWidth < 600 ? this.smallWidthRatio : this.largeWidthRatio;
    }

    this.sizeCTX();
    this.sizeToLoad =
      window.innerWidth < 600 && this.includeSmall ? this.id + '_sm' : this.id;
    if (this.sizeLoaded !== this.sizeToLoad) {
      this.animation.destroy();
      this.renderAnimation();
    } else {
      this.animation.resize();
    }

    setTimeout(() => {
      this.scrollAnimate(this.$scrollTrigger);
      this.scrollStick(this.$el);
    }, 500);
  }

  scrollAnimate(el) {
    const scrollTop = window.scrollY;
    const offset = el.getBoundingClientRect().top + scrollTop;
    const bottomOfEl = offset + el.offsetHeight;
    const height = window.innerHeight;
    const triggerPoint = scrollTop + height;

    let eldistance = scrollTop + height - offset;

    if (eldistance < 0) {
      eldistance = 0;
    }

    let frameNumber = eldistance / this.playbackConst;
    if (frameNumber > this.duration - 1) {
      frameNumber = this.duration - 1;
    }

    if (triggerPoint > offset && scrollTop < bottomOfEl) {
      this.animation.goToAndStop(frameNumber, true);
    }
  }

  scrollStick(el) {
    const scrollTop = window.scrollY;
    const offset = el.offsetTop;
    const bottomOfEl = offset + el.offsetHeight;
    const height = window.innerHeight;

    if (scrollTop >= offset) {
      this.$el.classList.add('stuck');
    }
    if (scrollTop < offset) {
      this.$el.classList.remove('stuck');
      this.animation.goToAndStop(0, true);
    }
    if (scrollTop + height > bottomOfEl) {
      this.$el.classList.add('un-stuck');
    }
    if (scrollTop + height < bottomOfEl) {
      this.$el.classList.remove('un-stuck');
    }
  }

  debounce(func, wait, immediate) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}

export default AnimationMaker;
