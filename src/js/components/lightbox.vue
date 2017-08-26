<template>
    <div>

        <div class="row">
            <div v-for="slide in slides" class="column">
                <img :src="slide.img" @click="toggleModal();showSlide(slide)" width="100%" class="hover-shadow">
            </div>
        </div>

        <div id="myModal" class="modal"  :class="{ 'modalActive' : isModalActive }">
            <span class="close cursor" @click="toggleModal()">&times;</span>
            <div class="modal-content" >
                <div v-for="slide in slides"  class="BGblack">
                    <div class="Slides" :class="{ 'slideActive' : slide.isActive }">
                        <div class="numbertext">{{ slide.index }} / {{slides.length}}</div>
                        <img :src="slide.img" style="width:100%">

                        <a class="prev" @click="previousSlide(slide)">&#10094;</a>
                        <a class="next" @click="nextSlide(slide)">&#10095;</a>

                        <!--<div class="caption-container">-->
                            <!--<p id="caption"></p>-->
                        <!--</div>-->
                    </div>
                </div>

                <div class="column" v-for="slide in slides">
                    <img class="demo" :src="slide.img" width="100%" @click="showSlide(slide)" alt="Nature">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props : {
          images: {
            default : () => { return [] },
            type: Array
          }
         },
    data() {
        return{
            slides : [],
            isModalActive: false
        }
    },
    methods : {

        nextSlide (slide)  {

            slide.isActive = false;

            return (this.slides.length != slide.index)? this.slideFinder (slide.index+1) : this.slideFinder (1);
        },
        previousSlide (slide) {

            slide.isActive = false;

            return (slide.index == 1)? this.slideFinder (this.slides.length) : this.slideFinder (slide.index-1);
        },
        slideFinder (condition) {
            this.slides.forEach( ( index ) => {
                if ( index.index == condition ) {
                    index.isActive = true;
                }
            });
        },
        showSlide (slide) {
            this.slides.forEach( ( index ) => {
                index.isActive = false;
            });
            slide.isActive = true;
        },
        toggleModal () {

            return this.isModalActive = (this.isModalActive)? false : true;
        }

    },
    created () {
        this.images.forEach((item , index) => {
            return (index == 0 )? this.slides.push({
                index: index+1,
                img: item,
                isActive: true
            }): this.slides.push({
                index: index+1,
                img: item,
                isActive: false
            });

        });




    }
}





</script>
