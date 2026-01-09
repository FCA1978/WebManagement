<template>
    <section class="atropos-section max-w-screen-lg mx-auto pt-32 pb-16 px-4 md:px-8 lg:px-16" ref="bannerSection">
        <div class="atropos my-atropos w-full atropos-header atropos-rotate-touch-scroll-y atropos-rotate-touch">
            <div class="atropos-scale">
                <div class="atropos-rotate">
                    <div class="atropos-inner">
                        <img class="atropos-header-spacer" src="https://atroposjs.com/images/header/atropos-bg.svg" />
                        <img src="https://atroposjs.com/images/header/atropos-bg.svg" data-atropos-offset="-4.5" />
                        <img src="https://atroposjs.com/images/header/atropos-mountains.svg"
                            data-atropos-offset="-2.5" />
                        <img src="https://atroposjs.com/images/header/atropos-forest-back.svg"
                            data-atropos-offset="0" />
                        <img src="https://atroposjs.com/images/header/atropos-forest-mid.svg" data-atropos-offset="2" />
                        <img src="https://atroposjs.com/images/header/atropos-forest-front.svg"
                            data-atropos-offset="4" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Atropos from 'atropos';
let myAtropos = null;

onMounted(() => {
    // 初始化 Atropos
    const atropos = Atropos({
        el: '.my-atropos',
        // 配置项...
    });
    myAtropos = atropos;
});

onUnmounted(() => {
    if (myAtropos) {
        myAtropos.destroy();
    }
});
</script>

<style lang="scss" scoped>
.atropos {
    width: 100%;
    aspect-ratio: 631 / 383;
}

.atropos-rotate {
    position: relative;
}

.atropos-inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform-style: preserve-3d;
    transform: translateZ(0);
    display: block;

    img {
        position: absolute;
        left: -5%;
        top: -5%;
        width: 110%;
        height: 110%;
        -o-object-fit: contain;
        object-fit: contain;
        display: block;
        z-index: 1;
        transform-style: preserve-3d;
        pointer-events: none;
        max-width: none;
    }

    .atropos-header-spacer {
        position: relative;
        width: 100%;
        height: auto;
        left: 0;
        top: 0;
        visibility: hidden;
    }

}
</style>